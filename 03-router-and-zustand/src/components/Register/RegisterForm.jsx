import { useId } from "react"
import { useNavigate } from "react-router"
import { useAuthStore } from "../../store/authStore"

export default function RegisterForm() {
    const usernameId = useId()
    const emailId = useId()
    const passwordId = useId()
    const navigate=useNavigate()

    const {login}=useAuthStore()

    const handleLogin=(event)=>{
        event.preventDefault()

        const formData=new FormData(event.target)
        const username=formData.get(usernameId)
        const email=formData.get(emailId)
        const password=formData.get(passwordId)

        if(username && email && password){
            login()
            navigate("/search")
        }

    }

    return (
        <form onSubmit={handleLogin}>
            <label>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                <input type="text" name={usernameId} placeholder="Nombre de usuario"/>
            </label>
            <label>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                <input type="email" name={emailId} placeholder="Correo Electrónico" />
            </label>
            <label>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-lock"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" /><path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><path d="M8 11v-4a4 4 0 1 1 8 0v4" /></svg>
                <input type="password" name={passwordId} placeholder="Contraseña"/>
            </label>
            <button>Registrar</button>
        </form>
    )
}