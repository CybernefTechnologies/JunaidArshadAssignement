import './App.css';
import {useState, useEffect, Fragment} from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
function App() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://randomuser.me/api/');
      if(!res.ok) {
        throw new Error('network error');
      }
      const resData = await res.json();
      console.log(resData);
      const userDataUpdate = resData.results;
      setUserData(userDataUpdate);
      }
      catch(err) {
        console.log(err.message);
      }
    }
    fetchData();
  }, [])
  return (
    <Fragment>
      {
        !userData ? <p>Page is Loading</p> : null
      }
      {
        userData ?
        <Fragment>
          <Header userData={userData}></Header>
          <main>
            <Profile userData={userData}></Profile>
          </main>
        </Fragment>
        
        
        
        :null
      }
      
    </Fragment>
  );
}

export default App;
