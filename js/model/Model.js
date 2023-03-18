/*
 * model class that is used to create the form
 */

export class Model {
  constructor() {
    this._name = "";
    this._email = "";
  }
  //Method that passes all of the  values from the constructor and replaces _ with and empty space
  getProperties() {
    let properties = [];
    for (let property in this) {
      properties.push(property.replace("_", ""));
    }
    return properties;
  }
}
