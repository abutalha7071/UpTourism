import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import AddLocation from './components/AddLocation';
import ViewLocation from './components/ViewLocation';
import AddPlace from './components/AddPlace';
import ViewPlace from './components/ViewPlace';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast';
import { UserProvider } from './UserContext';

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
            <Route path='addlo' element={ <AddLocation /> } />
            <Route path='addpl' element={ <AddPlace /> } />
            <Route path='viewlo' element={ <ViewLocation /> } />
            <Route path='viewpl' element={ < ViewPlace /> } />
            <Route path='contact' element={ <ContactUs /> } />
           
          </Routes>
          </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;