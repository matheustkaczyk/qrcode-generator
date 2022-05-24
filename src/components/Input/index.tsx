import IInput from "./input.interface";

const Input = ({ text, handleChange, type }: IInput) => {
  return (
    <input type={type} onChange={(e) => handleChange(e)} placeholder={text} />
  );
}

export default Input;
