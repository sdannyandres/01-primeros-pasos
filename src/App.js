import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponente } from './EventosComponente';

function App() {

  const ficha_medica = {
    altura: "180cm",
    grupo: "RH O+",
    estado: "bueno",
    alergias: "ninguna",
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvido a mi master de react!!
        </p>

        {/* cargar mi primercomponente */}

        <div className='componentes'>
          <hr/>
          <EventosComponente/>
      <hr />
          <TercerComponente
            nombre="Danny"
            apellidos="Salazar" 
            ficha={ficha_medica}
            />
          <hr />
          <SegundoComponente />
          <hr />
          <MiComponente />
        </div>
      </header>
    </div>
  );
}

export default App;
