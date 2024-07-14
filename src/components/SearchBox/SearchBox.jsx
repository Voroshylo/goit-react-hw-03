import css from './SearchBox.module.css'

const SearchForm = () => {
  return (
    <div className={css.div}>
      <label className={css.label}>
        <span>Find contacts by name</span>
      </label>
      <input 
        className={css.input}
        name='search'
      >
      </input>
    </div>
  )
}
export default SearchForm