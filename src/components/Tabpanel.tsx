import { Match, Switch, createResource } from "solid-js";
import MapComponent from "./MapComponent";

const CONTENT = {
  General: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  Geography: `map`,
  Narrative: `On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.`,
};

function createDelay() {
  return new Promise((resolve) => {
    const delay = Math.random() * 420 + 160;
    setTimeout(() => resolve(delay), delay);
  });
}

const Child = (props) => {
  return (
    <div class="tab-content">
      <Switch fallback={<p>{CONTENT[props.page]} </p>}>
        <Match when={CONTENT[props.page] === "map"}>
          <MapComponent />
        </Match>
      </Switch>
    </div>
  );
};

export default Child;
