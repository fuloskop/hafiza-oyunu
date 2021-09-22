import "./App.css";
import { MyProvider } from "./MyContext";
import Body from "./Body";

function App() {


  return (
    <MyProvider>
      <div className="App">
      <Body />
      </div>
    </MyProvider>
  );
}

export default App;
