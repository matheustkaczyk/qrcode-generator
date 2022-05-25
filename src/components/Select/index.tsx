import ISelect from "./select.interface";

const Select = ({ name, options, handleChange, classN }: ISelect) => {
  return(
    <select className={classN} name={name} onChange={(e) => handleChange(e)}>
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
