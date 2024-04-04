import {NextRequest} from "next/server";
import {Argon2id} from "oslo/password";
import {lucia} from "@/lib/auth";
import {cookies} from "next/headers";
import {redirect, RedirectType} from "next/navigation";
import sql from "@/lib/db";
import {z} from "zod";
import {response} from "@/lib/responses";

const schema = z.object({
    username: z.string().min(4).max(64),
    password: z.string().max(32)
})

export async function POST(request: NextRequest) {
    const parsed = schema.safeParse(await request.json())
    if (!parsed.success)
        return response(400);
    const body = parsed.data

    const users = await sql("SELECT id, hashed_password FROM users WHERE username = $1", [body.username])
    // hash even if user not found to avoid side channel attacks
    const verify = await new Argon2id().verify(users.rows.length > 0 ? users.rows[0].hashed_password : "", body.password)

    if (users.rows.length === 0 || !verify)
        return response(403)

    const session = await lucia.createSession(users.rows[0].id, {})
    const cookie = lucia.createSessionCookie(session.id)
    cookies().set(cookie.name, cookie.value, cookie.attributes)

    return redirect("/", RedirectType.replace)
}