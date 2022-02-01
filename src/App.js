import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import "bootstrap/dist/css/bootstrap.css" ;
import "bootstrap/dist/js/bootstrap.bundle.min.js" ;
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Button } from 'reactstrap';
//import { Card } from 'reactstrap';
//import { CardGroup } from 'reactstrap';
//import { CardBody } from 'reactstrap';
//import { CardImg } from 'reactstrap';
//import { CardTitle } from 'reactstrap';
//import { CardSubtitle } from 'reactstrap';
//import { CardText } from 'reactstrap';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      
      </header>
      <ItemListContainer/>
    </div>
    
  );
}

export default App;
