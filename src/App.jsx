// Impórtalos en App.jsx: uno con llaves y otro sin ellas. Añade entre ambos un comentario JSX que
// diga dónde irá el marcador.

// Si quitas las llaves del import:
// Uncaught SyntaxError: The requested module '/src/components/Cabecera/Cabecera.jsx' does not provide
// an export named 'default' (at App.jsx:4:8)
import { Cabecera } from "./components/Cabecera/Cabecera";
import Pie from "./components/Pie/Pie";
import { Marcador } from "./components/Marcador/Marcador";
import "./App.css";

function App() {
  return (
    <main className="app">
      <Cabecera />
      <Marcador />
      <Pie />
    </main>
  );
}

export default App;
