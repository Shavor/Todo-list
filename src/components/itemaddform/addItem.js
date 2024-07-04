import { useState } from "react";
import "./addItem.css";

const AddItem = ({ addItem }) => {
  const [label, setLabel] = useState("");

  const onLabelChang = (e) => {
    setLabel(e.target.value);
  };

  const onSibmit = (e) => {
    e.preventDefault();
    setLabel("");
    addItem(label);
  };

  return (
    <form className="bottom-panel d-flex" onSubmit={onSibmit}>
      <input
        className="form-control new-todo-label"
        type="text"
        placeholder="Что нужно сделать?"
        value={label}
        onChange={onLabelChang}
      />
      <button
        onClick={() => addItem(label)}
        type="submit"
        className="btn btn-add-item btn-outline-secondary"
      >
        Добавить задачу
      </button>
    </form>
  );
};

export default AddItem;
