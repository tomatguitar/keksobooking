"use strict";
import { MIN_MAX_GENERATION_PARAMETERS, PLACE_OPTIONS } from "../js/options.js";
import { default as Place } from "../js/Place.js";


function init () {
  const place = new Place(PLACE_OPTIONS, MIN_MAX_GENERATION_PARAMETERS);
  console.log(place.getPlaces());
}

init();

document.querySelector(".map").classList.remove("map--faded");

let fragment = document.createDocumentFragment("template").content;
