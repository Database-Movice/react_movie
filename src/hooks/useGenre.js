const useGenre = (selectedGenres) => {
  if (selectedGenres.length < 1) return "";

  const GenreNames = selectedGenres.map((g) => g.t_name);
  return GenreNames.reduce((acc, curr) => acc + "," + curr);
};

export default useGenre;
