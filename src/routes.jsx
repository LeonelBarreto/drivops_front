import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard/dashboard';
import Login from './pages/Login/Login';

export default function MainRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
        </BrowserRouter>        
    )
};