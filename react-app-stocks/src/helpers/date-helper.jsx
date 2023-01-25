export const convertDateToUnixTimeStamp = (date) => {
  return Math.floor(date.getTime() / 1000);
  // need to convert the milliseconds to seconds for charting
};

export const convertUnixTimeStampToDate = (unixTimestamp) => {
  const milliseconds = unixTimestamp * 1000;
  return new Date(milliseconds).toLocaleDateString();
  //converts the date to string
};

export const createDate = (date, days, weeks, months, years) => {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days + 7 * weeks);
    newDate.setMonth(newDate.getMonth() + months);
    newDate.setFullYear(newDate.getFullYear() + years);

    return newDate;
    // helps to create start date and end date to pass into finhub api
}