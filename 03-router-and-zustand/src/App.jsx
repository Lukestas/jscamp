import { Routes, Route } from 'react-router'
import { Header } from "./components/Header/Header.jsx"
import { Footer } from "./components/Footer/Footer.jsx"
import { SearchPage } from "./Pages/Search.jsx"
import { HomePage } from "./Pages/Home.jsx"
import { ContactPage } from "./Pages/Contact.jsx"
import { NotFoundPage } from "./Pages/NotFoundPage.jsx"
import { JobDetail } from './components/JobDetail/JobDetail.jsx'

function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/job/:jobId" element={<JobDetail />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
