import React from 'react'
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const MovieDetail = (props) => {
    const params = useParams()
    console.log(params.id);
    // get movie detail
    const getMovieDetail = async () => {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=47df55a9e754dc7a844633e955d5a7eb&language=ar')
        setMovies(response.data.results)
        // console.log(response.data.results)
        setPageCount(response.data.total_pages)
        console.log(response.data);
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h2>اسم الفيلم :</h2>
                        <p>تاريخ العرض:</p>
                        <p>عدد المشاهدات : </p>
                        <p>التقيم: </p>
                        <Link to="/">
                            <Button variant="primary" className="mx-3 ">
                                عودة للرئيسية
                            </Button>
                        </Link>
                        <Button variant="danger">مشاهدة الفيلم</Button>
                        <p>Story: </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default MovieDetail
