import React,{ Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/itemModal';
import {Provider} from 'react-redux';
import store from './store';

import './App.css';
import {Container} from 'reactstrap';


class App extends Component{
render() {
  return (
    < Provider store={store}>
    <div className="App">
     <AppNavbar />
     < ItemModal/>
     <Container>
     <ShoppingList/>
     </Container> 
    </div>
    
    </Provider> 
  );

 }
}

export default App;
