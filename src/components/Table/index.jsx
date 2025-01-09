const Table = ({children, style}) => {
    return (
      <div className='table w-100' style={style}>
        {children}
      </div>
    );
  };
  
export default Table;