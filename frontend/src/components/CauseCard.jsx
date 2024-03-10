import React from "react";

export default function CauseCard(props) {
  return (

    <div className="row mt-3 mb-3">
      {props.data.causes.map((item) => (
        <div className="col-4 p-3" key={item.id}>
          {item.name}
        </div>
      ))}
    </div>
  );
}
