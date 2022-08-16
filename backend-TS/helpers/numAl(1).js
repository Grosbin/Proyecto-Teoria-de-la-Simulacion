function getRandomIntInclusive(min, max, num) {
    var m = new Array(num)

    for (i = 0; i < num; i++) {

        min = Math.ceil(min);
        max = Math.floor(max);

        m[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    return m
}

console.log(getRandomIntInclusive(2, 13, 5))