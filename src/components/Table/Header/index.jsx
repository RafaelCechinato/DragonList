import Col from './../../Col';
import './index.css'

const TableHeader = ({style, data}) => {
    return (
      <div className='table-header w-100' style={style}>
        {data.map((headerItem,index) => {
            return (
              <Col key={index} col={headerItem.col_size} className={"col-sm-12"} style={{ padding: '10px' }}>
                <span>{headerItem.title}</span>
              </Col>
            )
        })}
      </div>
    );
  };
  
export default TableHeader;