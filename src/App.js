import './App.css';
import Login from './components/Login';
import Home from './components/Home';
;

function App() {

const isUserLoggedIn = false;


  return (
  
    <>
    {
      isUserLoggedIn ? <Home /> : <Login />
    }
   
 
    </>
  );
}

export default App;
