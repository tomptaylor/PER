import { signOut } from "@solid-mediakit/auth/client";
import UserInfo from "./UserInfo";
import { createSignal } from "solid-js";
import { setState, state } from "~/stores/navstore";

const Navbar = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <>
      <div>{}</div>
      <nav class="bg-green-600 p-4">
        <div class="container mx-auto flex justify-between items-center">
          <div
            id="navbar"
            class="flex justify-between border-blue-500 border-2 items-center"
          >
            <div id="navleft" class="hidden md:block">
              <a href="/">Index</a>
              <a href="/tools">Tools</a>
              <a href="https://www.fs.usda.gov/foresthealth/applied-sciences/index.shtml">
                FHTET
              </a>
              <a href="https://www.fs.usda.gov/foresthealth/applied-sciences/mapping-reporting/index.shtml">
                FHP
              </a>
            </div>
          </div>
          <div class="lg:hidden">
            <button
              class="text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen())}
            >
              <svg
                class="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class={`lg:flex ${isOpen() ? "block" : "hidden"} flex-col lg:flex-row lg:items-center w-full lg:w-auto`}
          >
            <div id="navright" class="flex h-16 w-40">
              <button
                class="rounded-md border-black b-2"
                onClick={() =>
                  void signOut({
                    redirectTo: "/",
                    redirect: true,
                  })
                }
              >
                Sign Out
              </button>
              <UserInfo />
            </div>
          </div>
        </div>
      </nav>
      <div
        id="navbar"
        class="flex justify-between border-blue-500 border-2 items-center"
      >
        <div id="navleft">
          <a href="/">Index</a>
          <a href="/tools">Tools</a>
          <a href="https://www.fs.usda.gov/foresthealth/applied-sciences/index.shtml">
            FHTET
          </a>
          <a href="https://www.fs.usda.gov/foresthealth/applied-sciences/mapping-reporting/index.shtml">
            FHP
          </a>
        </div>
        <div id="navright" class="flex h-16 w-40">
          <button
            class="rounded-md border-black b-2"
            onClick={() =>
              void signOut({
                redirectTo: "/",
                redirect: true,
              })
            }
          >
            Sign Out
          </button>
          <UserInfo />
        </div>
      </div>
    </>
  );
};

export default Navbar;
