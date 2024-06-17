import { signOut } from "@solid-mediakit/auth/client";
import UserInfo from "./UserInfo";

const Navbar = () => {
  return (
    <div id="navbar" class="flex justify-evenly border-blue-500 border-2">
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
      <div id="navright" class="flex max-h-10 max-w-10 self-end">
        <button
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
  );
};

export default Navbar;
