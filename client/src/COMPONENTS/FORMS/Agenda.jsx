import React, { useState } from "react";

const Agenda = () => {
  const [selection, setSelection] = useState([]);

  const options = [
    { id: 1, date: "Monday: 9 to 1 am " },
    { id: 2, date: "Thuesday: 1 to 3 pm" },
    { id: 3, date: "Wednesday: 3 to 6 pm" },
    { id: 4, date: "Thursday: 9 to 1 am" },
    { id: 5, date: "Friday: 1 to 3 pm" },
  ];

  const handleSelection = (event) => {
    const optionSelected = event.target.value;
    if (selection.includes(optionSelected)) {
      setSelection(selection.filter((date) => date !== optionSelected));
    } else {
      setSelection([...selection, optionSelected]);
    }
  };

  const selectAll = (event) => {
    event.preventDefault();
    const allOptions = options.map((option) => {
      if (option.date.includes(":")) {
        return `${option.date}`;
      } else {
        return `${option.date} 1 to 3 pm`;
      }
    });
    setSelection(allOptions);
  };
  
  const deselectAll = (event) => {
    event.preventDefault();
    setSelection([]);
  };

  return (
    <div className="textColorGreen textItalic text-center">
      <h3>Select your available days and time for a visit:</h3>
      {options.map((option) => (
        <div key={option.id}>
          <h4>{option.date}</h4>
          <label>
            <input
              type="checkbox"
              className="form-checkbox focus:outline-none focus:ring-2 hover:border-green-300 selecter"
              value={`${option.date}`}
              checked={selection.includes(`${option.date}`)}
              onChange={handleSelection}
            />
            {option.date.includes(":") ? "" : "1 to 3 pm"}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Agenda;
