import { useState, useContext, useEffect } from "react";
import { PostContext } from "../../context/post/PostProvider";

const SearchBox = () => {
  // const { posts, getPosts } = useContext(PostContext);
  const [searchTerm, setSearchTerm] = useState("");
  const { searchPostsByUserData, searchBoxCleanup } = useContext(PostContext);

  const handleSerch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const word = e.target.value;
    setSearchTerm(word);
    searchPostsByUserData(word);
  };

  useEffect(() => {
    return () => {
      searchBoxCleanup();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <input value={searchTerm} onChange={(e) => handleSerch(e)} />
      <div>Search box lagani</div>
    </div>
  );
};

export default SearchBox;
