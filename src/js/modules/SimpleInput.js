/* Copyright © 2020 Peter Dragúň jr. <peter.dragun@gmail.com>
 * This work is free. You can redistribute it and/or modify it under the
 * terms of the Do What The Fuck You Want To Public License, Version 2,
 * as published by Sam Hocevar. See the LICENSE file for more details. */

/**
 * Handle input field
 */
export class SimpleInput {

    /**
     * 
     * @param {string} name - div id, div where is input field and error text
     */
    constructor(name) {
        /** @type {string} */
        this.name = name;
        
        /** @type {number} */
        this.value = 0;

        /** @type {*} */
        this.errorText = null;

        this.inputElement = document.getElementById(name + '_input');
        this.errorElement = document.getElementById(name + '_error');
    }

    /**
     * Set value from html input element
     */
    setValue() {
        let parsedInt = parseInt(this.inputElement.value);
        if (parsedInt > 0) {
            this.value = parsedInt;
        } else {
            this.value = 0;
        }
    }

    /**
     * Set value to 0
     */
    reset() {
        this.value = 0;
    }

    /** 
     * Show error
     */
    displayError (errorText) {
        this.errorElement.innerText = errorText;
        this.errorElement.classList.remove('hide');
        this.errorElement.classList.add('show', 'invalid-feedback');
        this.inputElement.classList.add('is-invalid');
    }

    /**
     * Hide error
     */
    hideError() {
        this.errorElement.innerText = null;
        this.errorElement.classList.remove('show', 'invalid-feedback');
        this.errorElement.classList.add('hide');
        this.inputElement.classList.remove('is-invalid');
    }
}
