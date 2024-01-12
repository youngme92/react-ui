export function createCalendarInfo(currentMonth: Date) {
  const daysOfTheWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();
  const startDay = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const days = [...Array(daysInMonth).keys()].map((day) => day + 1);
  const daysWithBlanks = Array(startDay).fill(null).concat(days);

  const weeks = [];
  while (daysWithBlanks.length) {
    weeks.push(daysWithBlanks.splice(0, 7));
  }
  return {
    daysOfTheWeek,
    weeks,
  };
}
