import React, { useState } from "react";
import Counter from "./counter";

const CounterList = () => {
  const [counters, setCounters] = useState([
    { id: 0, value: 0, name: "Хлам" },
    { id: 1, value: 5, name: "Хлам" },
    { id: 2, value: 0, name: "Хлам" },
  ]);

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter key={count.id} onDelete={handleDelete} {...count} />
      ))}
    </>
  );
};

export default CounterList;
