"use strict";
const MIN_MAX_GENERATION_PARAMETERS = {
  minX: 130,
  maxX: 630,
  minY: 130,
  maxY: 630,
  minPrice: 1000,
  maxPrice: 1000000,
  minRoom: 1,
  maxRoom: 5,
  minGuests: 1,
  maxGuests: 10,
};

const PLACE_OPTIONS = {
  titles: [
    "Большая уютная квартира",
    "Маленькая неуютная квартира",
    "Оргомный прекрасный дворец",
    "Маленький ужасный дворец",
    "Красивый гостевой домик",
    "Некрасивый негостеприимный домик",
    "Ужасное бунгало по колено в воде",
    "Уютное бунгало далеко от моря",
  ],
  types: ["palace", "flat", "house", "bungalo"],
  checkIns: ["12:00", "13:00", "14:00"],
  checkOuts: ["12:00", "13:00", "14:00"],
  features: [
    "wifi",
    "dishwaher",
    "parking",
    "washer",
    "elevator",
    "conditioner",
  ],
  photos: [
    "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
    "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
    "http://o0.github.io/assets/images/tokyo/hotel3.jpg",
  ],
};

let places = [];

class Generator {
  result = [];

  generateRandElementPosition(num) {
    return Math.floor(Math.random() * num.length);
  }

  generateRandArrLen(arr) {
    const resultLength = this.generateRandElementPosition(arr);
    for (let i = 0; i <= resultLength; i++) {
      this.result.push(arr[i]);
    }
    return this.result;
  }

  generateRandArrElem(arr) {
    let rand = this.generateRandElementPosition(arr);
    return arr[rand];
  }

  generateRandVal(minVal, maxVal) {
    return Math.floor(minVal + Math.random() * (maxVal + 1 - minVal));
  }
}

class Place {
  constructor(
    places,
    { titles, checkIns, checkOuts, types, features, photos },
    {
      minX,
      maxX,
      minY,
      maxY,
      minPrice,
      maxPrice,
      minRoom,
      maxRoom,
      minGuests,
      maxGuests,
    }
  ) {
    (this.places = places),
      (this.title = titles),
      (this.checkIn = checkIns),
      (this.checkOut = checkOuts),
      (this.types = types),
      (this.feature = features),
      (this.photo = photos),
      (this.minX = minX),
      (this.maxX = maxX),
      (this.minY = minY),
      (this.maxY = maxY),
      (this.minPrice = minPrice),
      (this.maxPrice = maxPrice),
      (this.minRoom = minRoom),
      (this.maxRoom = maxRoom),
      (this.minGuests = minGuests),
      (this.maxGuests = maxGuests);
  }

  create() {
    const generator = new Generator();
    const coordX = generator.generateRandVal(this.minX, this.maxX);
    const coordY = generator.generateRandVal(this.minY, this.maxY);
    for (let i = 0; i <= this.title.length; i++) {
      let j = i + 1;
      places.push({
        author: "img/avatar/user0" + j + ".png",
        offer: {
          title: this.title[i],
          adress: coordX + ", " + coordY, //generaterandVal(minX, maxX) + ", " + generaterandVal(minY, maxY),
          price: generator.generateRandVal(this.minPrice, this.maxPrice),
          type: generator.generateRandArrElem(this.types),
          rooms: generator.generateRandVal(this.minRoom, this.maxRoom),
          guests: generator.generateRandVal(this.minGuests, this.maxGuests),
          checkin: generator.generateRandArrElem(this.checkIn),
          checkout: generator.generateRandArrElem(this.checkOut),
          features: generator.generateRandArrLen(this.feature),
          description: "",
          photos: generator.generateRandArrElem(this.photo),
        },
        location: {
          x: coordX,
          y: coordY,
        },
      });
    }
    return places;
  }
}

const place = new Place(places, PLACE_OPTIONS, MIN_MAX_GENERATION_PARAMETERS).create();

console.log(places);
document.querySelector(".map").classList.remove("map--faded");

let fragment = document.createDocumentFragment("template").content;
