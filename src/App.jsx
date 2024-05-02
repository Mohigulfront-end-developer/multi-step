import Register from "./components/Register";

const App = () => {
  return (
    <div className="h-[100vh] w-full">
      <div className="flex justify-center h-full items-center  ">
        <div className="h-[600px] border p-4 rounded-2xl bg-white">
          <Register />
        </div>
      </div>
    </div>
  );
};

export default App;
