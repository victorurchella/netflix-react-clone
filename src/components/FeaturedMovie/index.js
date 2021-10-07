import React from 'react';
import './index.css'

const FeaturedMovie = ({item}) => {

    // Formatar data que puxa da API.
    const firstDate = new Date(item.first_air_date);

    // Selecionar todos os generos e buscar o nome.
    let genres = [];
    for(let i in item.genres) {
        genres.push( item.genres[i].name );
    };

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured-vertical">
                <div className="featured-name">{item.original_name}</div>
                <div className="featured-info">
                    <div className="featured-relevance">{item.vote_average * 10}% relevante</div>
                    <div className="featured-year">{firstDate.getFullYear()}</div>
                    <div className="featured-seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                </div>
                <div className="featured-description">{item.overview}</div>

                <div className="featured-buttons">
                    <a href={`/watch/${item.id}`} className="featured-watchButton">► Assistir</a>
                    <a href={`/list/add/${item.id}`} className="featured-addlistButton">+ Minha Lista</a>
                </div>

                <div className="featured-genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>

            </div>
        </section>
    )
}

export default FeaturedMovie