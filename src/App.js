import React, { useState } from "react";

// import AddTodo from "./components/AddTodo";
// import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = e.target.item.value;
    setTodos([...todos, { name: newTodo, completed: false }]);
    console.log(todos);
    e.target.reset();
  };

  const toggleTodos = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodos = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="mx-auto flex justify-center">
        <h1 className="text-3xl font-bold my-4 text-gray-500 ring-offset-2 ring-2 ring-purple-900 rounded p-4">
          Todos - The Best todo list app
        </h1>
      </div>
      <div className="w-screen">
        <form onSubmit={addTodo} className="flex justify-center ">
          <label className=" relative block m-4 p-4">
            <input
              type="text"
              name="item"
              placeholder="Add task"
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-96"
              autoComplete="off"
              required
            />
            <button
              type="submit"
              className="absolute flex top-3 right-4 bg-white-100 hover:bg-green-500 rounded px-3 py-2 my-1 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </label>
        </form>
      </div>
      <div>
        {todos.length > 0 && (
          <ul className="my-3 bg-purple-900 rounded p-4 mx-auto container divide-y  ">
            {todos.map((todo, index) => (
              <li
                key={index}
                className={`flex items-center justify-between  py-2 ${
                  todo.completed ? "line-through text-red-500 " : ""
                }`}
              >
                <span
                  onClick={() => toggleTodos(index)}
                  className={`font-bold uppercase ${
                    todo.completed ? "text-purple-400" : "text-white"
                  }`}
                >
                  {todo.name}{" "}
                </span>
                <button
                  className="text-blue-400 hover:text-blue-600"
                  onClick={deleteTodos}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
