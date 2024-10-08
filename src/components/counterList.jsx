import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Хлам" },
    { id: 1, value: 5, name: "Журнал" },
    { id: 2, value: 0, name: "Хлам" },
    { id: 3, value: 0, name: "Газета" },
    { id: 4, value: 3, name: "Книга" },
    { id: 5, value: 0, name: "Хлам" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
    console.log("handle reset");
  };

  const handleIncrement = (id) => {
    const elementIndex = counters.findIndex((c) => c.id === id);
    const newCounters = [...counters];
    newCounters[elementIndex].value++;
    setCounters(newCounters);
  };

  const handleDecrement = (id) => {
    const elementIndex = counters.findIndex((c) => c.id === id);
    const newCounters = [...counters];

    if (newCounters[elementIndex].value > 0) {
      newCounters[elementIndex].value--;
    }

    setCounters(newCounters);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};
export default CountersList;
