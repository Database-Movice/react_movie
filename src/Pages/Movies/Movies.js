import React,{ useEffect, useState } from "react";

import Genres from "../../components/Genres/Genres";
import SingleContent from "../../components/SingleContent/SingleContent";
import useGenre from "../../hooks/useGenre";
import CustomPagination from "../../components/Pagination/CustomPagination";
import movieApi from "../../services/movieApi";
import typeApi from "../../services/typeAPi";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

const Movies = () => {

  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const genreforURL = useGenre(selectedGenres);
  const [pageLimit,setPageLimit] = useState(20);
  const [yearList,setYearList] = useState([{
    y_name:'2021'
  }]);
  const [currentSelectYear,setCurrentSelectYear] = useState(0);

  useEffect(()=>{
      fetchMovies();
      fetchGenres();
      fetchYear();
  },[]);
  useEffect(()=>{
    console.log(content);
  },[content]);

    useEffect(()=>{

        fetchMovies();
    },[page,selectedGenres,currentSelectYear]);


  const fetchMovies = async () => {
    const params = {
      pageLimit: pageLimit,
      currentPage: page,
      currentYear: yearList[currentSelectYear].y_name,
      typeList: [...selectedGenres].map(type=>type.t_name),
    };
    const response = await movieApi.getmovie(params);
    console.log(response);
      setContent(response['data']);
      setNumOfPages(response['total']);
  };
    const fetchGenres = async () => {
        const response = await typeApi.getAll();
        setSelectedGenres(response);
    };
    const fetchYear = async () => {
        const response = await movieApi.getAllYear();
        setYearList(response);
        console.log(response.length);
        // setCurrentSelectYear(response.length);
    };



const  handleChangeCurrentYear=(event)=>{
      setCurrentSelectYear(event);
  };

  return (
    <div>
      <span className="pageTitle">Discover Movies</span>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            年份
          </InputLabel>
          <NativeSelect
            defaultValue={2021}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
            onChange={(event) => handleChangeCurrentYear(event.target.value)}
          >
            {yearList.map((year, index) => (
              <option value={index}>{year.y_name}</option>
            ))}
          </NativeSelect>
        </FormControl>
      </Box>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
            />
          ))}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Movies;
