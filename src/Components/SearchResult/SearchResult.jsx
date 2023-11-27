import Card from "../Card/Card";

const SearchResult = ({ searchResult }) => {
  if (!Array.isArray(searchResult)) {
    return null;
  }
  const cards = searchResult.map((movie) => {
    return <Card movie={movie} key={movie.id} />;
  });
  console.log(searchResult);
  return <ul className="cards">{cards}</ul>;
};

export default SearchResult;
