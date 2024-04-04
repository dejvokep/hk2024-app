import {Lucia, TimeSpan} from "lucia";
import React, {cache} from "react";
import {cookies} from "next/headers";
import {redirect, RedirectType} from "next/navigation";
import {NeonHTTPAdapter} from "@lucia-auth/adapter-postgresql";
import sql from "@/lib/db";

export const adapter = new NeonHTTPAdapter(sql, {
    user: "auth_user",
    session: "auth_session"
});

export const lucia = new Lucia(adapter, {
    sessionCookie: {
        expires: false,
        attributes: {
            secure: process.env.NODE_ENV === "production"
        }
    },
    getUserAttributes: attributes => {
        return {
            username: attributes.username
        };
    },
    sessionExpiresIn: new TimeSpan(2, "w")
});

export const authorize = cache(async () => {
    const session = cookies().get(lucia.sessionCookieName)?.value ?? null;

    if (!session) {
        return {
            user: null,
            session: null
        };
    }

    const data = await lucia.validateSession(session);

    try {
        if (data.session && data.session.fresh) {
            const sessionCookie = lucia.createSessionCookie(data.session.id);
            cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
        }

        if (!data.session) {
            const sessionCookie = lucia.createBlankSessionCookie();
            cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
        }
    } catch {
        // ignore
    }

    return data;
})

export const restricted = (page: () => Promise<React.JSX.Element>, destination?: string, invert?: boolean): () => Promise<React.JSX.Element> => {
    return async () => {
        const {session} = await authorize()

        if (!session == !invert)
            return redirect(destination || "/", RedirectType.push)

        return page()
    }
}

declare module "lucia" {
    interface Register {
        Lucia: typeof lucia;
        DatabaseUserAttributes: DatabaseUserAttributes;
    }
}

interface DatabaseUserAttributes {
    username: string;
}