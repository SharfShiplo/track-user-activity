import { useEffect, useState } from 'react';
import './App.css';
import IdleTimer from './idle-timer';

function App() {
  const [isTimeout, setIsTimeout] = useState(false);

  useEffect(() =>{
    const timer = new IdleTimer({
      timeout: 15, 
      onTimeout: () => {
        setIsTimeout(true);
      },
      onExpired : () => {
        setIsTimeout(true);
      }
    });

    return ()=> {
      timer.cleanUp();
    }
  }, [])

  return (
    <section className="App-header" aria-label='app header'>
      <h1>{isTimeout ? "Inactive" : "Active"}</h1>
      <small>If you do not have any activity on mouse or keyboard for 15s it will consider you as inactive.</small>
    </section>
  );
}

export default App;
