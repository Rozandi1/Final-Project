import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export default function Button({ children, type, onclick, buttonStyle, buttoneSize }) {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttoneSize) ? buttoneSize : SIZES[0];

  return (
    <Link to="/sign-up" className="btn-mobile">
      <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onclick} type={type}>
        {children}
      </button>
    </Link>
  );
}
