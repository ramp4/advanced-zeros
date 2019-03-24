module.exports = function getZerosCount(number, base) {
    var divider = [];
    let limit = Math.ceil(Math.sqrt(base));
    for (let i = 2; i <= limit;) {
        if (base % i == 0) {
            base = base / i;
            limit = Math.ceil(Math.sqrt(base));
            divider.push(i);
        }
        else {
            i++;
        }
    }
    if (base > 1) divider.push(base);
    let divinderValue;
    let zerosCount = Infinity;
    console.log(divider);
    for (let i = 0; i < divider.length; i++) {
        let divinderAmount = 0;
        for (let j = i; j < divider.length; j++) {
            if (divider[i] === divider[j]) {
                divinderAmount++;
            }
        }
        let summ = 0;
        let multiplier = divider[i];
        while (multiplier < number) {
            summ += (number - number % multiplier) / multiplier;
            multiplier *= divider[i];
        }
        divinderValue = (summ - summ % divinderAmount) / divinderAmount;
        zerosCount = Math.min(divinderValue,zerosCount);
    }
    return zerosCount;
}