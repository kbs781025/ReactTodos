import React, { useState } from "react";
import styled from "styled-components";

const Frame = styled.div`
  display: flex;
`;

const InputBox = styled.input`
  width: 20px;
  text-align: center;
`;

const Colon = styled.strong`
  margin-left: 5px;
  margin-right: 5px;
`;

const InputButtons = styled.div`
  margin-left: 5px;
`;

interface ITimeSetterProps {
  dateSetter: React.Dispatch<React.SetStateAction<Date>>;
}

function TimeSetter({ dateSetter }: ITimeSetterProps) {
  const [isAm, setAm] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const handleAmChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const input = e.currentTarget.value;
    if (input === "AM") {
      setAm(true);
    } else {
      setAm(false);
    }
  };

  const handleHours = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === "") {
      setHours(0);
      return;
    }

    const parsedInput = parseInt(e.currentTarget.value);

    if (parsedInput > 12) {
      return;
    }
    setHours(parsedInput);
  };

  const handleMinutes = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === "") {
      setMinutes(0);
      return;
    }

    const parsedInput = parseInt(e.currentTarget.value);

    if (parsedInput > 59) {
      return;
    }
    setMinutes(parsedInput);
  };

  const handleOk = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const date = new Date();
    dateSetter(
      new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        isAm ? hours : hours + 12,
        minutes
      )
    );
  };

  return (
    <div>
      <Frame>
        <select onChange={handleAmChange}>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
        <InputBox type="text" value={hours} onChange={handleHours}></InputBox>
        <Colon>:</Colon>
        <InputBox
          type="text"
          value={minutes}
          onChange={handleMinutes}
        ></InputBox>
        <InputButtons>
          <input type="submit" value="Ok" onSubmit={handleOk}></input>
          <input type="submit" value="Cancle"></input>
        </InputButtons>
      </Frame>
    </div>
  );
}

export default TimeSetter;
