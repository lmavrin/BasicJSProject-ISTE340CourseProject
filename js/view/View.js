/**
 * Represents the View. View holds refences to all GUI elements user interacts with.
 * The View exposes methods to interact with the view elements.
 */
export class View {
  constructor() {
    this.changeMeDiv = document.getElementById("changeMeDiv");
    this.inputs = null;
    this.form = document.forms.myForm;
  }

  createInputs(properties) {
    properties.forEach((property) => {
      document.querySelector("fieldset").insertAdjacentHTML(
        "beforeend",
        `<div class="field">
            <label id='${property}Check' class="label">${property}</label>
            <div class="storageDiv">
              <input id='${property}' name='${property}' class="input is-medium" type="text" placeholder='${property}'>
            </div>
            </div>
            `
      );
    });
    this.inputs = document.querySelectorAll("input");
  }
}
