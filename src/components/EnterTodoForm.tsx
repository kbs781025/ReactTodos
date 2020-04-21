import React, { useState } from "react";

interface EnterTodoFormProps {
  addNewTodo: (content: string) => void;
}

function EnterTodoForm({ addNewTodo }: EnterTodoFormProps) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    addNewTodo(inputValue);
    setInputValue("");
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
