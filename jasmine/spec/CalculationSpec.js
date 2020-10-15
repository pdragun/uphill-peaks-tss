/* Copyright © 2020 Peter Dragúň jr. <peter.dragun@gmail.com>
 * This work is free. You can redistribute it and/or modify it under the
 * terms of the Do What The Fuck You Want To Public License, Version 2,
 * as published by Sam Hocevar. See the LICENSE file for more details. */

import { Calculation } from '../../src/js/modules/Calculation.js';

describe("Calculation", function() {
    var calculation;

    beforeEach(function() {
        calculation = new Calculation();
    });

    describe("Check everything together", function(){

        let args = [
            [100, 0, 0, 'metric', 3],
            [200, 0, 0, 'metric', 6],
            [500, 0, 0, 'metric', 15],
            [1000, 0, 0, 'metric', 30],
            [1100, 0, 0, 'metric', 34],
            [1200, 0, 0, 'metric', 37],
            [1500, 0, 0, 'metric', 46],
            [2000, 0, 0, 'metric', 61],
            [2500, 0, 0, 'metric', 76],
            [3000, 0, 0, 'metric', 91],
            [100, 0, 0, 'imperial', 1],
            [200, 0, 0, 'imperial', 2],
            [500, 0, 0, 'imperial', 5],
            [1000, 0, 0, 'imperial', 10],
            [1100, 0, 0, 'imperial', 11],
            [1200, 0, 0, 'imperial', 12],
            [1500, 0, 0, 'imperial', 15],
            [2000, 0, 0, 'imperial', 20],
            [2500, 0, 0, 'imperial', 25],
            [3000, 0, 0, 'imperial', 30],
            [100, 8, 80, 'metric', 6],
            [100, 16, 80, 'metric', 9],
            [328, 8, 80, 'metric', 20],
            [328, 16, 80, 'metric', 30],
            [500, 8, 80, 'metric', 30],
            [500, 16, 80, 'metric', 46],
            [1000, 8, 80, 'metric', 61],
            [1000, 16, 80, 'metric', 91],
            [1100, 8, 80, 'metric', 67],
            [1100, 16, 80, 'metric', 101],
            [1200, 8, 80, 'metric', 73],
            [1200, 16, 80, 'metric', 110],
            [1500, 8, 80, 'metric', 91],
            [1500, 16, 80, 'metric', 137],
            [2000, 8, 80, 'metric', 122],
            [2000, 16, 80, 'metric', 183],
            [2500, 8, 80, 'metric', 152],
            [2500, 16, 80, 'metric', 229],
            [3000, 8, 80, 'metric', 183],
            [3000, 16, 80, 'metric', 274],
            [100, 8, 80, 'imperial', 2],
            [100, 16, 80, 'imperial', 3],
            [200, 8, 80, 'imperial', 4],
            [200, 16, 80, 'imperial', 6],
            [500, 8, 80, 'imperial', 10],
            [500, 16, 80, 'imperial', 15],
            [1000, 8, 80, 'imperial', 20],
            [1000, 16, 80, 'imperial', 30],
            [1100, 8, 80, 'imperial', 22],
            [1100, 16, 80, 'imperial', 33],
            [1200, 8, 80, 'imperial', 24],
            [1200, 16, 80, 'imperial', 36],
            [1500, 8, 80, 'imperial', 30],
            [1500, 16, 80, 'imperial', 45],
            [2000, 8, 80, 'imperial', 40],
            [2000, 16, 80, 'imperial', 60],
            [2500, 8, 80, 'imperial', 50],
            [2500, 16, 80, 'imperial', 75],
            [3000, 8, 80, 'imperial', 60],
            [3000, 16, 80, 'imperial', 90],
        ];
    
        for (let i = 0; i < args.length; i++) {
            it("TSS for: h = " + args[i][0] + ", aw = " + args[i][1] + ", bw = " + args[i][2] + ", units ='" + args[i][3] + "' should be " + args[i][4], function() {
                calculation.height = args[i][0];
                calculation.additionalWeight = args[i][1];
                calculation.bodyWeight = args[i][2];
                calculation.setUnits(args[i][3])
                calculation.calculate();
                expect(calculation.getRes()).toEqual(args[i][4]);
            });
        }
    });

    describe("Check default values", function(){
         
        it("'tss' should be 0", function() {
            expect(calculation.tss).toEqual(0);
        });

        it("'height' should be 0", function() {
            expect(calculation.height).toEqual(0);
        });

        it("'additionalWeight' should be 0", function() {
            expect(calculation.additionalWeight).toEqual(0);
        });
        
        it("'bodyWeight' should be 0", function() {
            expect(calculation.bodyWeight).toEqual(0);
        });
        
        it("'_unitMetric' should be true", function() {
            expect(calculation._unitMetric).toEqual(true);
        });
        
        it("'getUnits()' should be 'metric'", function() {
            expect(calculation.getUnits()).toEqual('metric');
        });
        
        it("'_res' should be 0", function() {
            expect(calculation._res).toEqual(0);
        });
    });

    describe("Check reset()", function(){
         
        it("Reset all values to default", function() {
            calculation.tss = 10;
            calculation.height = 50;
            calculation.additionalWeight = 10;
            calculation.bodyWeight = 80;
            calculation._res = 500;

            expect(calculation.tss).toEqual(10);
            expect(calculation.height).toEqual(50);
            expect(calculation.additionalWeight).toEqual(10);
            expect(calculation.bodyWeight).toEqual(80);
            expect(calculation._res).toEqual(500);

            calculation.reset();

            expect(calculation.tss).toEqual(0);
            expect(calculation.height).toEqual(0);
            expect(calculation.additionalWeight).toEqual(0);
            expect(calculation.bodyWeight).toEqual(0);
            expect(calculation._res).toEqual(0);
        });
    });

    describe("Check set/getUnits()", function(){
         
        it("Set units to 'metric'", function() {
            expect(calculation.setUnits('metric')).toEqual(false);
            expect(calculation.getUnits()).toEqual('metric');
        });

        it("Set units to 'imperial'", function() {
            expect(calculation.setUnits('imperial')).toEqual(true);
            expect(calculation.getUnits()).toEqual('imperial');
        });

        it("Re-set units to 'metric' and don't run calculate() because units was already set to metric", function() {
            //Need to set 'imperial' first because 'metric' has been set by default
            expect(calculation.setUnits('imperial')).toEqual(true);
            expect(calculation.getUnits()).toEqual('imperial');
            
            expect(calculation.setUnits('metric')).toEqual(true);
            expect(calculation.getUnits()).toEqual('metric');

            expect(calculation.setUnits('metric')).toEqual(false);
            expect(calculation.getUnits()).toEqual('metric');
        });

        it("Re-set units to 'imperial' and don't run calculate() because units was already set to metric", function() {
            expect(calculation.setUnits('imperial')).toEqual(true);
            expect(calculation.getUnits()).toEqual('imperial');

            expect(calculation.setUnits('imperial')).toEqual(false);
            expect(calculation.getUnits()).toEqual('imperial');
        });
    });

    describe("Check _isWeight(); additional weight (aw), body weight (bw)", function(){
        it("For aw && bw > 0 should be true", function() {
            calculation.additionalWeight = 1;
            calculation.bodyWeight = 1;
            expect(calculation._isWeight()).toEqual(true);
        });

        it("For aw && bw are = 0 should be false", function() {
            calculation.additionalWeight = 0;
            calculation.bodyWeight = 0;
            expect(calculation._isWeight()).toEqual(false);
        });

        it("For aw && bw  are < 0 should be false", function() {
            calculation.additionalWeight < 0;
            calculation.bodyWeight < 0;
            expect(calculation._isWeight()).toEqual(false);
        });

        it("For aw > 0 && bw < 0 should be false", function() {
            calculation.additionalWeight > 0;
            calculation.bodyWeight < 0;
            expect(calculation._isWeight()).toEqual(false);
        });

        it("For aw > 0 && bw = 0 should be false", function() {
            calculation.additionalWeight > 0;
            calculation.bodyWeight = 0;
            expect(calculation._isWeight()).toEqual(false);
        });

        it("For aw = 0 && bw < 0 should be false", function() {
            calculation.additionalWeight = 0;
            calculation.bodyWeight < 0;
            expect(calculation._isWeight()).toEqual(false);
        });

        it("For aw < 0 && bw > 0 should be false", function() {
            calculation.additionalWeight < 0;
            calculation.bodyWeight > 0;
            expect(calculation._isWeight()).toEqual(false);
        });

        it("For aw = 0 && bw > 0 should be false", function() {
            calculation.additionalWeight = 0;
            calculation.bodyWeight > 0;
            expect(calculation._isWeight()).toEqual(false);
        });

        it("For aw < 0 && bw = 0 should be false", function() {
            calculation.additionalWeight < 0;
            calculation.bodyWeight = 0;
            expect(calculation._isWeight()).toEqual(false);
        });
    });

    describe("TSS for height (h) - imperial [ft] (check _height())", function(){
        let args = [
            [100, 1],
            [200, 2],
            [500, 5],
            [1000, 10],
            [1100, 11],
            [1200, 12],
            [1500, 15],
            [2000, 20],
            [2500, 25],
            [3000, 30],
        ]

        for (let i = 0; i < args.length; i++) {
            it("TSS for h = " + args[i][0] + " should be " + args[i][1], function() {
                calculation.height = args[i][0];
                expect(calculation._height()).toEqual(args[i][1]);
            });
        }
    });

    describe("TSS for height (h) & additional weight (aw) + body weight (bw) with percentage aw/bw - imperial [ft] check (_weightImperial())", function(){
        let args = [
            [100, 8, 80, 10, 2],
            [100, 16, 80, 20, 3],
            [200, 8, 80, 10, 4],
            [200, 16, 80, 20, 6],
            [500, 8, 80, 10, 10],
            [500, 16, 80, 20, 15],
            [1000, 8, 80, 10, 20],
            [1000, 16, 80, 20, 30],
            [1100, 8, 80, 10, 22],
            [1100, 16, 80, 20, 33],
            [1200, 8, 80, 10, 24],
            [1200, 16, 80, 20, 36],
            [1500, 8, 80, 10, 30],
            [1500, 16, 80, 20, 45],
            [2000, 8, 80, 10, 40],
            [2000, 16, 80, 20, 60],
            [2500, 8, 80, 10, 50],
            [2500, 16, 80, 20, 75],
            [3000, 8, 80, 10, 60],
            [3000, 16, 80, 20, 90],
        ]

        for (let i = 0; i < args.length; i++) {
            it("TSS for h = " + args[i][0] + ", aw = " + args[i][1] + ", bw = " + args[i][2] + " (" + args[i][3] + "%) should be " + args[i][4], function() {
                calculation.height = args[i][0];
                calculation.additionalWeight = args[i][1];
                calculation.bodyWeight = args[i][2];
                expect(calculation._weight()).toEqual(args[i][4]);
            });
        }
    });

    describe("Check calcImperial()", function(){

        it("Don't add weight (addition and body) to calculation if incorrect values, h = 1000, aw = 0, bw = 80 should be 10", function() {
            calculation.height = 1000;
            calculation.additionalWeight = 0;
            calculation.bodyWeight = 80;

            calculation.calc();
            expect(calculation._res).toEqual(10);
        });

        it("All values are correct, h = 1000, aw = 8, bw = 80 should be 20", function() {
            calculation.height = 1000;
            calculation.additionalWeight = 8;
            calculation.bodyWeight = 80;

            calculation.calc();
            expect(calculation._res).toEqual(20);
        });

    });


    describe("Check calculate()", function(){

        it("Units = metric, h = 328, aw = 8, bw = 80 should be 19.994880000000002", function() {
            calculation._unitMetric = true;
            calculation.height = 328;
            calculation.additionalWeight = 8;
            calculation.bodyWeight = 80;

            calculation.calculate();
            expect(calculation._res).toEqual(19.994880000000002);
        });

        it("Units = imperial, h = 1000, aw = 8, bw = 80 should be 20", function() {
            calculation._unitMetric = false;
            calculation.height = 1000;
            calculation.additionalWeight = 8;
            calculation.bodyWeight = 80;

            calculation.calculate();
            expect(calculation._res).toEqual(20);
        });

    });


    describe("Check everything together + add hrTSS from user", function(){

        let args = [
            [10, 100, 0, 0, 'metric', 13],
            [10, 200, 0, 0, 'metric', 16],
            [10, 500, 0, 0, 'metric', 25],
            [10, 1000, 0, 0, 'metric', 40],
            [10, 1100, 0, 0, 'metric', 44],
            [10, 1200, 0, 0, 'metric', 47],
            [10, 1500, 0, 0, 'metric', 56],
            [10, 2000, 0, 0, 'metric', 71],
            [10, 2500, 0, 0, 'metric', 86],
            [10, 3000, 0, 0, 'metric', 101],
            [10, 100, 0, 0, 'imperial', 11],
            [10, 200, 0, 0, 'imperial', 12],
            [10, 500, 0, 0, 'imperial', 15],
            [10, 1000, 0, 0, 'imperial', 20],
            [10, 1100, 0, 0, 'imperial', 21],
            [10, 1200, 0, 0, 'imperial', 22],
            [10, 1500, 0, 0, 'imperial', 25],
            [10, 2000, 0, 0, 'imperial', 30],
            [10, 2500, 0, 0, 'imperial', 35],
            [10, 3000, 0, 0, 'imperial', 40],
            [10, 100, 8, 80, 'metric', 16],
            [10, 100, 16, 80, 'metric', 19],
            [10, 328, 8, 80, 'metric', 30],
            [10, 328, 16, 80, 'metric', 40],
            [10, 500, 8, 80, 'metric', 40],
            [10, 500, 16, 80, 'metric', 56],
            [10, 1000, 8, 80, 'metric', 71],
            [10, 1000, 16, 80, 'metric', 101],
            [10, 1100, 8, 80, 'metric', 77],
            [10, 1100, 16, 80, 'metric', 111],
            [10, 1200, 8, 80, 'metric', 83],
            [10, 1200, 16, 80, 'metric', 120],
            [10, 1500, 8, 80, 'metric', 101],
            [10, 1500, 16, 80, 'metric', 147],
            [10, 2000, 8, 80, 'metric', 132],
            [10, 2000, 16, 80, 'metric', 193],
            [10, 2500, 8, 80, 'metric', 162],
            [10, 2500, 16, 80, 'metric', 239],
            [10, 3000, 8, 80, 'metric', 193],
            [10, 3000, 16, 80, 'metric', 284],
            [10, 100, 8, 80, 'imperial', 12],
            [10, 100, 16, 80, 'imperial', 13],
            [10, 200, 8, 80, 'imperial', 14],
            [10, 200, 16, 80, 'imperial', 16],
            [10, 500, 8, 80, 'imperial', 20],
            [10, 500, 16, 80, 'imperial', 25],
            [10, 1000, 8, 80, 'imperial', 30],
            [10, 1000, 16, 80, 'imperial', 40],
            [10, 1100, 8, 80, 'imperial', 32],
            [10, 1100, 16, 80, 'imperial', 43],
            [10, 1200, 8, 80, 'imperial', 34],
            [10, 1200, 16, 80, 'imperial', 46],
            [10, 1500, 8, 80, 'imperial', 40],
            [10, 1500, 16, 80, 'imperial', 55],
            [10, 2000, 8, 80, 'imperial', 50],
            [10, 2000, 16, 80, 'imperial', 70],
            [10, 2500, 8, 80, 'imperial', 60],
            [10, 2500, 16, 80, 'imperial', 85],
            [10, 3000, 8, 80, 'imperial', 70],
            [10, 3000, 16, 80, 'imperial', 100],
        ];
        
        for (let i = 0; i < args.length; i++) {
            it("TSS for: hrTSS =  " + args[i][0] + ", h = " + args[i][1] + ", aw = " + args[i][2] + ", bw = " + args[i][3] + ", units ='" + args[i][4] + "' should be " + args[i][5], function() {
                calculation.tss = args[i][0];
                calculation.height = args[i][1];
                calculation.additionalWeight = args[i][2];
                calculation.bodyWeight = args[i][3];
                calculation.setUnits(args[i][4])
                calculation.calculate();
                expect(calculation.getRes()).toEqual(args[i][5]);
            });
        }
    });
});