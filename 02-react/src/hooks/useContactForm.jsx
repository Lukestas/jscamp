import { useState } from "react"

export default function useContactForm({ userNameId, userEmailId, userPhoneId, userMessageId }) {
    const[lastMessage,setLastMessage]=useState()
    const sendMessage = (event) => {
        console.log(userEmailId)
        event.preventDefault()
        const formData = new FormData(event.target)
        const userInformation = {
            username: formData.get(userNameId),
            userEmail: formData.get(userEmailId),
            userPhone: formData.get(userPhoneId),
            userMessage: formData.get(userMessageId)
        }
        console.log({"Ultimo mensaje de: ": lastMessage})
        setLastMessage(userInformation.userMessage)
        return userInformation
    }

    return { sendMessage }
}