import { useState } from 'react';
import Login from './Login';
import ScraperForm from './ScaperForm';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  return <>{isLoggedIn ? <ScraperForm /> : <Login onLogin={loginHandler} />}</>;
}

export default App;
