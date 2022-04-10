/* eslint-disable jsx-a11y/anchor-is-valid */
// The forwardRef is important!!

import { Children, forwardRef, useState } from "react";
import { FormControl } from "react-bootstrap";

// Dropdown needs access to the DOM node in order to position the Menu
export const CustomToggle = forwardRef(({ children, onClick }, ref) => (
  <a
    className='text-decoration-none text-light'
    href=''
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}>
    {children}
    <span className='ms-2'>&#x25bc;</span>
  </a>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
export const CustomMenu = forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}>
        <FormControl
          autoFocus
          className='mx-3 my-2 w-auto'
          placeholder='Type to filter...'
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className='list-unstyled'>
          {Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);
