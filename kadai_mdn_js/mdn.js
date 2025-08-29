const date = new Date("2000-01-17T16:45:30");
const [month, day, year] = [
  date.getMonth() + 1,
  date.getDate(),
  date.getFullYear(),
];

console.log('${year}年${month}月${day}日');