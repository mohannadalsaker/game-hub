import usePlatform from "./usePlatforms";

const usePlatformSearch = (id?: number) => {
  const { data } = usePlatform();

  return data?.results.find((p) => p.id === id);
};

export default usePlatformSearch;
