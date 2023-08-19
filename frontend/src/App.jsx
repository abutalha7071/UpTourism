import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from "./components/Login";
import Signup from './components/Signup';
import ViewLocation from './components/ViewLocation';
import AddPlace from './components/AddPlace';
import ViewPlace from './components/ViewPlace';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast';
import { UserProvider } from './UserContext';
import UserAuth from './components/UserAuth';
import ManageUser from './components/ManageUser';

function App() {
  return (
    <div>
      <Toaster position='top-center' />
      <BrowserRouter>
      <UserProvider>
        <Navbar />
        
          <Routes>
            <Route path='/' element={ <Navigate to="/home" /> } />
            <Route path='home' element={ <Home /> } />
            <Route path='login' element={ <Login /> } />
            <Route path='signup' element={ <Signup /> } />
            <Route path='addplace' element={ <UserAuth><AddPlace/></UserAuth> } />
            <Route path='viewlocation' element={ <UserAuth><ViewLocation /></UserAuth> } />
            <Route path='viewplace/:location' element={ < ViewPlace /> } />
            <Route path='contact' element={<UserAuth><ContactUs /></UserAuth> } />
            <Route path='manageplaces' element={<ManageUser /> } />
           
          </Routes>
          </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;