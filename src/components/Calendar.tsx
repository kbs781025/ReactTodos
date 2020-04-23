import React, { useState, useEffect } from "react";

function getStartDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
}

function isLeapYear(year: number) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function converTo2dArray(numArray: number[], startDay: number) {
  for (let i = 0; i < numArray.length; ++i) {
    numArray[i] = i - startDay + 1;
  }

  let secondArray: number[][] = [];
  for (let i = 0; ; ++i) {
    secondArray.push(Array<number>(7));
    for (let j = 0; j < 7; ++j) {
      secondArray[i][j] = numArray[i * 7 + j];
    }
    if (i >= 7) break;
  }
  return secondArray;
}

function getRows(days: number[][]) {
  return days.map((dayRow) => (
    <tr>
      {dayRow.map((day) => (
        <td>{day > 0 ? day : " "}</td>
      ))}
    </tr>
  ));
}

function Calendar() {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const MONTHS = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(today.getDay());
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [startDay, setStartDay] = useState(getStartDay(today));

  useEffect(() => {
    setDay(date.getDay());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDay(date));
  }, [date]);

  const days = isLeapYear(year) ? DAYS_LEAP : DAYS;
  const entireDays: number[][] = converTo2dArray(
    Array(days[month] + startDay),
    startDay
  );
  console.log(entireDays);
  return (
    <div>
      <button onClick={() => setDate(new Date(year, month - 1, day))}>
        Prev
      </button>
      <span>{`${MONTHS[month]} ${year} `}</span>
      <button onClick={() => setDate(new Date(year, month + 1, day))}>
        Next
      </button>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {DAYS_OF_WEEK.map((day) => {
          return <strong>{day}</strong>;
        })}
      </div>
      <table>{getRows(entireDays)}</table>
    </div>
  );
}

export default Calendar;
