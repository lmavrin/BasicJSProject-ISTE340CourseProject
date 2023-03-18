import { Model } from "./model/Model.js";
import { View } from "./view/View.js";
import { FormController } from "./controller/FormController.js";
import { StorageController } from "./controller/StorageController.js";
import { Movie } from "./model/Movie.js";
import { StorageView } from "./view/StorageView.js";

const app = new FormController(new Model(), new View());
new StorageController(new Movie(), new StorageView());
