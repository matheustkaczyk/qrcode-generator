import IInput from "./input.interface";

const Input = ({ text, handleChange, type }: IInput) => {
  return (
    <input type={type} onChange={(e) => handleChange(e)}>
      {text}
    </input>
  );
}

export default Input;
