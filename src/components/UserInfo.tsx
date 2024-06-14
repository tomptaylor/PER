import { createSession } from "@solid-mediakit/auth/client";
import { Show, type VoidComponent } from "solid-js";

const UserInfo: VoidComponent = () => {
  const session = createSession();

  return (
    <Show
      when={session()}
      fallback={<p>Only shown for logged in users</p>}
      keyed
    >
      {(us) => (
        <>
          {us.user?.image ? (
            <img class="w-10 h-10" src={us.user?.image} />
          ) : null}
          {us.user?.name}
        </>
      )}
    </Show>
  );
};

export default UserInfo;
