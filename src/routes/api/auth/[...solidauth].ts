import { SolidAuth, SolidAuthConfig } from "@solid-mediakit/auth";
import { authOptions } from "~/server/auth";
import GitHub from "@auth/core/providers/github";

export const authOpts: SolidAuthConfig = {
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    debug: false,
};
export const { GET, POST } = SolidAuth(authOptions);
