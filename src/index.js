module.exports = function toReadable(number) {
    let lst = {
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine',
            10: 'ten',
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen',
            20: 'twenty',
            30: 'thirty',
            40: 'forty',
            50: 'fifty',
            60: 'sixty',
            70: 'seventy',
            80: 'eighty',
            90: 'ninety',
            100: 'hundred',
            1000: 'thousand'
        },
        string = number.toString().split(''),
        getTens = (num) => {
            return num > 20 ? Array(lst[num - Math.trunc(num % 10)], lst[Math.trunc(num % 10)]).join(' ').trim() : lst[num]
        }
    if (number == 0) return 'zero'
    if (number <= 20) return lst[number]
    return number / 100 >= 1 ? Array(lst[Math.trunc(number / 100)], lst[100], getTens(number % 100)).join(' ').trim().replace(',', '') : getTens(number % 100)
}
