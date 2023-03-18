/**
 * Model class that holds application data.
 *
 * @type type
 */
export class Movie {
  constructor(genre, year, rating) {
    this._genre = genre;
    this._year = year;
    this._rating = rating;
  }

  set genre(newGenre) {
    this._genre = newGenre;
  }

  get genre() {
    return this._genre;
  }

  set year(newYear) {
    this._year = newYear;
  }

  get year() {
    return this._year;
  }
  set rating(newRating) {
    this._rating = newRating;
  }

  get rating() {
    return this._rating;
  }
}
