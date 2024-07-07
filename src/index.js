var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{ /*type Username=string|number;

type yoho = (n:number,m:number)=>number;

let b:Username="Aakash";

let a:string = "{24}";

let nambo:number = 242;

let check:boolean;

let namo = <string>"Aakash";
let num = <number>234;

let surname:string|number;

surname="Elizabeth"+2;
console.log(surname)

const func:yoho=(a,b):number=>{
    console.log(a,b);
    return (b*a);

}



//Arrays
const arr:number[]=[12,24,36,48];

const arr2:string[]=["sad","happy"];

const arr3:Array<string>=[];

const arr4:Array<string|number>=["12","34",76];

arr4.forEach(i=>{
    i.toString(3)
})
//tuple
const tuppu: [number,number,number] = [244,53,56];


type Obj={
    height:number,
    weight:number,
    gender?:boolean
};

const obj:Obj={
    gender:true,
    height:3434,
    weight:78,
}


//now interface

interface Obj1{
    height:number,
    weight:number,
    gender?:boolean,
}
type FuncType = (n:number, m:number)=>void;
interface NewObj extends Obj1{
   scholar:boolean,
   func:FuncType,

}

const kendal:NewObj={
    height:4664,
    weight:78,
    scholar:true,
    func:(n,m)=>{
        console.log(n*m);
    },
}
kendal.func(28,40)
const gigi:NewObj={
   height:564,
   weight:89,
   scholar:true,
   func:(n,m)=>{
    console.log(n+m);
   }
}

*/
}
var func = function (a, b, l) {
    if (typeof l === "undefined")
        return "L was not provided";
    return a * b * l;
};
func(56, 7);
var funs = function () {
    var m = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        m[_i] = arguments[_i];
    }
    return m;
};
funs(24, 35, 36, 78, 57);
function abc(n) {
    return 45;
}
var getData = function (product) {
    console.log(product);
};
var productOne = {
    name: "Macbook",
    stock: 46,
    price: 999,
    photo: "sampleurl",
    id: "hey",
};
//never type
var err = new Error();
var errorHandler = function () {
    throw new Error();
};
// -------------Classes in Typescript---------------
var Player = /** @class */ (function () {
    function Player(height, weight, power) {
        var _this = this;
        this.power = power;
        this.getMyHeight = function () { return _this.height; };
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.id = String(Math.random() * 100);
    }
    return Player;
}());
var aakash = new Player(100, 150, 99);
var Player2 = /** @class */ (function (_super) {
    __extends(Player2, _super);
    function Player2(height, weight, power, special) {
        var _this = _super.call(this, height, weight, power) || this;
        _this.getMyPower = function () { return _this.power; };
        _this.special = special;
        return _this;
    }
    return Player2;
}(Player));
var akki = new Player2(100, 50, 23, true);
console.log("Weight", akki.weight);
console.log("Height", akki.getMyHeight());
console.log("Power", akki.getMyPower());
