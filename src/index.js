module.exports = function check(str, bracketsConfig) {
    const arrStr = str.split('');
    let res = trimSimilarBrackets();

    function trimSimilarBrackets () {
        let pair = [];
        arrStr.forEach((el, index) => {
            pair.push(el)
            if (index > 0) {
                bracketsConfig.forEach((item) => {
                    if (pair.join('') === item.join('')) {
                        arrStr.splice(index - 1, 2);
                        trimSimilarBrackets();
                    }
                })
                pair.shift(); 
            }
        })
        return arrStr;
    }
    return res.length === 0;
}