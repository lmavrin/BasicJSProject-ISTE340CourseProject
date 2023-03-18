/**
 * A JS object that holds the data for the selects.
 * The select data can be structured in different ways. Here, a JS object is used.
 *
 * In JavaScript, an object is a standalone entity, with properties. A property
 * of an object can be explained as a variable that is attached to the object.
 * A property may be an identifier, OR a Number OR a String.
 */
const selectData = {
  //JS Object which properties are strings
  "Horror Movie": {
    "Year 1992": [
      "Candyman (1992) Rating:75/100",
      "Dust Devil (1992) Rating: 29/100",
    ],
    "Year 2016": [
      "Lights Out (2016) Rating:76/100",
      "Evolution (2016) Rating: 83/100",
    ],
  },
  "Action movie": {
    "Year 1998": [
      "A Civil Action (1998) Rating:61/100",
      "Godzilla (1998) Rating: 15/100",
    ],
    "Year 2017": [
      "Baby Driver (2017) Rating:92/100",
      "John Wick: Chapter 2 (2017) Rating: 89/100",
    ],
  },
};
const selectDataImage = {
  //JS Object which properties are strings
  "Horror Movie": {
    moviePictcure: "media/horrorSelected.gif",
    "Year 1992": {
      moviePictcure: "media/oldHorror.gif",
      "Candyman (1992) Rating:75/100": { moviePictcure: "media/oldCandy.gif" },
      "Dust Devil (1992) Rating: 29/100": {
        moviePictcure: "media/oldDustdevil.gif",
      },
    },
    "Year 2016": {
      moviePictcure: "media/newHorror.gif",
      "Lights Out (2016) Rating:76/100": {
        moviePictcure: "media/newLightsout.gif",
      },
      "Evolution (2016) Rating: 83/100": {
        moviePictcure: "media/newEvolution.gif",
      },
    },
  },
  "Action movie": {
    moviePictcure: "media/actionSelected.gif",
    "Year 1998": {
      moviePictcure: "media/oldAction.gif",
      "A Civil Action (1998) Rating:61/100": {
        moviePictcure: "media/oldAcivilaction.gif",
      },
      "Godzilla (1998) Rating: 15/100": {
        moviePictcure: "media/oldGodzilla.gif",
      },
    },
    "Year 2017": {
      moviePictcure: "media/newAction.gif",
      "Baby Driver (2017) Rating:92/100": {
        moviePictcure: "media/newBabydriver.gif",
      },
      "John Wick: Chapter 2 (2017) Rating: 89/100": {
        moviePictcure: "media/newJohnwick.gif",
      },
    },
  },
};
