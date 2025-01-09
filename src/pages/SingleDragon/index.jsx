import '../../index.css'
import Card from '../../components/Card';
import Col from '../../components/Col';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cleanSelectedDragon } from './../../redux/slices/dragonSlice';
import { IoIosArrowBack } from "react-icons/io";

const SingleDragon = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const dragonSelected = useSelector((state) => state.dragon.dragon_selected);

    const goBack = () => {
        dispatch(cleanSelectedDragon())
        navigate('/')
    }

    return (
      <div className='singleDragon h-100'>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:"center",alignItems:"center",height:"100%" }}>
          <Col col={3} className={"col-sm-12"} style={{ padding: '10px' }}>
            <a onClick={() => goBack()} style={{marginBottom:"25px"}}><IoIosArrowBack size={20} style={{marginRight:"5px"}}/> Voltar</a>
                
            <Card style={{padding:'35px'}}>
                <label className='w-100' style={{margin:"10px",display:'block'}}>
                    <span style={{marginRight:"5px"}}><strong>ID:</strong></span>
                    {dragonSelected.id}
                </label>
                <label className='w-100' style={{margin:"10px",display:'block'}}>
                    <span style={{marginRight:"5px"}}><strong>NOME:</strong></span>
                    {dragonSelected.name}
                </label>
                <label className='w-100' style={{margin:"10px",display:'block'}}>
                    <span style={{marginRight:"5px"}}><strong>TIPO:</strong></span>
                    {dragonSelected.type}
                </label>
                <label className='w-100' style={{margin:"10px",display:'block'}}>
                    <span style={{marginRight:"5px"}}><strong>DATA DE CRIAÇÃO:</strong></span>
                    {dragonSelected.createdAt}
                </label>
            </Card>
          </Col>
        </div>
      </div>
    );
  };
  
export default SingleDragon;