import { useState } from "react";

const Filter = () => {
  const [filter, setFilter] = useState('all')

    const handleFilter = e => {
        console.log(e.target.Hybrid);
    }
  return (
    <div>
      <label htmlFor="mySelect">Select an i=option:</label>
    <select value={} onChange={handleFilter} name="category" className="input input-bordered" required>
            <option value="On Site">Onsite</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Part time">Part time</option>
          </select>
    </div>
  );
};

export default Filter;