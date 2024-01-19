import useCalendar from "@/hooks/useCalendar";

function Calendar() {
  const { daysOfTheWeek, weeks, currentMonth, prevMonth, nextMonth } =
    useCalendar();

  return (
    <div className="Calendar">
      <button onClick={prevMonth}>이전 달</button>
      <button onClick={nextMonth}>다음 달</button>
      <h2>
        {currentMonth.getMonth() + 1}월 {currentMonth.getFullYear()}
      </h2>
      <div>
        {daysOfTheWeek.map((day, index) => (
          <span key={index} style={{ display: "inline-block", width: "14%" }}>
            {day}
          </span>
        ))}
      </div>
      {weeks.map((week, i) => (
        <div key={i}>
          {week.map((day, j) => (
            <span key={j} style={{ display: "inline-block", width: "14%" }}>
              {day}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Calendar;
