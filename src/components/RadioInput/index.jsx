
  const RadioInput= ({ options, onChange }) => {
    return (
      <div className="Radio-container">
        {options.map((option, index) => (
          <div key={index} className="RadioInput-wrapper">
            <input
              type="radio"
              id={option.id}
              name={option.name}
              value={option.value}
              onChange={() => onChange(option.value)}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
      </div>
    );
  };
  
  export default RadioInput;