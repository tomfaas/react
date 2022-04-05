import "./Filter.scss";

const Filter = ({ filterName, selectedFilters, setSelectedFilters }) => {
  const isSelected = selectedFilters === filterName;

  const onClickHandler = () => {
    setSelectedFilters(filterName);
  };

  return (
    <div className="filter" onClick={onClickHandler}>
      <input
        type="checkbox"
        name="filter"
        checked={isSelected}
        onChange={() => {}}
      />
      <label htmlFor="filter">{filterName}</label>
    </div>
  );
};

export default Filter;
