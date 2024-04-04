import {useEffect, useState} from "react";

export interface RefreshOptions<T> {
    delay: number,
    skipIf?: (data?: T) => boolean,
    silent?: boolean
}

export interface FetchError {
    http: boolean,
    status?: number,
    error: Error
}

export default function useFetch<T>(url: string, init?: RequestInit, mapFn?: (value: any) => T, callback?: (value: T) => void, refreshOptions?: RefreshOptions<T>) {
    const [data, setData] = useState<{ data?: T, loading: boolean, error?: FetchError }>({
        loading: true
    })

    const skip = refreshOptions?.skipIf && refreshOptions.skipIf(data.data)

    useEffect(() => {
        if (skip)
            return

        const controller = new AbortController();

        function run() {
            if (!refreshOptions?.silent) {
                setData(prev => ({
                    data: prev.data,
                    loading: true
                }))
            }

            fetch(url, {
                signal: controller.signal,
                ...init
            }).then(res => {
                if (!res.ok) {
                    setData({
                        loading: false,
                        error: {
                            http: true,
                            status: res.status,
                            error: new Error(res.statusText)
                        }
                    })
                    return undefined
                }

                return res.json()
            }).then(json => {
                if (json === undefined)
                    return

                const final: T = mapFn ? mapFn(json) : json

                if (callback)
                    callback(final)

                setData({
                    data: final,
                    loading: false
                })
            }).catch(e => {
                setData({
                    loading: false,
                    error: {
                        http: false,
                        error: e
                    }
                })
            })
        }

        run()

        if (!refreshOptions?.delay)
            return () => controller.abort()

        const interval = setInterval(run, refreshOptions?.delay)
        return () => {
            clearInterval(interval)
            controller.abort()
        }
    }, [url, init?.method, init?.body, init?.cache, init?.headers, refreshOptions?.delay, refreshOptions?.silent, skip]);

    return data
}