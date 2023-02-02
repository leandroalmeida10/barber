import {Route, Routes} from 'react-router-dom';
import Login from '../Pages/login';
import Register from '../Pages/register';

const Main: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastrar" element={<Register />} />
        </Routes>
    );

};

export default Main;