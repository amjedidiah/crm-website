import React from "react";

type Props = {
  text: String;
  className: String;
  children?: React.ReactNode;
};

export default function Button({ text, className, children }: Props) {
  const gradient = "bg-blue-default";
  const flexBox = "flex justify-center items-center gap-[10px]";
  return (
    <button
      className={`${className} p-0 ${gradient} ${flexBox} text-slate-100 rounded`}
    >
      {children && children}
      {text}
    </button>
  );
}
