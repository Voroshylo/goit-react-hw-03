import css from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilter }) => {
  return (
    <div className={css.div}>
      <span className={css.span}>
        <p>Find contacts by name</p>
        <input
          type="text"
          value={filter}
          onChange={(e) => onFilter(e.target.value)}
          className={css.input}
        ></input>
      </span>
    </div>
  );
};

export default SearchBox;