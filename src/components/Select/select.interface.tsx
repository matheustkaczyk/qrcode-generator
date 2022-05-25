type options = 'small' | 'medium' | 'large';

interface ISelect {
  name: string;
  options: options[];
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  classN?: string;
}

export default ISelect;
