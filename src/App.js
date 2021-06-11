import "./index.css";
import Container from "./Conteiner.js";
import { AppProvider } from "./AppContext.jsx";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Container />
      </AppProvider>
    </div>
  );
}

export default App;
