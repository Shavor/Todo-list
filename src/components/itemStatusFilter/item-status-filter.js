import "./item-status-filter.css";

const ItemStatusFilter = ({ filter, onChangeFilter }) => {
  const buttons = [
    { name: "All", lable: "Все" },
    { name: "Active", lable: "Активные" },
    { name: "Done", lable: "Выполнено" },
  ];
  return (
    <div className="btn-group">
      {buttons.map((item) => {
        const isActive = item.name === filter;
        const clazz = isActive ? "btn-info" : "btn-outline-secondary";
        return (
          <button
            onClick={() => onChangeFilter(item.name)}
            key={item.name}
            type="button"
            className={`btn ${clazz}`}
          >
            {item.lable}
          </button>
        );
      })}
    </div>
  );
};

export default ItemStatusFilter;
