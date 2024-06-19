import { state } from "~/stores/navstore";

export default function NavDesk() {
  return (
    <div class={`flex items-center p-3 flex-wrap ${state.mobileMenuOpen} `}>
      <a class="underline" href="/">
        Home
      </a>

      <a class="underline" href="/about">
        About
      </a>

      <a class="underline" href="/tools">
        Tools
      </a>
      <a
        class="underline"
        href="https://www.fs.usda.gov/foresthealth/applied-sciences/index.shtml"
      >
        FHTET
      </a>
      <a
        class="underline"
        href="https://www.fs.usda.gov/foresthealth/applied-sciences/mapping-reporting/index.shtml"
      >
        FHP
      </a>
    </div>
  );
}
