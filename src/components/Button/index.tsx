import IButton from "./button.interface";

const Button = ({ text, type, handleClick }: IButton) => {
  return(
    <button type={type} onClick={() => handleClick()}>
      {text}
    </button>
  )
}

export default Button;
