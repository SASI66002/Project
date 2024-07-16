import React from 'react';
import { createRoot } from 'react-dom/client';
import "./App.css"
import Main from './Main';
createRoot(document.getElementById('root')).render(<Main/>)


//? React.createElement is used to create the element ("Type","props","children")


//! type -" h1","div","submit"
//! props- " attributes"
//! children -information/data which one you want to show into the browser