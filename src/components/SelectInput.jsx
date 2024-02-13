const SelectInput = ({ options, onChange, value, placeholder }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-[1.5rem] border border-transparent bg-[#F8F8F8] px-4 py-3 font-bold text-sl-primary-green outline-none focus:border-[#97DAAA]"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default SelectInput
