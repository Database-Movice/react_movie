import axios from "axios";
import "./Trending.css";
import React, { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import movieApi from "../../services/movieApi";
import ItemsCarousel from "react-items-carousel";
import {Box, Grid, Paper} from "@material-ui/core";
import typeApi from "../../services/typeAPi";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';




const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });


const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [active,setActive] = useState(false);
  const [type,setType] = useState([]);
  const [countryList,setCountryList] = useState([]);
  const fetchTrending = async () => {
    const respone = await  movieApi.getAll();
    setContent(respone);
  };
  const fetchTyping = async () => {
        const respone = await  typeApi.getAll();
        setType(respone);
    };
    const fetchcountry = async () => {
        const respone = await  typeApi.getAll();
        setType(respone);
    };

    useEffect(()=>{
      fetchTrending();
      fetchTyping();
      fetchcountry();
  },[]);
  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
        <span className="pageTitle">Trending Today</span>
        <ItemsCarousel
            infiniteLoop={false}
            gutter={12}
            activePosition={"center"}
            chevronWidth={60}
            disableSwipe={false}
            alwaysShowChevrons={false}
            numberOfCards={5}
            slidesToScroll={2}
            outsideChevron={true}
            showSlither={false}
            firstAndLastGutter={false}
            activeItemIndex={active}
            requestToChangeActive={value => setActive(value)}
            rightChevron={">"}
            leftChevron={"<"}
        >
            {content &&
            content.map((c) => (
                <SingleContent
                    key={c.id}
                    id={c.mid}
                    poster={c.poster}
                    title={c.title || c.name}
                    date={c.first_air_date || c.release_date}
                    media_type={c.media_type}
                    vote_average={c.vote_average}
                />
            ))}
        </ItemsCarousel>
        <ThemeProvider theme={darkTheme}>

                <span className="pageTitle">今日熱門推薦</span>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {content &&
                    content.map((c,index) => (
                        <Grid item xs={2} sm={3} md={3} key={index}>
                            <SingleContent
                                key={c.id}
                                id={c.mid}
                                poster={c.poster}
                                title={c.title || c.name}
                                date={c.first_air_date || c.release_date}
                                media_type={c.media_type}
                                vote_average={c.vote_average}
                            />
                        </Grid>
                    ))}
                </Grid>
        </ThemeProvider>

        <span className="pageTitle">Trending Today</span>
        <div className="trending">
            {content &&
            content.map((c) => (
                <SingleContent
                    key={c.id}
                    id={c.mid}
                    poster={c.poster}
                    title={c.title || c.name}
                    date={c.first_air_date || c.release_date}
                    media_type={c.media_type}
                    vote_average={c.vote_average}
                />
            ))}
        </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
