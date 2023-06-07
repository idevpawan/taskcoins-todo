import React from "react";

type TInput = {
  placeholder?: string;
  label?: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  type?: string;
  id?: string;
  value?: string; // Added value prop
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Modified type of onChange event
};

const Input = (props: TInput) => {
  return (
    <div className={`flex item-center gap-5 ${props.containerClassName}`}>
      {props.label && (
        <label
          htmlFor={props.id}
          className={`text-gray-300 ${props.labelClassName}`}
        >
          {props.label}
        </label>
      )}
      <input
        id={props.id}
        className={` ${props.inputClassName}`}
        type={props.type}
        value={props.value} // Added value prop
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
