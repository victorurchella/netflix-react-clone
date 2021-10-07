import React, { useEffect, useState } from 'react';
import './App.css'
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow'
import FeaturedMovie from './components/FeaturedMovie'
import Header from './components/Header'

const App = () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(()=> {
    const loadAll = async () => {
      // Buscar toda a Lista na API.
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Buscar apenas a Lista de "Originais da netflix" e selecionar um aleatorio.
      let originals = list.filter(i=>i.slug === 'originals');
      const randomChooseFeaturedMovie = () => {
        let randomChoose = Math.floor(Math.random() * (originals[0].items.results.length - 1));
        return randomChoose
      }
      let chosen = originals[0].items.results[randomChooseFeaturedMovie()]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo)

    }

    loadAll()
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 400) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, []);

  return (
    <div className='page'>

      <Header state={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData}/>
      }

      <section className='lists'>
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>

      <footer>
        Feito com <span role="img" aria-label="heart">❤</span> por Victor Urchella <br/>
        Diretos de imagem para Netflix <br/>
        Dados pegos do site Themoviedb.org
      </footer>

      { movieList.length <= 0 &&
        <div className="loading">
          <img src="https://c.tenor.com/zQ6H2k7HwGcAAAAC/netflix-netflix-logo.gif" alt="loading"/>
        </div>
      }
    </div>
  )
}

export default App;