import '../../index.css'
import Card from '../../components/Card';
import Col from '../../components/Col';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cleanSelectedDragon } from './../../redux/slices/dragonSlice';
import { IoIosArrowBack } from "react-icons/io";
import { useForm } from 'react-hook-form';
import Input from '../../components/Input';
import Button from '../../components/Button';

const FormDragon = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
      register,
      handleSubmit,
      clearErrors,
      formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
    console.log('Dados do formulário:', data);
    };

    // const dragonSelected = useSelector((state) => state.dragon.dragon_selected);

    const goBack = () => {
        // dispatch(cleanSelectedDragon())
        navigate('/')
    }

    return (
      <div className='singleDragon h-100'>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:"center",alignItems:"center",height:"100%" }}>
          <Col col={3} className={"col-sm-12"} style={{ padding: '10px' }}>
            <a onClick={() => goBack()} style={{marginBottom:"25px"}}><IoIosArrowBack size={20} style={{marginRight:"5px"}}/> Voltar</a>
            <Card style={{padding:'35px'}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Input 
                    style={{ display: 'flex', flexWrap: 'wrap'}}
                    id="name"
                    type="text"
                    label_title="Nome:"
                    placeholder="nome"
                    register={register}
                    registerOptions={{
                      required: 'O nome é obrigatório',
                    }}
                    onChange={(e) => {
                      clearErrors('name');
                      register('name').onChange(e.target.value);
                    }}
                    errors={errors.name}
                  />
                  <Input 
                    style={{ display: 'flex', flexWrap: 'wrap', marginTop:"10px"}}
                    id="type"
                    type="text"
                    label_title="Tipo:"
                    placeholder="tipo"
                    register={register}
                    registerOptions={{
                      required: 'O tipo é obrigatório',
                    }}
                    onChange={(e) => {
                      clearErrors('type');
                      register('type').onChange(e.target.value);
                    }}
                    errors={errors.type}
                  />
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:"center",alignItems:"center" }}>
                    <Button 
                      style={{marginTop:"25px",padding:"10px", width:"100px",fontWeight:"bold"}}
                      className="add"
                      type={'submit'}
                    >
                      Cadastrar
                    </Button>
                  </div>
                </form>
            </Card>
          </Col>
        </div>
      </div>
    );
  };
  
export default FormDragon;