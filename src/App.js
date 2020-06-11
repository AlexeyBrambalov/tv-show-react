import React, {useState, useEffect} from 'react';
import NavBar from './components/NavBar'
import Main from './components/Main'
import Show from './components/Show'
import './App.css';

function App() {

  const [tvshows, setTvshows] = useState([])
  const [id, setId] = useState("")
  const [search, setSearch] = useState("")

  useEffect(() => {
      fetch(`http://api.tvmaze.com/shows`)
        .then(res => res.json())
        .then(data => {
          setTvshows(Array.from(data));       
        });
    }, []);


    

  return (
    <div className="App">
      <NavBar search={search} setSearch={setSearch} setId={setId} tvshows={tvshows} />
      {!id ? <Main tvshows={tvshows} setId={setId} search={search}/> : <Show id={id} search={search}/>}

    </div>
  );
}

export default App;
