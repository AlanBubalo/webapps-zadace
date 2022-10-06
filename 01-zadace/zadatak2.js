const isHere = (item) => {
    if (item in [100, 150000]) {
        console.log(`${item} je unutar [100, 150000]`);
    } else {
        console.log(`${item} nije unutar [100, 150000]`);
    }
};

isHere(53);
