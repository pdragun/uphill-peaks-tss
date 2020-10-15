# Add ascent/descent and additional weight to your hrTSS

Calculate additional TrainingPeaks TSS points for ascent/descent and additional weight (backpack). Idea from Uphill Athlete.

[TrainingPeaks](https://www.trainingpeaks.com/) algorithm properly calculates [TSS](https://www.trainingpeaks.com/blog/applying-the-numbers-part-2-training-stress-score/) on flat ground. For mountains [Uphill Athlete](https://www.uphillathlete.com/) suggests using Training Peaks hrTSS and add TSS for ascent/descent and additional weight. Find more at Uphill Athlete web page: [Understanding and Using the TrainingPeaks Metrics CTL and TSS](https://www.uphillathlete.com/trainingpeaks-metrics-ctl-tss/).

This calculation is purely based on Uphill Athlete ideas:

## 1. For purely aerobic run/hike/ski while carrying no to minimal weight:
**Calculate the TrainingPeaks hrTSS and add 10 TSS for each 1,000 vertical feet of gain.**

Formula for this Uphill Athlete suggestion is:

1. for ascent in meters [m]::
    * addToHrtss = (ascent * 3.048) * 10 / 1000
2. for ascent in feets [ft]:
    * addToHrtss = ascent * 10 / 1000

**OR**

## 2. For purely aerobic run/hike/ski while carrying more than 10 percent of body weight:
**Add 20 TSS/1,000 feet.**

Formula for this Uphill Athlete suggestion is:

1. for ascent in meters [m]:
    * addToHrtss = (ascent * 3.048 / 1000 * additionalWeight * 100 / bodyWeight) + (ascent * 3.048 * 10 / 1000)
2. for ascent in feets [ft]:
    * addToHrtss = (ascent / 1000 * additionalWeight * 100 / bodyWeight) + (ascent * 10 / 1000)

---

Find more at Uphill Athlete web page: [Understanding and Using the TrainingPeaks Metrics CTL and TSS](https://www.uphillathlete.com/trainingpeaks-metrics-ctl-tss/).