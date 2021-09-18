import { useState, useContext, useEffect } from "react";
import { PostContext } from "../../context/post/PostProvider";

const SearchBox = () => {
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
      <div className='input-group mb-3'>
        <span className='input-group-text' id='basic-addon3'>
          Search posts by post owner name
        </span>
        <input
          value={searchTerm}
          onChange={(e) => handleSerch(e)}
          type='text'
          className='form-control'
          id='basic-url'
          aria-describedby='basic-addon3'
        />
      </div>
    </div>
  );
};

export default SearchBox;
