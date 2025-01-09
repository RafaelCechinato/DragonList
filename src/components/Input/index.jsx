import './index.css'
import WarningText from './../WarningText'

const Input = ({
  style,
  label_title,
  placeholder,
  value,
  type = 'text',
  disabled = false,
  required = false,
  title,
  onChange,
  register,
  registerOptions = {},
  id,
  errors 
}) => {
  return (
    <div className="input" style={style}>
      <label htmlFor={id}>{label_title}</label>
      <input
        id={id}
        title={title}
        placeholder={placeholder}
        value={value}
        type={type}
        disabled={disabled}
        required={required}
        {...(register && register(id, registerOptions))}
        onChange={onChange}
      />
      {errors && <WarningText style={{marginTop:"5px"}} text={errors.message} />}
    </div>
  );
};

export default Input;