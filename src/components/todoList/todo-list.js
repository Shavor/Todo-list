import TodoListItem from "../todoListItem/todo-list-item";
import PropTypes from "prop-types";
import "./todo-list.css";

TodoList.propTypes = {
  todos: PropTypes.array,
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  onToggleImpotant: PropTypes.func,
};

function TodoList({ todos, onDeleted, onToggleDone, onToggleImpotant }) {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li className="list-group-item" key={id}>
        <TodoListItem
          todos={item}
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImpotant={() => onToggleImpotant(id)}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
}

export default TodoList;
