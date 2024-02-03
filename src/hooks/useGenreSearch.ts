import useGenres from "./useGenres";

const useGenreSearch = (id?: number) => {
  const { data } = useGenres();

  return data?.results.find((g) => g.id === id);
};

export default useGenreSearch;
