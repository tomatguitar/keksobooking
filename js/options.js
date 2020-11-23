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

export {MIN_MAX_GENERATION_PARAMETERS, PLACE_OPTIONS};
