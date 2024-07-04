import "./search-panel.css";
import ProtoTypes from "prop-types";

SearchPanel.protoTypes = {
  term: ProtoTypes.string,
  onChangeSearch: ProtoTypes.func,
};

function SearchPanel({ term, onSearchChange }) {
  const onGetInputValue = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <input
      className="search-input"
      placeholder="поиск по названию"
      type="text"
      value={term}
      onChange={onGetInputValue}
    />
  );
}

export default SearchPanel;
