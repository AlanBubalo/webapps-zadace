const zad6 = (x) => {
    if (x >= 0 && x <= 1000) {
        res = 1;
        for (let i = 7; i < x; i += 7) {
            res *= i;
        }
        console.log(res);
    }
};

zad6(23);
