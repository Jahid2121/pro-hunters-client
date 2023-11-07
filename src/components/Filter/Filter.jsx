
const Filter = ({filter, setFilter}) => {
    const handleFilter = e => {
        const selectedValue = e.target.value;
        setFilter(selectedValue)
    }
  return (
    <div>
      <label htmlFor="mySelect">Select an option: </label>
    <select value={filter} onChange={handleFilter} name="category" className="input input-bordered" required>
            <option value="all">All</option>
            <option value="On Site">Onsite</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Part time">Part time</option>
          </select>
    </div>
  );
};

export default Filter;