import { Header } from "./components/Header/Header.jsx"
import { Footer } from "./components/Footer/Footer.jsx"
import { Empleos } from "./Pages/Empleos.jsx"

function App() {

    return (
        <>
            <Header />
            <main>
                <Empleos />
            </main>
            <Footer />
        </>
    )
}

export default App
