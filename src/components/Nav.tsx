import { useLocation } from "@solidjs/router";
import { createSignal } from "solid-js";
import NavMobile from "./NavMobile";
import NavDesk from "./NavDesk";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";
  const [isOpen, setIsOpen] = createSignal(false);
  return (
    <nav class="bg-sky-800">
      <NavMobile />
      <NavDesk />
    </nav>
  );
}
