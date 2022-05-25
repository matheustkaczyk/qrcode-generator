type options = 'Small' | 'Medium' | 'Large';

interface ISelect {
  name: string;
  options: options[];
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  classN?: string;
}

export default ISelect;
