import React from 'react'

export default function Main({tvshows, setId, search}) {

    const searchFunc = (episode) => {
        return episode.name.toLowerCase().includes(search) ||  episode.summary.toLowerCase().includes(search)
    }


    const rendering = (show, index) =>  
    <div className="card" key={index}>
        <div className="cardTitle" onClick={() => setId(show.id)}>
            {show.name}
        </div>
        <div className="mainDiv">
            <img src={show.image !== null ? show.image.medium : "https://www.facultatieve-technologies.com/wp-content/uploads/No-image-200px.png"} alt={show.name}/>
            <div className="cardSummary">
            {show.summary.replace(/<\/?[^>]+(>|$)/g, "")}
            </div>
        </div>
        <div className="genres">
            {"Genres: " + show.genres.join(', ')}
        </div>
        <div className="status">
            {"Status: " + show.status}
        </div>
        <div className="rating">
            {"rating: " + show.rating.average}
        </div>
        <div className="runtime">
            {"runtime: " + show.runtime}
        </div>
    </div>


    return (
        <div id="root">
            {search ? tvshows.filter(searchFunc).map(rendering) : tvshows.map(rendering)}
        </div>
    )
}
