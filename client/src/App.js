import React,{ Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import './App.css';
import {Container} from 'reactstrap';


class App extends Component{
render() {
  return (
    <div className="App">
     <AppNavbar />
     <Container>
     <ShoppingList/>
     </Container> 
    </div>
  );

 }
}

export default App;
