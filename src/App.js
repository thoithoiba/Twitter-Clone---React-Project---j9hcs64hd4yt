import './App.css';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Widgets from './components/Widgets/Widgets';
import {useSelector} from 'react-redux';
import Login from './components/Login/Login';
function App() {

  const user = useSelector((state) => state.login.user)
  console.log(user)
  
  return (
    <>
    {
      user ? <div className="App">
      <Sidebar />
      <Home />
      <Widgets />
     </div> : <Login />
    }
    </>
  );
}

export default App;