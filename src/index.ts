type Username=string|number;

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