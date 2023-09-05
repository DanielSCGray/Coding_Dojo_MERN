/**
 * From a Chipotle interview.
 *
 * It ain't much, but it's honest work. A worker who measures water level fluctuations in a river is asked to find the
 * largest fluctuation in water levels during a day, but only for rises in water levels.
 */

const riverLevels1 = [15, 17, 30];
const expected1 = 15; // 30 - 15 = 15

const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
const expected2 = 20; // 25 - 5 = 20
// 30 - 15 = 15.
// 25 - 5 = 20.
// 20 is the  biggest change in elevation from 5 to 25.

const riverLevels3 = [15, 17, 30, 20, 50, 16, 25, 9, 3];
const expected3 = 30; // 50 - 20 = 30

const riverLevels4 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
const expected4 = 11; // 12 - 1 = 11

const riverLevels5 = [1, 5];
const expected5 = 4;

const riverLevels6 = [5, 1];
const expected6 = -1;

const riverLevels7 = [9, 7, 7, 7];
const expected7 = -1;

const riverLevels8 = [42];
const expected8 = -1;

/**
 * It ain't much, but it's honest work. A worker who measures water level fluctuations in a river is asked to find the
 * largest fluctuation in water levels during a day, but only for rises in water levels.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} waterLevels Non-empty .
 * @returns {number} The max water-level rise amount or -1 if none.
 */
function measureWaterLevels(waterLevels) {
    // Pseudo-code is very much encouraged for this problem! Try verbally explaining your steps as you evaluate the array yourself.
    // You'll be keeping track of a few key values.
    // The largest rise in water (what we want to return.)
    // The value of the water's low point.
    // Hint: We'll need to write logic that checks if the water level is falling, which then would update our low point variable.
    let min = waterLevels[0];
    let greatestChange = -1;
    for (var i = 0; i < waterLevels.length; i++) {
        if (waterLevels[i] < min) {
            min = waterLevels[i];
        } else if (waterLevels[i] > min) {
            if (waterLevels[i] - min > greatestChange) {
                greatestChange = waterLevels[i] - min;
            }
        } if (waterLevels[i] < waterLevels[i - 1]) {
            min = waterLevels[i]
        }

    }
    return greatestChange;

}

/*****************************************************************************/