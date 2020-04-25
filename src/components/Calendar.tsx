import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

interface ICalendarProps {
  calendarHidden: boolean;
}

interface IDateProps {
  isToday: boolean;
  isSelected: boolean;
}

const Frame = styled.div`
  visibility: ${(props: ICalendarProps) =>
    props.calendarHidden ? "visible;" : "hidden;"}
  width: 300px;
  border: 1px solid lightgrey;
  box-shadow: 2px 2px 2px #eee;
`;

const Header = styled.div`
  font-weight: 500;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  cursor: pointer;
`;

const Body = styled.div`
  width: 100%;
`;

const Days = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Cell = styled.td<IDateProps>`
  ${(props) =>
    props.isToday &&
    css`
      border: 1px solid #eee;
    `}

  ${(props) =>
    props.isSelected &&
    css`
      background-color: #eee;
    `}
`;

const Dates = styled.table`
  width: 100%;
  td {
    text-align: center;
  }
  cursor: pointer;
`;

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
  let numberOfRows =
    numArray.length % 7 === 0
      ? Math.floor(numArray.length / 7)
      : Math.floor(numArray.length / 7) + 1;

  for (let i = 0; i < numberOfRows; ++i) {
    secondArray.push(Array<number>(7));
    for (let j = 0; j < 7; ++j) {
      secondArray[i][j] = numArray[i * 7 + j];
    }
  }
  return secondArray;
}

function Calendar({ calendarHidden }: ICalendarProps) {
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
  const [selectedDate, setselectedDate] = useState(today.getDay());
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [startDay, setStartDay] = useState(getStartDay(today));

  useEffect(() => {
    setselectedDate(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDay(date));
  }, [date]);

  const days = isLeapYear(year) ? DAYS_LEAP : DAYS;
  const entireDays: number[][] = converTo2dArray(
    Array(days[month] + startDay),
    startDay
  );

  return (
    <Frame calendarHidden={calendarHidden}>
      <Header>
        <Button
          onClick={() => setDate(new Date(year, month - 1, today.getDate()))}
        >
          Prev
        </Button>
        <span>{`${MONTHS[month]} ${year} `}</span>
        <Button
          onClick={() => setDate(new Date(year, month + 1, today.getDate()))}
        >
          Next
        </Button>
      </Header>
      <Body>
        <Days>
          {DAYS_OF_WEEK.map((day) => {
            return <strong>{day}</strong>;
          })}
        </Days>
        <Dates>
          {entireDays.map((_dayRow) => (
            <tr>
              {_dayRow.map((_day) => (
                <Cell
                  onClick={() => {
                    setselectedDate(_day);
                  }}
                  isToday={_day === today.getDate()}
                  isSelected={_day === selectedDate}
                >
                  {_day > 0 ? _day : " "}
                </Cell>
              ))}
            </tr>
          ))}
        </Dates>
      </Body>
    </Frame>
  );
}

export default Calendar;
