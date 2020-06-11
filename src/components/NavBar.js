import React from 'react'

export default function NavBar({search, setSearch, setId, tvshows}) {

  function SortByName(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
  }

  let newArr = [...tvshows]
  let sortedArr = [{id: "allepisodes", name: "All episodes"}, ...newArr.sort(SortByName)]


    return (
    <nav id="navbar">
      <h1 id="home" onClick={()=>setId("")}><i className="fas fa-film"></i> Home</h1>
      
      <select id="select" onChange={(e) => setId(e.target.value)}>
        {sortedArr.map((show, index) => <option value={show.id} key={index}>{show.name}</option>)}
      </select>

      <input onChange={(e) => setSearch(e.target.value.toLowerCase())} value={search}></input>
    </nav>
    )
}
