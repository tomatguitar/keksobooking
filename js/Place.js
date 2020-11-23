import { default as Generator } from "./Generator.js";

export default class Place {
  _places = [];
  constructor(
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
  getPlaces () {
    this.create();
    return this._places;
  }
  create() {
    const generator = new Generator();
    const coordX = generator.generateRandVal(this.minX, this.maxX);
    const coordY = generator.generateRandVal(this.minY, this.maxY);
    for (let i = 0; i <= this.title.length; i++) {
      let j = i + 1;
      this._places.push({
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
    return this._places;
  }
}