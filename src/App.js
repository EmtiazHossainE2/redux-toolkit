import Counter from "./components/counter/Counter";
import Countries from "./components/Country/Countries";

function App() {
  return (
    <div className="my-20">
      <h1 className="text-3xl text-center font-bold">Hello Redux Toolkit</h1>
      <Counter/>
      <Countries/>
    </div>
  );
}

export default App;
