const minutesToHours = (minutes) => {
    hours = ~~(minutes / 60);
    remainingMinutes = minutes % 60;
    console.log(`Ovo je ${hours} sata i ${remainingMinutes} minuta`);
};

minutesToHours(125);
