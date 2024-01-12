import { useState } from "react";
import { createCalendarInfo } from "../core";

export default function useCalendar(defaultToday = new Date()) {
  const [currentMonth, setCurrentMonth] = useState(defaultToday);

  const { daysOfTheWeek, weeks } = createCalendarInfo(currentMonth);

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };
  return { daysOfTheWeek, weeks, currentMonth, prevMonth, nextMonth };
}
