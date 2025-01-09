import './index.css';

const Button = ({style, className, children, onClick, disabled = false}) => {
    return (
      <button className={`button ${className}`} disabled={disabled} onClick={onClick} style={style}>
        {children}
      </button>
    );
  };
  
export default Button;