import GithubProvider from "@auth/core/providers/github";
import type { SolidAuthConfig } from "@solid-mediakit/auth/src/index";

export const authOptions: SolidAuthConfig = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    })
  ]
};

