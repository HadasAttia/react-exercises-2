import React from 'react';
import { useState } from 'react';
import './RealNumber.scss';

function RealNumber() {

	const [isShown, setShown] = useState();

	function isValid(e) {
		setShown(e.target.value);
		const numbers = '^[0-9]+$';
		if(e.target.value.match(numbers)) {
			setShown(true);
		} else {
			setShown(false);
		}
	}
	return (
		<div className="RealNumber">
			<p>
				The button near the input should be visible only if the input contains <u>only</u> numbers.
				Examples:<br />
				"238764" - <span className="value--valid">valid</span> <br />
				"A13" - <span className="value--invalid">invalid</span>
			</p>

			<input type="text" className="text-box" onChange={isValid} />
			{ isShown && <button>Submit</button> }
		</div>
	)
}

export default RealNumber;
