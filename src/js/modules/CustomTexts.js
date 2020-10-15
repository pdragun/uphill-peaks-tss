/* Copyright © 2020 Peter Dragúň jr. <peter.dragun@gmail.com>
 * This work is free. You can redistribute it and/or modify it under the
 * terms of the Do What The Fuck You Want To Public License, Version 2,
 * as published by Sam Hocevar. See the LICENSE file for more details. */

/**
 * Texts
 * @property {object.[]} units - values for units
 * @property {object.[]} error - error texts
 */
export let CustomTexts = {
	'units': ['metric', 'imperial'],
  'error': ['hrtss', 'height', 'bodyWeight']
};

CustomTexts.units['metric'] = {'height': 'm'};
CustomTexts.units['imperial'] = {'height': 'ft'};

CustomTexts.error['hrtss'] = 'You don\'t add TSS from TrainingPeaks! Please ADD the result from this form to YOUR TSS value in TrainingPeaks.';
CustomTexts.error['height'] = 'Ascent/descent height is a necessary value for calculation. Please add it.';
CustomTexts.error['bodyWeight'] = 'Please also add your body weight. Algorithm need it to calculate the percentage of your additional weight from your body weight.';