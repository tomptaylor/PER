import { createSession, signIn } from "@solid-mediakit/auth/client";
import { Navigate } from "@solidjs/router";
import { Show, createSignal, onCleanup } from "solid-js";
import InputForm from "~/components/UpdReport";

export default function Home() {
  const session = createSession();

  // const [redirectIn, setRedirectIn] = createSignal(3);

  // const int = setInterval(() => {
  //   setRedirectIn(prev => prev - 1);
  // }, 1000);

  // onCleanup(() => clearInterval(int));

  // <span>Redirecting to protected page in {redirectIn()} seconds...</span>
  // <Show when={redirectIn() <= 0}>
  //   <Navigate href="/protected" />
  // </Show>

  return (
    <main>
      <h1 class="b">Home</h1>
      <InputForm />
      <Show
        when={session()}
        fallback={
          <>
            <span>You are not signed in.</span>
            <button onClick={() => signIn("github")}>Sign In</button>
          </>
        }
      >
        what
      </Show>
    </main>
  );
}
