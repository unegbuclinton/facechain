function getNumberOfDays(end) {
    const date1 = new Date();
    const date2 = new Date(end);
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date2.getTime() - date1.getTime();

    const diffInDays = Math.floor(diffInTime / oneDay);
    const diffInHours = Math.floor((diffInTime % oneDay) / (60 * 60 * 1000));
    const diffInMinutes = Math.floor(((diffInTime % oneDay) % (60 * 60 * 1000)) / (60 * 1000));
    const days = Math.ceil(diffInTime / oneDay);


    return {diffInDays, diffInHours, diffInMinutes, days};
}

export default getNumberOfDays;