import { setState, state } from "~/stores/navstore";

export default function NavMobile() {
  function toggleSwitch() {
    const track = document.querySelector(".toggle-track");
    const thumb = document.querySelector(".toggle-thumb");

    track.classList.toggle("checked");
    thumb.classList.toggle("checked");
    if (state.mobileMenuOpen.includes("hidden")) {
      setState({ mobileMenuOpen: "max-md:content max-md:flex-col" });
    } else {
      setState({ mobileMenuOpen: "max-md:hidden max-md:flex-col" });
    }
  }

  return (
    <>
      <div>{state.mobileMenuOpen}</div>
      <div class="md:hidden">
        {/* <button
          class="text-white focus:outline-none"
          onClick={() =>
            setState({
              mobileMenuOpen: "contents",
            })
          }
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
        </button> */}
        <div
          class="toggle-track relative h-8 w-14 cursor-pointer rounded-full"
          onClick={() => toggleSwitch()}
        >
          <div class="toggle-thumb absolute h-6 w-6 translate-x-1 translate-y-1 transform rounded-full shadow-md"></div>
        </div>
      </div>
    </>
  );
}
