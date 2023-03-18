window.onload = function () {
  let genreSel = document.getElementById("genreSel"),
    yearSel = document.getElementById("yearSel"),
    ratingSel = document.getElementById("ratingSel");
  imageSelect = document.getElementById("moviePictcure");
  this.genreChoice = null;
  this.yearChoice = null;
  this.ratingChoice = null;
  for (let genre in selectData) {
    genreSel.options[genreSel.options.length] = new Option(genre, genre);
  }
  let genreSelected, yearSelected, ratingSelected;
  function setPicture(picture) {
    imageSelect.src = picture;
  }
  genreSel.onchange = function () {
    yearSel.length = 1; // remove all options bar first
    ratingSel.length = 1; // remove all options bar first
    if (this.selectedIndex < 1) {
      yearSel.options[0].text = "Please select Genre first";
      ratingSel.options[0].text = "Please select Year first";
      return; // done
    }
    yearSel.options[0].text = "Please select year";
    for (let year in selectData[this.value]) {
      yearSel.options[yearSel.options.length] = new Option(year, year);
    }
    if (yearSel.options.length == 2) {
      yearSel.selectedIndex = 1;
      yearSel.onchange();
    }
    genreSelected = selectDataImage[this.value];
    setPicture(genreSelected.moviePictcure);
  };

  yearSel.onchange = function () {
    ratingSel.length = 1; // remove all options bar first
    if (this.selectedIndex < 1) {
      ratingSel.options[0].text = "Please select year first";
      return; // done
    }
    ratingSel.options[0].text = "Please select rating";

    let rating = selectData[genreSel.value][this.value];
    for (let i = 0; i < rating.length; i++) {
      ratingSel.options[ratingSel.options.length] = new Option(
        rating[i],
        rating[i]
      );
    }
    if (ratingSel.options.length == 2) {
      ratingSel.selectedIndex = 1;
      ratingSel.onchange();
    }
    yearSelected = selectDataImage[genreSel.value][this.value];
    setPicture(yearSelected.moviePictcure);
  };
  ratingSel.onchange = function () {
    let options = document.getElementById("options");
    localStorage.setItem("genre", genreSel.value);
    localStorage.setItem("year", yearSel.value);
    localStorage.setItem("rating", ratingSel.value);
    ratingSelected = selectDataImage[genreSel.value][yearSel.value][this.value];
    setPicture(ratingSelected.moviePictcure);
    options.value =
      localStorage.getItem("genre") +
      " ," +
      localStorage.getItem("year") +
      " ," +
      localStorage.getItem("rating");
  };

  let select = document.getElementById("select");
  select.onclick = function () {
    let emailCheck = document.getElementById("emailCheck");
    let nameCheck = document.getElementById("nameCheck");
    let email = document.getElementById("email");
    let name = document.getElementById("name");
    let mailFormatType = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!mailFormatType.test(email.value)) {
      name.classList.remove("is-danger");
      nameCheck.classList.remove("has-text-danger");
      emailCheck.classList.add("has-text-danger");
      email.classList.add("is-danger");
    } else if (name.value.length == 0) {
      emailCheck.classList.remove("has-text-danger");
      email.classList.remove("is-danger");
      name.classList.add("is-danger");
      nameCheck.classList.add("has-text-danger");
    } else {
      emailCheck.classList.remove("has-text-danger");
      nameCheck.classList.remove("has-text-danger");
      email.classList.remove("is-danger");
      name.classList.remove("is-danger");
      console.log(
        "Congratz you managed to complete the form and you managed to save it to the storage"
      );
      localStorage.setItem("name", name.value);
      localStorage.setItem("email", email.value);
    }
  };
};
