import { Header } from "./components/Header/Header.jsx"
import { Footer } from "./components/Footer/Footer.jsx"
import { SearchPage } from "./Pages/Search.jsx"
import { HomePage } from "./Pages/Home.jsx"
import { Route } from "./components/Route/Route.jsx"
import { ContactPage } from "./Pages/Contact.jsx"


function App() {

    return (
        <>
            <Header />
            <Route path="/" component={HomePage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/contact" component={ContactPage} />
            <Footer />
        </>
    )
}

export default App
