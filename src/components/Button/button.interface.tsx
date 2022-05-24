type BtnType = 'button' | 'submit' | 'reset';
interface IButton {
  text: string;
  type: BtnType;
  handleClick: () => void;
}

export default IButton;
