import { useState, useEffect } from "react"

export const useTypingEffect = (text: string, totalDuration: number = 2000) => {
    const [currentText, setCurrentText] = useState("")

    useEffect(() => {
        let timeout: NodeJS.Timeout

        if (currentText.length < text.length) {
            const delay = totalDuration / text.length
            timeout = setTimeout(() => {
                setCurrentText((prev) => prev + text[prev.length])
            }, delay)
        }

        return () => clearTimeout(timeout)
    }, [currentText, text, totalDuration])

    useEffect(() => {
        setCurrentText("")
    }, [text])

    return currentText
}
