import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './util/firebaseConfig';
import Login from './Login';
import ScraperForm from './ScaperForm';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const app = initializeApp(firebaseConfig);
  console.log(app);

  const loginHandler = (email, password) => {
    console.log(email, password);
    setIsLoggedIn(true);
  };

  return <>{isLoggedIn ? <ScraperForm /> : <Login onLogin={loginHandler} />}</>;
}

export default App;
