import React from 'react';
import '../Css/Card.css';
import { Link } from "react-router-dom"

const MyCard = ({ mov }) => {
    return (
        <div className="card-container mt-5">
            <Link to={`/movie/${mov.id}`}>
                <div className="card">
                    <img src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`} alt="Card 1" />
                    <div className="card-overlay">
                        <p className='mb-2 mt-2'>اسم الفيلم: {mov.original_title}</p>
                        <p className='mb-2'>تاريخ الاصدار : {mov.release_date}</p>
                        <p className='mb-2'>التقييم : {mov.vote_average}</p>
                        <p className='mb-2'>عدد المقيمين : {mov.vote_count}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MyCard;