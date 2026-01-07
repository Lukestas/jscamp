import { useAuthStore } from "../../store/authStore";

export default function ProtectedRoute({}){
    const {isLoggedIn}=useAuthStore()
    if(!isLoggedIn){
        
    }
}