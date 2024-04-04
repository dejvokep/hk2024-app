import {NextRequest} from "next/server";
import {Argon2id} from "oslo/password";
import {lucia} from "@/lib/auth";
import {cookies} from "next/headers";
import {redirect, RedirectType} from "next/navigation";
import sql from "@/lib/db";
import {z} from "zod";
import {response} from "@/lib/responses";
import {generateId} from "lucia";

const schema = z.object({
    username: z.string().min(4).max(64).regex(/^[A-Za-z0-9@#$%^&*()-_=+:;,./<>?]+$/),
    password: z.string().max(32)
})

export async function POST(request: NextRequest) {
    const parsed = schema.safeParse(await request.json())
    if (!parsed.success)
        return response(400);
    const body = parsed.data

    const password = await new Argon2id().hash(body.password);
    const id = generateId(32);

    try {
        await sql("INSERT INTO auth_user (id, username, hashed_password) VALUES ($1, $2, $3)", [id, body.username, password]);
    } catch (e) {
        // handle the exception type
        return response(409)
    }

    const session = await lucia.createSession(id, {});
    const cookie = lucia.createSessionCookie(session.id);
    cookies().set(cookie.name, cookie.value, cookie.attributes);

    return redirect("/", RedirectType.replace);
}