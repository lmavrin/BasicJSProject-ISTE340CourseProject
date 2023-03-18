/**
 * More at {@link https://developer.mozilla.org/en-US/docs/Web/API/FormData FormData}.
 */
export class StorageController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.selects.forEach((select) => {
      select.onchange = this.updateFrom.bind(this, select);
    });
  }

  updateFrom(select) {
    this.model[select.name] = select.value;
    let jsonMovie = JSON.stringify(
      this.model.genre.value +
        " ," +
        this.model.year.value +
        " ," +
        this.model.rating.value
    );
    localStorage.setItem("select", jsonMovie);
    this.view.storage.value = jsonMovie;
  }

  loadStorageData() {
    let storageData =
      localStorage.getItem("genre") +
      " ," +
      localStorage.getItem("year") +
      " ," +
      localStorage.getItem("rating");
    if (storageData) {
      this.view.storage.value = storageData;
    } else {
      this.view.storage.value = "Local storage is empty.";
    }
  }
}
