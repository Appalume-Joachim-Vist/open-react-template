import React from "react";

function Callto({ number, ...props }) {
    return (
      <a className={props.className} onClick={props.onClick} href={`tel:${number}`}>
        {props.children}
      </a>
    );
  }

export default Callto;