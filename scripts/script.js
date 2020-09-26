((scovia) => {
    "use strict";
    function O(element){
        return scovia.getElementById(element)
    }

    function S(element){
        return O(element).style
    }

    function C(element){
        return scovia.getElementsByClassName(element)
    }

    // S("scovia").color = '#F00'
})(document);

// function myMap(){
//     var mapProp={
//         center:new google.maps.LatLong(51.508742,-0.120850),
//         zoom:5
//     }
//     var map=new google.maps.Map(document.getElementsByClassName("google-map"), mapProp)
// }