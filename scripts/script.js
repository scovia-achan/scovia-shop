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