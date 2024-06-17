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
        <div class="flex border-pink-400 border-4">
          {us.user?.image ? (
            <img class="w-15 h-15" src={us.user?.image} />
          ) : null}
          <div>{us.user?.name}</div>
        </div>
      )}
    </Show>
  );
};

export default UserInfo;
