/* Copyright © 2020 Peter Dragúň jr. <peter.dragun@gmail.com>
 * This work is free. You can redistribute it and/or modify it under the
 * terms of the Do What The Fuck You Want To Public License, Version 2,
 * as published by Sam Hocevar. See the LICENSE file for more details. */

import { SimpleInput } from './SimpleInput.js';
import { UnitsInput } from './UnitsInput.js';
import { CustomTexts } from './CustomTexts.js';
import { Calculation } from './Calculation.js';

/**
 * Run
 */
export class Run {
	constructor() {
        this.formEle = [
            'Units',
            'Hrtss',
            'Height',
            'AdditionalWeight',
            'BodyWeight'
        ];

        this.formEle['Units'] = new UnitsInput('units');
        this.formEle['Hrtss'] = new SimpleInput('hrtss');
        this.formEle['Height'] = new SimpleInput('height');
        this.formEle['AdditionalWeight'] = new SimpleInput('additional_weight');
        this.formEle['BodyWeight'] = new SimpleInput('body_weight');
        this.resultElem = document.getElementById('result');

        /**
         * @class Calculation
         */
        this.Calc = new Calculation();
	};

	init() {
        // Add event handlers to inputs, which trigger calculations
        let simpleInputs = ['Hrtss', 'Height', 'AdditionalWeight', 'BodyWeight'];
        simpleInputs.forEach( input => {
            this.formEle[input].inputElement.addEventListener('input', (evt) => {
                this.formEle[input].setValue();
                this.calculate();
            })

            //For FF which store input values, onLoad get these values and display result
            window.addEventListener('load', (evt) => {
                this.formEle[input].setValue();
                this.calculate();
            });
        });

        // Add event handlers to units radio buttons, which trigger changes in calculations and displaying texts
        for (let i = 0, length = this.formEle['Units'].inputElements.length; i < length; i++) {
            this.formEle['Units'].inputElements[i].addEventListener('click', (evt) => {
                this.formEle['Units'].value = this.formEle['Units'].inputElements[i].value;
                this.calculate();
            })

            // For FF which store input values, onLoad get these values and display result
            window.addEventListener('load', (evt) => {
                this.formEle['Units'].setValue();
                this.formEle['Units'].showUnits();
                this.calculate();
            });
        }

        this.formEle['Units'].setValue();
        this.formEle['Units'].showUnits();
	}


    /**
     * Set values from form to Calculation object, calculate result and display errors (if any)
     */
	calculate() {
        this.formEle['Units'].showUnits();

        this.Calc.setUnits(this.formEle['Units'].value);
        this.Calc.tss = this.formEle['Hrtss'].value;
        this.Calc.height = this.formEle['Height'].value;
        this.Calc.additionalWeight = this.formEle['AdditionalWeight'].value;
        this.Calc.bodyWeight = this.formEle['BodyWeight'].value;
        this.Calc.calculate();

        this.validate();
        this.reset();
	}


    /**
     * Validate form, show and hide errors
     */
	validate() {

        //No values, clear all, hide all errors
        if (this.Calc.tss === 0
            && this.Calc.height === 0
            && this.Calc.additionalWeight === 0
            && this.Calc.bodyWeight === 0) {
        
            this.formEle['Hrtss'].hideError();
            this.formEle['BodyWeight'].hideError();
            this.formEle['Height'].hideError();
            this.reset();
            this.resultElem.innerText = 0;
            return;
        }

        //TSS show warning
        if (this.Calc.tss === 0) {
            this.formEle['Hrtss'].displayError(CustomTexts.error['hrtss']);
        } else {
            this.formEle['Hrtss'].hideError();
        }

        //Ascent/descent have to be
        if (this.Calc.height === 0) {
            this.formEle['Height'].displayError(CustomTexts.error['height']);
        } else {
            this.formEle['Height'].hideError();
        }

        //Body weight is mandatory when additional weight
        if (this.Calc.bodyWeight === 0 && this.Calc.additionalWeight > 0) {
            this.formEle['BodyWeight'].displayError(CustomTexts.error['bodyWeight']);
        }

        if (this.Calc.bodyWeight > 0) {
            this.formEle['BodyWeight'].hideError();
        }

        this.showResult();
	}

    /**
     * Reset Calculation
     */
	reset() {
        this.Calc.reset();
	}

    /**
     * Display result in HTML
     */
	showResult() {
        this.resultElem.innerText = this.Calc.getRes();
	}
}
