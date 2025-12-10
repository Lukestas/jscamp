import { useCallback } from "react"
import { useLocation, useNavigate } from "react-router"

export function useRouter() {
    const navigate = useNavigate()
    const location = useLocation()

    // memoize navigateTo so its identity is stable between renders
    const navigateTo = (path) => {
        console.log('Navegando a:', path)
        navigate(path)
    }

    return { currentPath: location.pathname, navigateTo }
}