/**
 * Responds to user inputs. Here, we use the FormData, a JS built-in class that
 * provides a way to easily construct a set of key/value pairs representing form
 * fields and their values.
 *
 * More at {@link https://developer.mozilla.org/en-US/docs/Web/API/FormData FormData}.
 */
export class FormController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.createInputs(this.model.getProperties());
  }
}
