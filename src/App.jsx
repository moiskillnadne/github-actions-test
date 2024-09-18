import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo222" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo 2" />
        </a>
      </div>
      <h1>Vite + React + Viktor Riabkov</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 5)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>

        <p>APP VERSION: {import.meta.env.VITE_APP_VERSION}</p>
      </div>
      {/* <p className="read-the-docs">Click on the Vite and React logos to learn more</p> */}
    </>
  );
}

export default App;
