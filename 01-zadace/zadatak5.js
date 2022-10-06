const camelCase = (string) => {
    cCase = string.split(" ");
    cCase.forEach((word, i) => {
        cCase[i] = word[0].toUpperCase() + word.substring(1);
    });
    cCase[0] = cCase[0].toLowerCase();
    cCase = cCase.join("");
    console.log(cCase);
};

camelCase("web apps vjezbe");
