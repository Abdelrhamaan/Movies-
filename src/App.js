import { Container } from "react-bootstrap";
import MyNavbar from "./Components/MyNavbar";
import MovieList from "./Components/MovieList";
import axios from 'axios'
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MovieDetail from "./Components/MovieDetail";


function App() {
  const [movies, setMovies] = useState([])
  const [pageCount, setPageCount] = useState(0)
  // get all movies 
  const getMoviesData = async () => {
    const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=47df55a9e754dc7a844633e955d5a7eb&language=ar')
    setMovies(response.data.results)
    // console.log(response.data.results)
    setPageCount(response.data.total_pages)
    console.log(response.data);
  }

  // get current  movies  in page
  const getCurrentPage = async (getMov) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=47df55a9e754dc7a844633e955d5a7eb&language=ar&page=${getMov}`)
    setMovies(response.data.results)
    // console.log(response.data.results)
  }


  // make search func by url and check if the search input is clear return films if not return the serch

  const searchMovie = async (word) => {
    if (word === "") {
      getMoviesData();
    } else {

      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=47df55a9e754dc7a844633e955d5a7eb&query=${word}&language=ar`)
      setPageCount(response.data.total_pages)
      setMovies(response.data.results)
    }
  }

  useEffect(() => {
    getMoviesData();
    // console.log(movies)
  }, [])

  // useEffect(() => {
  //   getCurrentPage();
  //   // console.log(movies)
  // }, [])
  return (
    <>
      {/* sending func to nav bar */}
      <MyNavbar searchMovie={searchMovie} />
      <Container>
        {/* rouring around movie list and movie detail components */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MovieList movies={movies} getCurrentPage={getCurrentPage} pageCount={pageCount} />} />
            <Route path="/movie/:id" element={<MovieDetail />} />

          </Routes>
          {/* pass movies to Movie List as a prop */}
        </BrowserRouter>
      </Container>
    </>

  );
}

export default App;
