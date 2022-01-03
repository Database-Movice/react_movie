import React,{useEffect,useState} from 'react';
import { Image } from 'react-bootstrap'
import styled from 'styled-components'
import { Grid } from "@mui/material";
import Castitem from "../components/Castitem/Castitem";

export default function Poster(props){
    const {id} = props;
    const {title} = props;
    const {path} = props;
    const {info} = props;
    const {actorList} = props;
    const {country}=props;
    const {director}=props;
    const {rating}=props;
    const {genres}= props;
    const {year}=props;
    const [castList,setCastList] = useState([]);

    console.log(director);
    useEffect(() => {
      setCastList(
        actorList.split(" ").filter((actor) => actor !== "" && actor !== "'")
      );
    }, []);

    return (
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Image className="image" key={id} src={path} />
        </Grid>
        <Grid item xs={6}>
          <h1>{title}</h1>
          <h4>分類：{genres}</h4>
          <h4>劇地：{country}</h4>
          <h4>年份：{year}</h4>
          <h4>主演：</h4>
          {castList.map((actor) => (
            <Castitem castName={actor} />
          ))}
          <h4>導演：</h4>
          <Castitem castName={director} />
          <h4>評分：{rating}</h4>
          <h4>簡介：{info}</h4>
        </Grid>
      </Grid>
    );
}
