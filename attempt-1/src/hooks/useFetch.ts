import { useEffect, useState } from "react"

type FetchState<T> = {
    data: T | null
    error: string | null
    loading: boolean
}

export function useFetch<T>(url: string): FetchState<T> {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        error: null,
        loading: true,
    })

    useEffect(() => {
        const controller = new AbortController()

        setState(prev => ({ ...prev, loading: true }))

        fetch(url, { signal: controller.signal })
            .then(async (res) => {
                if (!res.ok) {
                    const errorText = await res.text().catch(() => res.statusText)
                    throw new Error(errorText || res.statusText || 'Fetch failed')
                }
                return res.json() as Promise<T>
            })
            .then((data) => setState({ data, error: null, loading: false }))
            .catch((error) => {
                if (controller.signal.aborted) return
                setState({
                    data: null,
                    error: error instanceof Error ? error.message : String(error),
                    loading: false,
                })
            })

        return () => controller.abort()
    }, [url])

    return state
}