import React from "react";

function Mailto({ email, subject, body, ...props }) {
    return (
      <a className={props.className} onClick={props.onClick} href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }

export default Mailto;