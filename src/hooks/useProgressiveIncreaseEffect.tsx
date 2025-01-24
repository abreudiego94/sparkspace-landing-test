import { useState, useEffect } from "react"

export const useProgressiveIncrease = (start: number, maxPercentage: number, step: number = 1, delay: number = 50) => {
    const [currentPercentage, setCurrentPercentage] = useState(start)

    useEffect(() => {
        if (currentPercentage < maxPercentage) {
            const timeout = setTimeout(() => {
                setCurrentPercentage((prev) => {
                    const nextValue = prev + step
                    return nextValue > maxPercentage ? maxPercentage : nextValue 
                })
            }, delay)

            return () => clearTimeout(timeout) 
        }
    }, [currentPercentage, maxPercentage, step, delay])

    return currentPercentage
}
