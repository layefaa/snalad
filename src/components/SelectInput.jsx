const SelectInput = ({ options, onChange, value, placeholder }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-[1.5rem] border border-gray-300 bg-[#F8F8F8] px-4 py-2 font-bold text-sl-primary-green focus:border-[#97DAAA] focus:outline-none"
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
