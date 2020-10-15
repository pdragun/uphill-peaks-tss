/* Copyright © 2020 Peter Dragúň jr. <peter.dragun@gmail.com>
 * This work is free. You can redistribute it and/or modify it under the
 * terms of the Do What The Fuck You Want To Public License, Version 2,
 * as published by Sam Hocevar. See the LICENSE file for more details. */

import { SimpleInput } from './SimpleInput.js';
import { CustomTexts } from './CustomTexts.js';

/**
 * Handle imput fields for Units (feet vs meter) as radio buttons
 * @extends SingleInput
 */
export class UnitsInput extends SimpleInput {
	constructor(name) {
		super(name);
		this.heightTextElm = document.getElementsByClassName('units_height');
		this.inputElements = document.getElementsByName('units');
	}

    /**
     * Set value from html radio buttons element
     */
	setValue() {
		for (let i = 0, length = this.inputElements.length; i < length; i++) {
			if (this.inputElements[i].checked) {
				this.value = this.inputElements[i].value;
				break;
			}
		}
	}

	/**
	 * Show correct unit (feet vs meter) in label in HTML form
	 */
	showUnits() {
		for (let i = 0; i < this.heightTextElm.length; i++) {
			this.heightTextElm.item(i).innerText = ' [' + CustomTexts.units[this.value].height + ']';
		}
	}
}
