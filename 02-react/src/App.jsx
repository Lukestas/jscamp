import { Header } from "./components/Header/Header.jsx"
import { Footer } from "./components/Footer/Footer.jsx"
import { SearchPage } from "./Pages/Search.jsx"
import { HomePage } from "./Pages/Home.jsx"
import NotFoundPage from "./Pages/404.jsx"

function App() {
    const currentPath=window.location.pathname
    let page=<NotFoundPage/>
    if(currentPath=="/"){
        page=<HomePage/>
    }else if(currentPath=="/search"){
        page=<SearchPage/>
    }
    return (
        <>
            <Header />
            {page}
            <Footer />
        </>
    )
}

export default App
