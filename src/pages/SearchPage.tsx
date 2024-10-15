import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();
  return <div>your have search the city: {city}</div>;
};

export default SearchPage;
