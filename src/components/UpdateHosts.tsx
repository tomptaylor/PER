import { Component } from "solid-js";

const UpdateHosts: Component<{}> = (props) => {
  const suggestions = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
  ];
  const pillContainer = document.getElementById("pillContainer");
  const input = document.getElementById("autocompleteInput");
  const autocompleteList = document.getElementById("autocomplete-list");

  let currentFocus;

  input.addEventListener("input", function () {
    const val = this.value;
    closeAllLists();
    if (!val) return false;
    currentFocus = -1;

    const div = document.createElement("div");
    div.setAttribute("id", this.id + "-autocomplete-list");
    div.setAttribute("class", "autocomplete-items");

    this.parentNode.appendChild(div);

    suggestions.forEach((suggestion) => {
      if (suggestion.toLowerCase().includes(val.toLowerCase())) {
        const item = document.createElement("div");
        item.innerHTML =
          "<strong>" + suggestion.substr(0, val.length) + "</strong>";
        item.innerHTML += suggestion.substr(val.length);
        item.innerHTML += '<input type="hidden" value="' + suggestion + '">';

        item.addEventListener("click", function () {
          input.value = "";
          addPill(this.getElementsByTagName("input")[0].value);
          closeAllLists();
        });

        div.appendChild(item);
      }
    });
  });

  input.addEventListener("keydown", function (e) {
    let items = document.getElementById(this.id + "-autocomplete-list");
    if (items) items = items.getElementsByTagName("div");
    if (e.keyCode === 40) {
      currentFocus++;
      addActive(items);
    } else if (e.keyCode === 38) {
      currentFocus--;
      addActive(items);
    } else if (e.keyCode === 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (items) items[currentFocus].click();
      }
    }
  });

  function addActive(items) {
    if (!items) return false;
    removeActive(items);
    if (currentFocus >= items.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = items.length - 1;
    items[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(items) {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    const items = document.getElementsByClassName("autocomplete-items");
    for (let i = 0; i < items.length; i++) {
      if (elmnt !== items[i] && elmnt !== input) {
        items[i].parentNode.removeChild(items[i]);
      }
    }
  }

  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });

  function addPill(value) {
    const pill = document.createElement("div");
    pill.classList.add(
      "bg-blue-100",
      "text-blue-700",
      "rounded-full",
      "px-3",
      "py-1",
      "m-1",
      "flex",
      "items-center"
    );
    pill.innerHTML =
      value +
      '<span class="ml-2 cursor-pointer" onclick="this.parentElement.remove()">&times;</span>';
    pillContainer.appendChild(pill);
  }

  return (
    <div>
      <div class="rounded bg-white p-5 shadow">
        <h1 class="mb-4 text-2xl font-bold">Type-Ahead with Pills</h1>
        <div class="mb-2 flex flex-wrap" id="pillContainer"></div>
        <div class="relative">
          <input
            id="autocompleteInput"
            type="text"
            placeholder="Type to search..."
            class="w-full rounded border border-gray-300 p-2"
          />
          <div id="autocomplete-list" class="autocomplete-items"></div>
        </div>
      </div>
    </div>
  );
};

export default UpdateHosts;
