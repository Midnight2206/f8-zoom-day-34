const root = document.querySelector("#root");
const reactDomRoot = ReactDOM.createRoot(root);

function Todo() {
  const [value, setValue] = React.useState("");
  const [tasks, setTasks] = React.useState([]);
  return (
    <>
      <div className="entry-bar">
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
        
          className="btn"
          onClick={() =>{
            setTasks((prev) => [
              ...prev,
              { name: value, id: Date.now(), complete: false },
            ])
            setValue("")
          }
          }
        >
          Add
        </button>
      </div>
      {tasks.length === 0 ? (
        <span>Chưa có công việc nào, hãy thêm công việc đầu tiên!</span>
      ) : (
        <ul className="tasks-list">
          {tasks.map((task) => (
            <li data-complete={task.complete} className="task-item" key={task.id}>
              <span>{task.name}</span>
              <div className="task-control">
                <button
                  className="del-btn"
                  onClick={() =>
                    setTasks((prev) => prev.filter((t) => t.id !== task.id))
                  }
                >
                  Del
                </button>
                <button
                  className="check-btn"
                  data-complete={task.complete}
                  onClick={() =>
                    setTasks((prev) =>
                      prev.map((t) =>
                        t.id === task.id ? { ...t, complete: !t.complete } : t
                      )
                    )
                  }
                >
                  {task.complete ? <span>✔</span> : <span>✖</span>}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="footer">
        <span>
          Tổng: {tasks.length} công việc, Hoàn thành:{" "}
          {tasks.filter((task) => task.complete).length} công việc, Chưa hoàn
          thành: {tasks.filter((task) => !task.complete).length} công việc
        </span>
      </div>
    </>
  );
}
reactDomRoot.render(<Todo />);
