import { createSession, signOut } from "@solid-mediakit/auth/client";
import { Show, type VoidComponent } from "solid-js";
import Tab from "~/components/Tab";

const Protected: VoidComponent = () => {
  const session = createSession();

  return (
    <Show
      when={session()}
      fallback={<p>Only shown for logged in users</p>}
      keyed
    >
      {(us) => (
        <main>
          <h1>Report</h1>
          {us.user?.image ? <img src={us.user?.image} /> : null}
          <span>Hey there {us.user?.name}! You are signed in!</span>

          <Tab />
        </main>
      )}
    </Show>
  );
};

export default Protected;
