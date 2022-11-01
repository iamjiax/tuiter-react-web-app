const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const formatDate = (dateStr) => {
    const dates = dateStr.split("-");
    return month[dates[1] - 1] + " " + dates[2] + ", " + dates[0];
}

export const formatMonth = (dateStr) => {
    const dates = dateStr.split("-");
    return month[dates[1] - 1] + " " + dates[0];
}
