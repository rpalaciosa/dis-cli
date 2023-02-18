import React from 'react'; 
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes , Route  } from 'react-router-dom';
import ListaDiscos from './pages/disco'
import './App.css';

function App() {
  return (

    <div className="App">
        <Router>
            <div>
               
               <Routes>
                  <Route path='/' element={<ListaDiscos />} />
               </Routes>
            </div>
        </Router>
    </div>
    
  );
}

export default App;
