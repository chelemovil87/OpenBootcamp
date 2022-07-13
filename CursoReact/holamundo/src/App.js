import logo from "./logo.svg";
import "./App.css";
// import GreetingF from './components/pure/greetingF';
// import TaskListComponent from './components/container/task_list';
import ComponenteA from "./components/componenteA";

function App() {
  const contactoPrueba = {
    nombre: "Jose Eduardo",
    apellido: "Rodriguez Fernandez",
    email: "jose_rodriguez@open-bootcamp.com",
    conectado: false,
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteA contacto={contactoPrueba} />
        {/* Componente propio Greeting.jsx */}
        {/* <Greeting name="Jose Eduardo"></Greeting> */}
        {/* Componente de ejemplo funcional */}
        {/* <GreetingF name="Jose Eduardo"></GreetingF> */}
        {/* Componente de llstado de tareas */}
        {/* // <TaskListComponent></TaskListComponent> */}
      </header>
    </div>
  );
}

export default App;