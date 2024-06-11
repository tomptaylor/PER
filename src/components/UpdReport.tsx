import { createSignal } from "solid-js";

const InputForm = () => {
  const [formData, setFormData] = createSignal({
    pestEventClosure: false,
    surveyMethods: [],
    settings: [],
    hosts: [],
  });

  const [errors, setErrors] = createSignal({
    pestEventClosure: false,
    surveyMethods: [],
    settings: [],
    hosts: [],
  });

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    console.log(target.name, target.value);
    setFormData({ ...formData(), [target.name]: target.value });
    console.log(formData());
    setErrors({ ...errors(), [target.name]: !target.checkValidity() });
  };

  const handleSelectChange = (e: Event) => {
    const options = (e.currentTarget as HTMLSelectElement).options;
    const target = e.target as HTMLInputElement;
    const selectedValues = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setFormData({ ...formData(), [target.name]: selectedValues });
    console.log(formData());
    // setSelectedOptions(selectedValues);
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    if (formElement.checkValidity()) {
      alert("Form submitted successfully!");
      console.log(formData());
    } else {
      alert("Please fill out the form correctly.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="flex">
          <div class="flex flex-col gap-y-3">
            <div>
              <label>
                Pest Event Closure:
                <input
                  type="checkbox"
                  name="pestEventClosure"
                  checked={formData().pestEventClosure}
                  onChange={handleChange}
                />
              </label>
              {errors().pestEventClosure && (
                <span>{errors().pestEventClosure}</span>
              )}
            </div>
            <div class="flex flex-col gap-y-3">
              <label for="surveyMethods">Survey Method(s):</label>
              <select
                id="surveyMethods"
                name="surveyMethods"
                multiple
                onChange={handleSelectChange}
              >
                <option value="1">Areial Surver</option>
                <option value="2">Aerial Survey - DMSM</option>
                <option value="3">Call In Unverified</option>
                <option value="4">Call in Verified</option>
              </select>
              {errors().pestEventClosure && (
                <span>{errors().pestEventClosure}</span>
              )}
            </div>
          </div>
          <div class="flex flex-col gap-y-3">
            <div class="group relative cursor-pointer py-2 flex flex-col gap-y-3">
              <label class="menu-hover" for="settings">
                Setting(s):
              </label>
              <select
                class="invisible absolute group-hover:visible m-11 p-4"
                id="settings"
                name="settings"
                multiple
                onChange={handleSelectChange}
              >
                <option value="1">Deciduous (Forest)</option>
                <option value="2">Evergreen (Forest)</option>
                <option value="3">Mixed (Forest)</option>
                <option value="4">Nursery (Non-Natural Woody)</option>
                <option value="5">Orchards (Non-Natural Woody)</option>
              </select>
              {errors().pestEventClosure && (
                <span>{errors().pestEventClosure}</span>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default InputForm;
