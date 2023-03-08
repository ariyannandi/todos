import AddTodo from "./components/AddTodo";

function App() {
  return (
    <>
      <div className="mx-auto flex justify-center">
        <h1 className="text-3xl font-bold my-4 text-gray-500">Todos</h1>
      </div>
      <AddTodo />
    </>
  );
}

export default App;
