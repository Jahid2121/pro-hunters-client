
const Filter = ({filter, setFilter}) => {
    const handleFilter = e => {
        const selectedValue = e.target.value;
        setFilter(selectedValue.toLowerCase())
    }
  return (
    <div>
      <label htmlFor="searchInput">Search: </label>
    <input 
    className="input input-bordered"
    type="text" 
    value={filter}
    required
    name="search"
    placeholder="Enter your search criteria"
    onChange={handleFilter}
    />
    </div>
  );
};

export default Filter;