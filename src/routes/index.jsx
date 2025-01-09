import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ProtectedRoute from './protectedRoute'; 
import SingleDragon from '../pages/SingleDragon';
import FormDragon from '../pages/FormDragon';

const AppRoutes = () => {
  
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/view-dragon" element={<SingleDragon />} />
          <Route path="/form-dragon" element={<FormDragon />} />
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    );
  };
  
  export default AppRoutes;