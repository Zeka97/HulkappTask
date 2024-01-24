import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col max-w-[1500px]">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
