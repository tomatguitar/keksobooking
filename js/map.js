'use strict';

let places = [];
const titles = ["Большая уютная квартира", "Маленькая неуютная квартира", "Оргомный прекрасный дворец", 
               "Маленький ужасный дворец", "Красивый гостевой домик", "Некрасивый негостеприимный домик", 
               "Ужасное бунгало по колено в воде", "Уютное бунгало далеко от моря"];
const types = ["palace", "flat", "house", "bungalo"];
const checkIns = ["12:00", "13:00", "14:00"];
const checkOuts = ["12:00", "13:00", "14:00"];
const features = ["wifi", "dishwaher", "parking", "washer", "elevator", "conditioner"];
const photos = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", 
              "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
              "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];
           
function generatePlace (place, title, checkIn, checkOut, types, feature, photo) {
    const minX = 130;
    const maxX = 630;
    
    const minY = 130;
    const maxY = 630;
    
    const minPrice = 1000;
    const maxPrice = 1000000;
    
    const minRoom = 1;
    const maxRoom = 5;
    
    const minGuests = 1;
    const maxGuests = 10;
    
    const x =  generateRandVal(minX, maxX);
    const y =  generateRandVal(minY, maxY);
    
    function generateRandArrLen (arr) {
        let result = [];
        let randLen = Math.floor(Math.random()*arr.length);
        for (let i=0; i<=randLen; i++){
            result.push(arr[i]);
        } 
        return result;
    }
    
    function generateRandArrElem (arr) {
        let rand = Math.floor(Math.random()*arr.length);
        return arr[rand];
    };
    
    function generateRandVal (minVal,maxVal){
            return  Math.floor(minVal + Math.random() * (maxVal + 1 - minVal));  
        };
    
    for(let i=0; i <= title.length; i++){
        let j = i + 1;
        place.push({
                "author": "img/avatar/user0" + j +".png",
                "offer": {
                    "title": title[i],
                    "adress": x +", " + y, //generaterandVal(minX, maxX) + ", " + generaterandVal(minY, maxY),
                    "price": generateRandVal(minPrice, maxPrice),
                    "type": generateRandArrElem (types),
                    "rooms": generateRandVal(minRoom, maxRoom),
                    "guests": generateRandVal(minGuests, maxGuests),
                    "checkin": generateRandArrElem (checkIn),
                    "checkout": generateRandArrElem (checkOut),
                    "features": generateRandArrLen (feature),
                    "description": "",
                    "photos": generateRandArrElem (photo)
                },
                "location":{
                    "x": x ,
                    "y": y
                }      
        });
    }
    return place;
};

generatePlace(places, titles, checkIns, checkOuts, types, features, photos);

document.querySelector('.map').classList.remove('map--faded');

let fragment = document.createDocumentFragment('template').content.

