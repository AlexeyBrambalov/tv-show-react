import React, {useState, useEffect} from 'react'

export default function Show({id, search}) {

    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
          .then(res => res.json())
          .then(data => {
             setEpisodes(Array.from(data));
          });
      }, [id]);


      function titleCodeGenerator(episode){
        let seasonCode = (episode.season < 10) ? '0' + episode.season : episode.season;
        let episodeCode = (episode.number < 10) ? '0' + episode.number : episode.number;
        return `S${seasonCode}E${episodeCode}`;
      }


      const rendering = (episode, index) => 
        <div className="cardEp" key={index}>
            <div className="cardTitleEp">
                {episode.name} - {titleCodeGenerator(episode)}
            </div>
            <img src={episode.image !== null ? episode.image.medium : "https://www.facultatieve-technologies.com/wp-content/uploads/No-image-200px.png"} alt={episode.name} className="cardImgEp"/>
            <div className="cardSummaryEp">
                {episode.summary ? episode.summary.replace(/<\/?[^>]+(>|$)/g, "") : "No Summary" }
            </div>
            <div className="runtime">
            runtime: {episode.runtime} min
            </div>
        </div>

        const searchFunc = (episode) => {
            return episode.name.toLowerCase().includes(search) ||  episode.summary.toLowerCase().includes(search)
        }



    return (
        <div id="root">
            {search ? episodes.filter(searchFunc).map(rendering) : episodes.map(rendering)}
        </div>
    )
}
