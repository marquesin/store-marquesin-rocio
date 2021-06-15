import "./index.css";
import Container from "./Conteiner/Conteiner.js";
import { AppProvider } from "./Context/AppContext.jsx";

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
