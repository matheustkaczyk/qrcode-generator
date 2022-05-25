import ISelect from "./select.interface";

const Select = ({ name, options, handleChange }: ISelect) => {
  return(
    <select name={name} onChange={(e) => handleChange(e)}>
      {
        options.map((option: string) => (
        <option key={option} value={option}>
          {option}
        </option>
        ))
      }
    </select>
  )
}

export default Select;
