import React, { FC } from "react"

interface IButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "reset" | "submit"
  isDisabled?: boolean;
}

const Button: FC<IButtonProps> = ({ label, onClick, className, type = "button", isDisabled = false }) => {
  return (
    <button onClick={onClick} className={className} type={type} disabled={isDisabled}>{label}</button>
  )
};

export default Button;
