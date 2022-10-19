import React from 'react';
import { Route, Routes} from 'react-router-dom';
import AddClient from './components/admin/adminpage/admin_addclient';
import Client from './components/admin/adminpage/admin_maybeLandingP';
import Home from './components/Home/Home';
const Componentroute = () => {
    return (
        <Routes>
            <Route index element={<Client/>}/>
            <Route path='/add-client' element={<AddClient/>}/>
            <Route path='/home' element={<Home/>}/>
            
                              
        </Routes>    
    );
}

export default Componentroute;
