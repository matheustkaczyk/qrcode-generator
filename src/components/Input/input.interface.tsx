interface IInput {
  text: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

export default IInput;
