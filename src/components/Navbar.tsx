import { signOut } from "@solid-mediakit/auth/client";

const Navbar = () => {
  return (
    <>
      <a href="/">Index</a>
      <a href="/tools">Tools</a>
      <a href="https://www.fs.usda.gov/foresthealth/applied-sciences/index.shtml">
        FHTET
      </a>
      <a href="https://www.fs.usda.gov/foresthealth/applied-sciences/mapping-reporting/index.shtml">
        FHP
      </a>
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
    </>
  );
};

export default Navbar;
