import { createStore } from "solid-js/store";

interface MobileState {
  mobileMenuOpen: string;
}
const [state, setState] = createStore<MobileState>({
  mobileMenuOpen: "max-md:hidden max-md:flex-col",
});

export { state, setState };
