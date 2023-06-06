import React from "react";

type TButton = {
  title: string;
  className?: string;
  onClick?: () => void;
};

export default function Button(props: TButton) {
  return (
    <button className={`${props.className}`} onClick={props.onClick}>
      {props.title}
    </button>
  );
}
