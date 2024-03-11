import { useState } from 'react';
import './App.css';

function App() {
  let [name, setName] = useState("Kaer");

  const handeClick = () => {
    setName("Another thing but Kaer");
    console.log(name)
  }

  return (
    <div className="App">
      <h1 >Hello {name}</h1>
      <button onClick={handeClick}> change name </button>
    </div>
  );
}

export default App;
