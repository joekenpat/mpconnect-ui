const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const numberToMonthName = (val: number) => months[val - 1];
export const monthNameToNumber = (val: string) => months.indexOf(val) + 1;
