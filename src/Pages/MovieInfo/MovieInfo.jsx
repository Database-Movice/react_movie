

import React, {useEffect, useState} from 'react';
import  CastList from '../../components/Castitem/Castitem';
import TrailerList from "../../components/TrailerList";
// import { Grid, Row, Col} from 'react-bootstrap/lib';
import {Grid} from  '@material-ui/core';
import MovieComponent from "../../components/MovieComponent";
import Poster from "../../components/Poster";
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
// import { fetchMovieDetail, fetchCastList, fetchTrailerList} from '../actions';
import movieApi from "../../services/movieApi";
import SingleContent from "../../components/SingleContent/SingleContent";
import Typography from "@mui/material/Typography";
const  MovieDetail = () => {
    // const {movie, casts, trailers, isFetcing_movie, isFetcing_casts, isFetcing_trailers} = props;
    const [movie,setMovie] = useState(null);
    const [loading,setLoading] = useState(true);
    const urlparams = useParams();
    const movieId = parseInt(JSON.parse(JSON.stringify(urlparams.id)));
    const [castList,setCastList] = useState([]);
    const [randomContent,setRandomContent] = useState([]);
    console.log(urlparams);
    useEffect(()=>{
        const getMovieBaseOnID =  async ()=>{
            const response = await movieApi.getMovieOnID({mid: movieId,});
            setMovie(response[0]);
        };
        const getRandomContent = async () => {
                  const response = await movieApi.getRandomMovie();
                  setRandomContent(response);
                };
        getMovieBaseOnID();
        getRandomContent();
        setLoading(true);
           return () => {
                setMovie({}); // This worked for me
           };
    },[]);

    useEffect(() => {
      setLoading(false);
      
    }, [movie]);

    useEffect(() => {
        console.log(loading);
    }, [loading]);

    return (
      <React.Fragment>
        {!movie ? (
          <p>loading...</p>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              <Poster
                id={movie.id}
                path={movie.poster}
                title={movie.title}
                info={movie.m_intro}
                actorList={movie.a_name}
                country={movie.c_name}
                director={movie.d_name}
                rating={movie.r_name}
                genres={movie.t_name}
                year={movie.y_name}
              />
            </Grid>
            <Typography variant="h5" component="div" gutterBottom>
              猜你喜歡
            </Typography>
            {randomContent &&
              randomContent.map((c) => (
                <SingleContent
                  key={c.id}
                  id={c.id}
                  poster={c.poster}
                  title={c.title || c.name}
                  date={c.first_air_date || c.release_date}
                  media_type={c.media_type}
                  vote_average={c.vote_average}
                />
              ))}
          </Grid>
        )}
      </React.Fragment>
    );
};


export default MovieDetail;
