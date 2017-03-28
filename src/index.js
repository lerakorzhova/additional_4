module.exports = function multiply(first, second) {
    let resultArr = [];
    let firstArr = first.split('').map(x => Number(x));
    let secondArr = second.split('').map(x => Number(x));
    resultArr.length = firstArr.length + secondArr.length;
    resultArr.fill(0);

    for (let i = secondArr.length - 1, k = 0, m = k; i >= 0; i--, k++) {
        m = k;
        for (let j = firstArr.length - 1; j >= 0; j--, m++) {
            if (typeof firstArr[j] === 'undefined' || typeof secondArr[i] === 'undefined') continue;
            resultArr[m] += firstArr[j] * secondArr[i];
        }
    }
    let buffer = 0;
    for (let i = 0; i < resultArr.length; i++) {
        resultArr[i] += buffer;
        buffer = Math.floor(resultArr[i] / 10);
        resultArr[i] = resultArr[i] % 10;
    }
    resultArr = resultArr.reverse().join('').replace(/^0+/, '');
    return resultArr;
}