function randomRoto(x) {
    switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            console.log("".concat(x, ":\u4E00\u6841\u3067\u3059\u306D\uFF01"));
            break;
        case 11:
        case 22:
        case 33:
        case 44:
        case 55:
            console.log("".concat(x, ":\u30AD\u30EA\u756A\u3067\u3059\u306D\uFF01"));
            break;
        default:
            console.log("".concat(x, "\u30CF\u30BA\u30EC"));
            break;
    }
}
var a = Math.floor(Math.random() * 60);
randomRoto(a);
console.log(a);
