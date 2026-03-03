/**
 * ST-Sinhala-Util
 * A library to handle Sinhala text processing
 * Developed by ST-Imagix
 */

const units = ['', 'එක', 'දෙක', 'තුන', 'හතර', 'පහ', 'හය', 'හත', 'අට', 'නවය'];
const teens = ['දහය', 'එකොළහ', 'දොළහ', 'දහතුන', 'දාහතර', 'පහළොව', 'දහසය', 'දහහත', 'දහඅට', 'දහනවය'];
const tens = ['', 'දහය', 'විස්ස', 'තිහ', 'හතළිහ', 'පනහ', 'හැට', 'හැත්තෑව', 'අසූව', 'අනූව'];

/**
 * Convert number to Sinhala words
 * @param {number} num 
 * @returns {string} Sinhala words
 */
function numberToSinhala(num) {
    if (num === 0) return 'බිංදුව';
    if (num > 999999) return 'මෙම අගය ඉතා විශාලයි';

    let result = '';

    // Thousands
    if (Math.floor(num / 1000) > 0) {
        let th = Math.floor(num / 1000);
        result += (th === 1 ? 'එක්' : units[th]) + 'දහස් ';
        num %= 1000;
    }

    // Hundreds
    if (Math.floor(num / 100) > 0) {
        let h = Math.floor(num / 100);
        result += (h === 1 ? 'එක්' : units[h]) + 'සිය ';
        num %= 100;
    }

    // Tens and Units
    if (num > 0) {
        if (num < 10) {
            result += units[num];
        } else if (num < 20) {
            result += teens[num - 10];
        } else {
            result += tens[Math.floor(num / 10)];
            if (num % 10 > 0) {
                result += ' ' + units[num % 10];
            }
        }
    }

    return result.trim() + 'යි';
}

module.exports = { numberToSinhala };