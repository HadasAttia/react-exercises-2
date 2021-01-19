import React, { useState } from 'react';
import './Todo.scss';

function Todo() {

	const [task, setTask] = useState('');
	const [list, setList] = useState([]);

	function submit() {
		if (task === '') return;
		setList([...list, { task: task, id: list.length }]);
		setTask('');
	}
	function remove(i) {
		let filteredList = list.filter((task) => task.id !== i)
		setList(filteredList);
	}

	return (
		<div className="Todo">
			<form onSubmit={(e) => {
				e.preventDefault();
				submit();
			}}>
				<h3>Todo List:</h3>
				<p>Make a Todo list (add & delete options):</p>
				<input placeholder="Your task..." value={task} onChange={(e) => setTask(e.target.value)}/> 
				<button>Add task</button>
			</form>
			<ul>
				{list.map((task) => {
					return <li key={task.id}> {task.task} <button onClick={() => remove(task.id)}>Remove</button></li>
				})}
			</ul>
		</div>
	)
}

export default Todo;
