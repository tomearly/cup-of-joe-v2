import { useEffect, useState } from "react"

type FetchState<T> = {
    data: T | null
    error: string | null
    loading: boolean
}

export function useFetch<T>(url: string) {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        error: null,
        loading: true,
    })

    useEffect(() => {
        fetch(url)
            .then(res => {
                if(!res.ok) throw new Error(res.statusText)
                    return res.json() as Promise<T>
            })
            .then(data => setState({data, error: null, loading: false}))
            .catch(() => setState({ data: null, error: 'Failed to load', loading: false}))
    })

    return state
}