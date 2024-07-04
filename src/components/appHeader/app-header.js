import "./app-header.css";

const AppHeader = ({ todoCount, done }) => {
  // let arrLength = todos.length;

  return (
    <div className="app-header d-flex">
      <h1>Список дел</h1>
      <h2>
        {" "}
        выполнить: {todoCount} <br />
        выполнено: {done}
      </h2>
    </div>
  );
};

export default AppHeader;
