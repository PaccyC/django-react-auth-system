import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './containers/Login'
import Signup from './containers/Signup'
import Home from './containers/Home'
import Layout from './hocs/Layout';

import {  Provider} from 'react-redux'
 import store from './store'
function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Layout>

              <Routes>
              <Route path='/'  element={<Home/>}/>
              <Route path='/signup'  element={<Signup/>}/>
              <Route path='/login'  element={<Login/>}/>
              </Routes>
          </Layout>
        </Router>
      </Provider>

      
     
    </div>
  );
}

export default App;
