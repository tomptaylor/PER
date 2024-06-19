import { state } from "~/stores/navstore";

export default function NavDesk() {
  return (
    <ul class={`flex items-center p-3 flex-wrap ${state.mobileMenuOpen} `}>
      <li class={`border-b-2  mx-1.5 sm:mx-6`}>
        <a href="/">Home</a>
      </li>
      <li class={`border-b-2 mx-1.5 sm:mx-6`}>
        <a href="/about">About</a>
      </li>
    </ul>
  );
}
