import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import AppRoutes from './routes/index';

const BaseLayout = () => {
  const location = useLocation();

  const shouldApplyLayout = location.pathname !== '/';

  return (
    <>
      {shouldApplyLayout?
        <div className="d-flex">
            {/* <Sidebar /> */}
            <div className="p-4" style={{ width: '100%' }}>
                <AppRoutes />
            </div>
        </div>
        :
        <AppRoutes />
      }
    </>
  );
};

function App() {
  return (
    <Router>
      <BaseLayout />
    </Router>
  );
}

export default App;
