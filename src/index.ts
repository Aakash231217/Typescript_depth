{/*type Username=string|number;

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

*/}

//Default parameter
type FuncType = (n:number,m:number,l?:number)=>number|string;

const func:FuncType = (a,b,l)=>{
    if(typeof l==="undefined") return "L was not provided"
    return a*b*l;
};

func(56,7);



//rest operator

type FunType = (...m:number[])=>number[];

const funs:FunType=(...m:number[])=>{
   return m;
}

funs(24,35,36,78,57);


function abc(n:number):number{
    return 45;
}

//function with object
interface Product{
    name:string,
    stock:number,
    price:number,
    photo?:string,
    readonly id:string
}

type GetDataType =(product:Product)=>void;

const getData:GetDataType=(product)=>{
   console.log(product);
}

const productOne:Product = {
    name:"Macbook",
    stock:46,
    price:999,
    photo:"sampleurl",
    id:"hey",
}