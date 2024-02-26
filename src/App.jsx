import logo from './logo.svg';
import './App.css';
import Encabezado from './componentes/Encabezado';
import Buscador from './componentes/Buscador';
import RecipeCards from './componentes/RecipeCards';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Encabezado
        />
        <Buscador />
        <RecipeCards />
      </header>
    </div>
  );
}

export default App;
