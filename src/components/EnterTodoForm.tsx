import React, { useState } from "react";

interface EnterTodoFormProps {
  contentSetter: React.Dispatch<React.SetStateAction<string>>;
  calendarHidden: boolean;
  toggleCalendar: React.Dispatch<React.SetStateAction<boolean>>;
}

function EnterTodoForm({
  contentSetter,
  calendarHidden,
  toggleCalendar,
}: EnterTodoFormProps) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (inputValue) {
      contentSetter(inputValue);
      toggleCalendar(!calendarHidden);
      setInputValue("");
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter Your Todo"
          value={inputValue}
          onChange={handleChange}
        ></input>
        <input type="submit" value="Add Todo" onClick={handleSubmit}></input>
      </form>
    </div>
  );
}

export default EnterTodoForm;
