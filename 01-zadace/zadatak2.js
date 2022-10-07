const isHere = (item) => {
    if (item >= 100 && item <= 15000) {
        console.log(`${item} je unutar [100, 150000]`);
    } else {
        console.log(`${item} nije unutar [100, 150000]`);
    }
};

isHere(53);
