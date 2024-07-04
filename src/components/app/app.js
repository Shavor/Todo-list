import { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "../todoList/todo-list";
import AppHeader from "../appHeader/app-header";
import SearchPanel from "../searchPanel/search-panel";
import ItemStatusFilter from "../itemStatusFilter/item-status-filter";

import AddItem from "../itemaddform/addItem";

import "./app.css";

App.propTypes = {
  todoData: PropTypes.array,
};
function App() {
  let [todoData, setTodoData] = useState([
    { id: 1, label: "Выпить кофе", important: false, done: false },
    { id: 2, label: "Заняться спортом", important: false, done: false },
    { id: 3, label: "Погулять", important: false, done: false },
  ]);

  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("Active"); //All, Active, Done

  const countDone = todoData.filter((item) => item.done).length;
  const todoCount = todoData.length - countDone;
  // let maxId = 40
  const randomId = () => {
    return Math.random() + ":" + Date.now();
  };

  const deletItem = (id) => {
    let indexTodoData = todoData.findIndex((el) => el.id === id);
    const newTodoData = [
      ...todoData.slice(0, indexTodoData),
      ...todoData.slice(indexTodoData + 1),
    ];
    setTodoData(newTodoData);
  };

  const onAddItem = (label) => {
    const newItem = createItem(label);
    setTodoData([...todoData, newItem]);
  };

  const createItem = (label) => {
    return {
      label,
      important: false,
      done: false,
      id: randomId(),
    };
  };

  const onToggleImpotant = (id) => {
    const idx = todoData.findIndex((item) => item.id === id);
    const oldItem = todoData[idx];
    const value = !oldItem["important"];

    const item = { ...todoData[idx], important: value };
    return setTodoData([
      ...todoData.slice(0, idx),
      item,
      ...todoData.slice(idx + 1),
    ]);
  };

  const onToggleDone = (id) => {
    const idx = todoData.findIndex((item) => item.id === id);
    const oldItem = todoData[idx];
    const value = !oldItem["done"];

    const item = { ...todoData[idx], done: value };
    return setTodoData([
      ...todoData.slice(0, idx),
      item,
      ...todoData.slice(idx + 1),
    ]);
  };

  const search = (arr, term) => {
    return arr.length === 0
      ? arr
      : arr.filter(
          (item) => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
        );
  };

  const filterItem = (arr, filter) => {
    switch (filter) {
      case "All":
        return arr;
      case "Active":
        return arr.filter((item) => !item.done);
      case "Done":
        return arr.filter((item) => item.done);
      default:
        return arr;
    }
  };

  const onSearchChange = (term) => {
    setTerm(term);
  };

  const onChangeFilter = (name) => {
    setFilter(name);
  };

  return (
    <div>
      <div className="todo-app">
        <AppHeader done={countDone} todoCount={todoCount} />

        <div className="top-panel d-flex justify-content-between">
          <SearchPanel term={term} onSearchChange={onSearchChange} />
          <ItemStatusFilter filter={filter} onChangeFilter={onChangeFilter} />
        </div>
        <TodoList
          onToggleImpotant={onToggleImpotant}
          onToggleDone={onToggleDone}
          onDeleted={deletItem}
          todos={filterItem(search(todoData, term), filter)}
        />
        <AddItem addItem={onAddItem} />
      </div>
    </div>
  );
}

export default App;
