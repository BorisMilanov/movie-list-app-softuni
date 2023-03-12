import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from 'react-bootstrap';
import styled from "styled-components";

const TvShowContainer = styled.div`
  width: 100%;
  min-height: 6em;
  display: flex;
  border-bottom: 2px solid #d8d8d852;
  padding: 6px 8px;
  align-items: center;
`;

const Thumbnail = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex: 0.4;
  img {
    width: auto;
    height: 100%;
  }
`;

const Name = styled.h3`
  font-size: 15px;
  color: #000;
  margin-left: 10px;
  flex: 2;
  display: flex;
`;

const Rating = styled.span`
  color: #a1a1a1;
  font-size: 16px;
  display: flex;
  flex: 0.2;
`;

const Button = styled.div`
  background-color:green;
  color:white;
  font: 12px;
`

import "./FavoriteMovie.css";

export function FavoriteMovie() {
  const [movies, setMovies] = useState([]);
  const onClickDelete = (id) => {

    window.location.reload(false);
    axios.delete(`http://localhost:5000/deleteMovie/${id}`).then(() => {
      setMovies(movies.filter((movie) => {
        return movie._id !== id
      }))
    })
      .then((data) => {
      })
  }
  useEffect(() => {
    axios.get('http://localhost:5000/getMovies').then((response) => {
      const data = response.data;
      setMovies(data)

    }).catch((err) => console.log(err))
  })

  const renderMovies = ((movie, index) => (
    <TvShowContainer style={{ width: '18rem' }} key={index} className="box">
   
        <Name>{movie.name}</Name>
        <Rating>Rating: {movie.rating}</Rating>
        {/* <Button  onClick={() => { onClickDelete(movie._id) }}>Delete</Button> */}
    
    </TvShowContainer>
  ))

  return (<div className="rowmovie"> {movies.map(renderMovies)}</div>

  );

}