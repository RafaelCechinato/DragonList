import '../../index.css'
import Card from '../../components/Card';
import Col from '../../components/Col';
import Input from '../../components/Input';
import Button from '../../components/Button';
import WarningText from '../../components/WarningText';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from './../../redux/slices/authSlice';
import { useForm } from 'react-hook-form';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
      register,
      handleSubmit,
      clearErrors,
      formState: { errors },
    } = useForm();

    const onlyUser = {
      email: "teste@gmail.com",
      password: "1234"
    }

    const [errorMessage,setErrorMessage] = useState("")

    const login = (data) => {
      if(data.email === onlyUser.email && data.password ===onlyUser.password){
        dispatch(loginUser(onlyUser))
        navigate('/')
      }else{
        setErrorMessage("Usuário não encontrado")
      }
    }

    return (
      <div className='login h-100'>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:"center",alignItems:"center",height:"100%" }}>
          <Col col={3} className={"col-sm-12"} style={{ padding: '10px' }}>
            <Card style={{padding:'35px'}}>
              <form onSubmit={handleSubmit(login)}>
                <Input 
                  style={{ display: 'flex', flexWrap: 'wrap'}}
                  id="email"
                  type="email"
                  label_title="Email:"
                  placeholder="Digite seu email"
                  register={register}
                  registerOptions={{
                    required: 'O email é obrigatório',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: 'Insira um email válido',
                    },
                  }}
                  onChange={(e) => {
                    clearErrors('email');
                    register('email').onChange(e.target.value);
                  }}
                  errors={errors.email}
                />
                <Input 
                  style={{ display: 'flex', flexWrap: 'wrap', marginTop:"10px"}}
                  id="password"
                  type="password"
                  label_title="Senha:"
                  placeholder="Digite sua senha"
                  register={register}
                  registerOptions={{
                    required: 'O senha é obrigatório',
                  }}
                  onChange={(e) => {
                    clearErrors('password');
                    register('password').onChange(e.target.value);
                  }}
                  errors={errors.password}
                />
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:"center",alignItems:"center" }}>
                  <Button 
                    style={{marginTop:"25px",padding:"10px", width:"100px"}}
                    className="login"
                    type={'submit'}
                  >
                    Login
                  </Button>
                  {errorMessage !== "" &&
                  (
                    <WarningText text={errorMessage}/>
                  )}
                </div>
              </form>
            </Card>
          </Col>
        </div>
      </div>
    );
  };
  
export default Login;