import React from "react";

type TInput = {
  placeholder?: string;
  label?: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  type?: string;
  id?: string;
};

const Input = (props: TInput) => {
  return (
    <div className={`flex item-center gap-5 ${props.containerClassName}`}>
      {props.label && (
        <label
          htmlFor="time"
          className={`text-gray-300 ${props.labelClassName}`}
        >
          {props.label}
        </label>
      )}
      <input
        id={props.id}
        className={` ${props.inputClassName}`}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
