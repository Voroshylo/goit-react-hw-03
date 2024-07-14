import css from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilter }) => {
  return (
    <div>
      <span className={css.wrapper}>
        <p>Find contacts by name</p>
        <input
          type="text"
          value={filter}
          onChange={(e) => onFilter(e.target.value)}
          className={css.searchInput}
        ></input>
      </span>
    </div>
  );
};

export default SearchBox;