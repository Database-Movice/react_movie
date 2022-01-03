import { Chip } from "@material-ui/core";
import axios from "axios";
import React,{ useEffect } from "react";
import typeApi from "../../services/typeAPi";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.t_name !== genre.t_name));
    setPage(1);
  };

  const handleRemove = (genre) => {
    console.log(genre.t_name);
    setSelectedGenres(
      [...selectedGenres].filter((selected) =>
        selected.t_name.localeCompare(genre.t_name)!==0
      )
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    setSelectedGenres(selectedGenres);
    setGenres(genres);
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({}); // unmounting
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.t_name}
          key={genre.id}
          color="primary"
          clickable
          size="small"
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.t_name}
          key={genre.id}
          clickable
          size="small"
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
};

export default Genres;
