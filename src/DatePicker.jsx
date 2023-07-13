import { useEffect, useState } from "react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { About } from "./About";

export function DatePicker({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [weekStartsOnSunday, setWeekStartsOnSunday] = useState(false);
  
  return (
    <div className="date-picker-container">
      <button
        onClick={() => setIsOpen((current) => !current)}
        className="date-picker-button"
      >
        {value == null ? "Pick a date" : format(value, "MMM do, yyyy")}
      </button>
      {isOpen ? (
        <DataPickerBody value={value} onChange={onChange} weekStartsOnSunday={weekStartsOnSunday} />
      ) : (
        <About
          setWeekStartsOnSunday={setWeekStartsOnSunday}
          weekStartsOnSunday={weekStartsOnSunday}
        />
      )}
    </div>
  );
}

function DataPickerBody({ value, onChange, weekStartsOnSunday }) {
  const [visibleMonth, setVisibleMonth] = useState(value || new Date());
  const weekStartsOn = { weekStartsOn: weekStartsOnSunday? 0 : 1 };
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(startOfMonth(visibleMonth), weekStartsOn),
    end: endOfWeek(endOfMonth(visibleMonth), weekStartsOn),
  });

  useEffect(() => {
    const keyAction = (e) => {
      console.log(e);

      if (!e.ctrlKey && e.key === "ArrowLeft") {
        moveMonthsBy(-1);
      } else if (!e.ctrlKey && e.key === "ArrowRight") {
        moveMonthsBy(1);
      } else if (e.key === "Escape") {
        onChange(new Date());
        setVisibleMonth(new Date());
      } else if (e.ctrlKey && e.key === "ArrowLeft") {
        moveMonthsBy(-12);
      } else if (e.ctrlKey && e.key === "ArrowRight") {
        moveMonthsBy(12);
      } else return;
    };
    document.addEventListener("keydown", keyAction);

    return () => document.removeEventListener("keydown", keyAction);
  }, []);

  function moveMonthsBy(months) {
    setVisibleMonth((currentMonth) => {
      return addMonths(currentMonth, months);
    });
  }

  return (
    <div className="date-picker">
      <div className="date-picker-header">
        <button
          onClick={() => moveMonthsBy(-1)}
          className="month-button"
        >
          &larr;
        </button>
        <div className="current-month">
          {format(visibleMonth, "MMMM - yyyy")}
        </div>
        <button
          onClick={() => moveMonthsBy(1)}
          className="month-button"
        >
          &rarr;
        </button>
      </div>
      <div className="date-picker-grid-header date-picker-grid">
        {weekStartsOnSunday? <div>Sun</div> : false}
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        {weekStartsOnSunday? false : <div>Sun</div> }
      </div>
      <div className="date-picker-grid-dates date-picker-grid">
        {visibleDates.map((date) => (
          <button
            onClick={() => onChange(date)}
            key={date.toDateString()}
            className={`date ${
              !isSameMonth(date, visibleMonth) && "date-picker-other-month-date"
            } ${isSameDay(date, value) && "selected"} ${
              isToday(date) && "today"
            }`}
          >
            {date.getDate()}
          </button>
        ))}
      </div>
    </div>
  );
}
