export function badRequest(text?: string) {
    return response(400, text)
}

export function notFound(text?: string) {
    return response(404, text)
}

export function error(text?: string) {
    return response(500, text)
}

export function response(status: number, text?: string) {
    return new Response(text, {status})
}