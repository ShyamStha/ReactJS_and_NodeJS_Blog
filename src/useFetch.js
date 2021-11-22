import { useState, useEffect } from 'react'
const useFetch = function (url) {
    const [value, setValue] = useState(null)
    const [isPending, setPending] = useState(true)

    useEffect(async () => {
        setTimeout(async () => {
            try {
                const res = await fetch(url)
                const data = await res.json()
                setValue(data)
                console.log(data)
                setPending(false)
            }
            catch (err) {
                console.log(err)
            }

        }, 1000)

    }, [url])
    return {
        value,
        isPending
    }
}
export default useFetch