/* Copyright © 2020 Peter Dragúň jr. <peter.dragun@gmail.com>
 * This work is free. You can redistribute it and/or modify it under the
 * terms of the Do What The Fuck You Want To Public License, Version 2,
 * as published by Sam Hocevar. See the LICENSE file for more details. */

/**
 * Calculate additional TSS
 */
export class Calculation {
    constructor() {
        /** @type {!number} */
        this.tss = 0;
        
        /** @type {!number} */
        this.height = 0;
        
        /** @type {!number} */
        this.additionalWeight = 0;
        
        /** @type {!number} */
        this.bodyWeight = 0;
        
        /** @type {boolean} */
        this._unitMetric = true;
        
        /**
         * @type {!number}
         * @private
         */
        this._res = 0;
    }

    /**
     * Empty values
     */
    reset() {
        this.tss = 0;
        this.height = 0;
        this.additionalWeight = 0;
        this.bodyWeight = 0;
        this._res = 0;
    }

    /**
     * Check which unit is stored (metric or imperial)
     * @returns {string} unit metric or imperial
     */
    getUnits() {
        if (this._unitMetric === true) {
            return 'metric';
        }
        return 'imperial';
    }

    /**
     * Set units
     * Check if the value has been changed, if yes, run recalculate
     * @param {string} units - accept only 'metric' or 'imperial'
     */
    setUnits(units) {
        if (units === 'metric' && this.getUnits() === 'imperial') {
            this._unitMetric = true;
            this.calculate();
            return true;
        }
        
        if (units === 'imperial' && this.getUnits() === 'metric') {
            this._unitMetric = false;
            this.calculate();
            return true;
        }
        return false;
    }

    /**
     * Start calculation, use different formulas form metric or imperial unit
     */    
    calculate() {
        if (this.getUnits() === 'metric') {
            this.height = this.metersToFeets(this.height);
        }
        this.calc();
    }

    /**
     * Get rounded result from calculation
     * @returns {number} result
     */
    getRes() {
        return Math.round(this._res);
    }

    /**
     * Calculate with imperial [ft] unit
     */
    calc() {
        this._res = this._height();
        if (this._isWeight()) {
            this._res = this._weight();
        }
        this._res += this.tss;
	}

    /**
     * Add additional weight and body weight to calculation?
     * @private
     * @returns {boolean}
     */
    _isWeight() {
        if (this.additionalWeight > 0 && this.bodyWeight > 0) {
            return true;
        }
        return false
    }

    /**
     * Count TSS points from ascent/descent [ft]
     * @private
     * @returns {number}
     */
    _height() {
        return this.height * 10 / 1000;
    }

    /**
     * Count TSS points from ascent/descent [ft], additional weight and body weight
     * @private
     * @returns {number}
     */
    _weight() {
        return (this.height / 1000 * this.additionalWeight * 100 / this.bodyWeight) + (this.height * 10 / 1000);
    }

    /**
     * Get feets (imperial units) from meters
     * @param {number} meters
     * @returns {number} feets
     */
    metersToFeets(meters) {
        return meters * 3.048
    }
}
