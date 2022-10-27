import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const PriveteRoute = ({children}) => {
     const{user} =  useContext(AuthContext)
     const location = useLocation()

     if(!user){
        return <Navigate to={'/signin'} state={{from:location}} replace ></Navigate>
     }
     return children
};

export default PriveteRoute;