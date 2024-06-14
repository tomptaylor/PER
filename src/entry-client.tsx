import { mount, StartClient } from "@solidjs/start/client";

let temp = document.getElementById("app");
temp?.classList.add(
  "bg-gradient-to-tr",
  "from-green-300",
  "via-slate-100",
  "to-yellow-200"
);
mount(() => <StartClient />, document.getElementById("app"));
