const zad8 = (obj1, obj2) => {
    arr1 = JSON.stringify(Object.keys(obj1));
    arr2 = JSON.stringify(Object.keys(obj2));
    console.log(arr1 == arr2);
};

zad8({ a: 1, b: 2, c: 3 }, { a: 321, b: 3, c: 1 });
