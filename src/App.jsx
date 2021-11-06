import Button from "./components/Button";
import "./App.css";

function App() {
  const handleClick = () => {
    console.log("Hello");
  };

  return (
    <div className="App">
      <Button onClick={handleClick} color="button--primary">
        Primary
      </Button>
      <Button onClick={handleClick} color="button--success">
        Success
      </Button>
      <Button onClick={handleClick} color="button--danger">
        Danger
      </Button>
      <Button onClick={handleClick} color="button--warning">
        Warning
      </Button>
      <Button onClick={handleClick} color="button--indigo">
        Indigo
      </Button>
      <Button onClick={handleClick} color="button--dark">
        Dark
      </Button>
    </div>
  );
}

export default App;

// 'primary' | 'success' | 'danger' | 'warning' | 'indigo' | 'dark'
