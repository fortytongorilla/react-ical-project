import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import "./styles.css";

//components
import { MainForm } from "./components/MainForm";

function App() {
  return (
    <div className="App">
      <h1>App.js</h1>

      <MainForm />
    </div>
  );
}

export default App;
