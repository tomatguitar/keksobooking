'use strict';

var places = [];
var titles = ["Большая уютная квартира", "Маленькая неуютная квартира", "Оргомный прекрасный дворец", 
               "Маленький ужасный дворец", "Красивый гостевой домик", "Некрасивый негостеприимный домик", 
               "Ужасное бунгало по колено в воде", "Уютное бунгало далеко от моря"];
var types = ["palace", "flat", "house", "bungalo"];
var checkIns = ["12:00", "13:00", "14:00"];
var checkOuts = ["12:00", "13:00", "14:00"];
var features = ["wifi", "dishwaher", "parking", "washer", "elevator", "conditioner"];
var photos = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", 
              "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
              "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];
           
function generatePlace (place, title, checkIn, checkOut, types, feature, photo) {
    var minX = 130;
    var maxX = 630;
    
    var minY = 130;
    var maxY = 630;
    
    var minPrice = 1000;
    var maxPrice = 1000000;
    
    var minRoom = 1;
    var maxRoom = 5;
    
    var minGuests = 1;
    var maxGuests = 10;
    
    var x =  generateRandVal(minX, maxX);
    var y =  generateRandVal(minY, maxY);
    
    function generateRandArrLen (arr) {
        var result = [];
        var randLen = Math.floor(Math.random()*arr.length);
        for (var i=0; i<=randLen; i++){
            result.push(arr[i]);
        } 
        return result;
    }
    
    function generateRandArrElem (arr) {
        var rand = Math.floor(Math.random()*arr.length);
        return arr[rand];
    };
    
    function generateRandVal (minVal,maxVal){
            return  Math.floor(minVal + Math.random() * (maxVal + 1 - minVal));  
        };
    
    for(var i=0; i <= title.length; i++){
        var j = i + 1;
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

var fragment = document.createDocumentFragment('template').content.

