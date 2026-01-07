import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router'
import { Header } from "./components/Header/Header.jsx"
import { Footer } from "./components/Footer/Footer.jsx"

const HomePage = lazy(() => import("./Pages/Home.jsx"))
const SearchPage = lazy(() => import("./Pages/Search.jsx"))
const ContactPage = lazy(() => import("./Pages/Contact.jsx"))
const NotFoundPage = lazy(() => import("./Pages/NotFoundPage.jsx"))
const JobDetailPage = lazy(() => import("./Pages/JobDetail.jsx"))
const LoginPage = lazy(() => import("./Pages/Login.jsx"))
const RegisterPage= lazy(()=>import('./Pages/Register.jsx'))
const ProfilePage= lazy(()=>import('./Pages/Profile.jsx'))

function App() {
    return (
        <>
            <Header />
            <Suspense fallback={<div>Cargando...</div>}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/job/:jobId" element={<JobDetailPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/profile' element={<ProfilePage/>}/>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
            <Footer />
        </>
    )
}

export default App