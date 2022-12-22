import {Route, Routes} from 'react-router-dom';
import Login from '../Pages/login';

const main: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    );

};