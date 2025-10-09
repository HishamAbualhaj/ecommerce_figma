import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}
const Button = ({ text, className, onClick }: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`${className} md:py-4 py-2 md:px-8 px-4 bg-primary hover:bg-red-800 transition text-white rounded-sm cursor-pointer`}
    >
      {text}
    </div>
  );
};

export default Button;
