import './index.css';

const Button = ({style, className, children, onClick}) => {
    return (
      <button className={`button ${className}`} onClick={onClick} style={style}>
        {children}
      </button>
    );
  };
  
export default Button;