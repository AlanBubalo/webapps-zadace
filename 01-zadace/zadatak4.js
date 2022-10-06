const dividedBy3 = (arr) => {
    newArr = arr.filter((x) => x % 3 === 0);
    console.log(`Brojevi djeljivi s 3: ${newArr}`);
};

dividedBy3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
