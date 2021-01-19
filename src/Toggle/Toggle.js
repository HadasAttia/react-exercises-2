import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './Toggle.scss';

function Toggle() {

	const [isShown, setShown] = useState(false);

	function handleClick() {
		setShown(!isShown);
	}

	return (
		<div className="Toggle">
			<p>Make the logo show and disappear when clicking on the button.</p>
			<button onClick={handleClick}>Show / Hide</button>
			{ isShown && <div className="Toggle__logo-wrapper">
				<img src={logo} alt="logo" />
			</div> }
		</div>
	)
}

export default Toggle;
