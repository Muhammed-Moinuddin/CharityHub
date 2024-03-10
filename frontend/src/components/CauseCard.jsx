import React from "react";

export default function CauseCard(props) {
  return (
    <div>
      {props.data.causes.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
