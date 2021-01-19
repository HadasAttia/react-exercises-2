import React, { useState } from 'react';
import Mark from './Mark/Mark';
import './Marker.scss';

function Marker() {

	const [items, setItems] = useState([
		"First item",
		"Second special item",
		"Third item",
		"Fourth special item",
	]);

	const [value, setValue] = useState('');
	return (
		<div className="Marker">
			<p>
				Display a list of all items in the state.<br />
				If the value in the input can be found within the items - <span className="marker">marker</span> it.<br />
				Example: if the input value is "elf" then item "shelf" should look like: sh<span className="marker">elf</span>.
				Apply the marker for <u>all items</u>.
			</p>

			<input type="text" placeholder="Text to marker..." value={value} onChange={(e) => { setValue(e.target.value) }} />
			<ul>
				{items.map((item, i) => {
					return <Mark mark={value} text={item} key={i} />
				})}
			</ul>
		</div>
	)
}

export default Marker;
