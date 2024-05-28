import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom/client'

import App from './App.jsx';
import './index.css';

import Event from './components/Event.jsx';

import Jsx from './components/Jsx.jsx';
import PropsState from './components/PropsState.jsx';
import ListKey from './components/ListKey.jsx';
import Ref from './components/Ref.jsx';
import ConditionalRendering from './components/ConditionalRendering.jsx';

import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import AxiosGet from './components/AxiosGet.jsx';
import CrudCreate from './components/CrudCreate.jsx';
import AxiosPost from "./components/AxiosPost.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes

import Toastify from './components/Toastify.jsx';
import ContextHook from './components/ContextHook.jsx';
import Card from './components/Card.jsx'
import Login from './components/Login.jsx'; 
import Signup from './components/SignUp.jsx';





// Use createRoot from 'react-dom/client' to render
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap everything inside a Router */}
    {/* <Components /> */}
    {/* <Event/> */}

    {/* <Jsx/> */}
    {/* <PropsState name="Hassan"/> */}
    {/* <ListKey/> */}
    {/* <Ref/> */}
    {/* <ConditionalRendering/> */}
    {/* <Routes>
        <Route path='/' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes> */}
    {/* <AxiosGet/> */}
    {/* <CrudCreate/> */}

{/* <ContextHook/> */}
{/* <Card/> */}
 {/* <Toastify/> */}
 
 <Router>
  <Routes> {/* Wrap your Route components with Routes */}
    <Route path="/SignUp" element={<Signup />} /> {/* Use 'element' prop instead of 'component' */}
    <Route path="/" element={<Login />} /> {/* Use 'element' prop instead of 'component' */}
  </Routes>
</Router>

 



  </React.StrictMode>
);
