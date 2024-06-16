import RegisterCanvas from "./components/RegisterCanvas.jsx";

function App() {


  return (
    <>
      <div className="container py-4 px-3 mx-auto">
        <h1>Práctico del modulo 1 - pantalla de login </h1>
        <button className="btn btn-primary me-2" data-bs-toggle="offcanvas" data-bs-target="#registerExample">Registrarse</button>
      </div>
      <RegisterCanvas></RegisterCanvas>
    </>
  )
}

export default App
