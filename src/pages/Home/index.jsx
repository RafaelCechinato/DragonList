import React, { useEffect, useState } from 'react';
import Table from "../../components/Table";
import TableHeader from "../../components/Table/Header";
import Col from '../../components/Col';
import { get,remove } from './../../api';
import { FaTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
import Swal from 'sweetalert2';
import { selectDragon } from './../../redux/slices/dragonSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Spinner from '../../components/Spinner';

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [dragonList, setDragonList] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await get('/',);
        setDragonList(
          result.sort((a, b) => a.name.localeCompare(b.name))
        );
      } catch (err) {
        console.log("Err")
      }finally{
        setLoading(false)
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    const removeDragonFromList = (id) => {
      setDragonList(dragonList.filter(dragon => dragon.id !== id));
    }

    const alertDelete =  (dragon) => {
      Swal.fire({
        title: 'Tem certeza?',
        text: 'Você não poderá reverter esta ação!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim, excluir!',
        customClass: {
          confirmButton: 'button add',
          cancelButton: 'button cancel',
        },
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          remove(`/${dragon.id}`)
          Swal.fire(
            'Excluído!',
            'O item foi excluído com sucesso.',
            'success'
          );
          removeDragonFromList(dragon.id)
        }
      });
    }

    const viewDragon = (dragon) => {
      dispatch(selectDragon(dragon))
      navigate('/view-dragon')
    }

    const goToEditDragon = (dragon) => {
      dispatch(selectDragon(dragon))
      navigate('/form-dragon')
    }

    const goToFormDragon = () => {
      navigate('/form-dragon')
    }

    return (
      <div className='home h-100'>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:"center",alignItems:"center",height:"100%" }}>
          <Col col={10} className={"col-sm-12"} style={{ padding: '10px', marginTop:"5%",marginBottom:"5%" }}>
            <div className='w-100' style={{display:"block"}}>
              <div className='w-100' style={{display:'flex',justifyContent:"end"}}>
                  <Button 
                    style={{marginTop:"25px",padding:"10px", width:"200px",marginBottom:"20px"}}
                    className="add"
                    type={'button'}
                    onClick={() => goToFormDragon()}
                  >
                    <div style={{display: 'flex', justifyContent:"center",alignItems:"center"}}>
                      <TiPlus size={20} style={{marginRight:"5px"}}/>
                      Cadastrar Dragão
                    </div>
                  </Button>
              </div>
            </div>
            <Table>
              <TableHeader 
                data={[
                  { 
                    title:"ID",
                    col_size:3
                  },
                  {
                    title:"Nome",
                    col_size:3
                  },
                  {
                    title:"Tipo",
                    col_size:2
                  },
                  { 
                    title:"Data Criação",
                    col_size:3
                  },
                  { 
                    title:"",
                    col_size:1
                  }
                ]}
              />
              {loading?
                <div className='w-100' style={{display:'flex', justifyContent:"center",alignItems:"center", marginTop:"15px"}}>
                  <Spinner />
                </div>
                :
                dragonList.map(dragon => {
                  return(
                    <div key={`dragon-${dragon.id}`} className='w-100' style={{backgroundColor:"white",minHeight: '30px',
                      padding: '10px',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems:'center',marginTop:"10px"}}>
                      <Col col={3} className={"col-sm-12"} style={{ padding: '10px' }}>
                        <label>{dragon.id}</label>
                      </Col>
                      <Col col={3} className={"col-sm-12"} style={{ padding: '10px' }}>
                        <label>{dragon.name}</label>
                      </Col>
                      <Col col={2} className={"col-sm-12"} style={{ padding: '10px' }}>
                        <label>{dragon.type}</label>
                      </Col>
                      <Col col={3} className={"col-sm-12"} style={{ padding: '10px' }}>
                        <label>{dragon.createdAt}</label>
                      </Col>
                      <Col col={1} className={"col-sm-12"} style={{ padding: '10px' }}>
                        <div style={{display:"flex",justifyContent:"end",alignItems:"center"}}>
                          <FaEye  size={20} color='black' className='c-pointer' style={{marginRight:"10px"}} onClick={() => viewDragon(dragon)}/>
                          <FaPencilAlt size={20} color='black' className='c-pointer' onClick={() => goToEditDragon(dragon)} style={{marginRight:"10px"}}/>
                          <FaTrashAlt size={20} color='red' className='c-pointer' onClick={() => alertDelete(dragon)} />
                        </div>
                      </Col>
                    </div>
                  )
                })
              }
              
            </Table>
          </Col>
        </div>
      </div>
    );
  };
  
export default Home;