import GlobalStyle from "./Styles/global";
import RoutesApp from "./Routes/Index";
import Home from "./Pages/Home/Index";
import { AuthProvider } from "./contexts/auth";

function App() {
  return (
    <div className="App">
      {/* Toda nossa aplicação vai ter acesso aos valores com o AutoProvider  da propriedade VALUE*/}
      <AuthProvider>
        <RoutesApp />
        <GlobalStyle />
      </AuthProvider>
    </div>
  );
}

export default App;
