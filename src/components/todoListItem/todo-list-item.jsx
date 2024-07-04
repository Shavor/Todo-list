import "./todo-list-item.css";

const TodoListItem = ({ todos, onDeleted, onToggleDone, onToggleImpotant }) => {
  const { label, important, done } = todos;
  let className = "todo-list-item d-flex justify-content-between";
  if (done) {
    className += " done";
  }
  if (important) {
    className += " important";
  }

  return (
    <span className={className}>
      <span onClick={onToggleDone} className="todo-list-item-label">
        {label}
      </span>
      <span className="todo-list-item">
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImpotant}
        >
          <i className="fa fa-exclamation"></i>
        </button>
        <button
          onClick={onDeleted}
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-tag"></i>
        </button>
      </span>
    </span>
  );
};

export default TodoListItem;
