interface ProductType {
    name:String,
    price:number,
    stock:number,
    getId:()=>string,
    offer?:boolean,
}
interface GiveId{
    getId:()=>string;
}
class Product implements ProductType, GiveId{
    public name:string;
    public price:number;
    public stock: number;
    private id:string = String(Math.random()*1000);

    constructor(name:string, price:number,stock:number){
        this.name=name;
        this.price=price;
        this.stock = stock;
    }
   getId = ()=>this.id;
}

const product1 = new Product("Macbook",10,20)



//type utility--> ease of access
//Partial<Type>

type User = {
    name:string,
    email:string,
}
//if you want to make questionablelike 
// user2 = {name?:string} // you can simply write
type User2 = Partial<User>

//Required //Opposite of partial

//Readonly<Type>
type User3 = Readonly<User>

const user:User3={
    name:'abhi',
    email:'aakash@gmail.com'
}
user.name = "Asd"

type userone = {
    name:string;
    email:string;
}
type User4 = Record<"name"|"email"|"gender",string>


interface UserInfo{
    age:number,
}
type Username = "john" | "levi" | "elon" | "jack";
const users:Record<Username,UserInfo>={
    john:{age:45},
    levi:{age:56},
    elon:{age:35},
    jack:{age:67},
}

//Pick <Type,keys>
interface OrderInfo{
    readonly id:string;
    user:string;
    city:string;
    state:string;
    country:string;
    status:string;
}

type ShippingInfo = Pick<OrderInfo, "city"|"state"|"country">;
 //Omit- to leave
 interface OrderInfos{
    readonly id:string;
    user:string;
    city:string;
    state:string;
    country:string;
    status:string;
}
type Random = Omit<OrderInfos,"country">


//Exclude

type Randoms = Exclude<string|number,number>

//Non nullable

type Union = string | number | boolean | undefined | null
type Randome = NonNullable<Union>


//Parameters 
const myfunc = (a:number, b:string)=>{
  console.log(a+b);
};
type Randomee = Parameters<typeof myfunc>


// constructor parameter
class SampleClass {
    constructor(public s:string, public t:string){}
}
type para = ConstructorParameters<typeof SampleClass>


//Return type
const myfuncs = (a:number, b:string):string=>{
    return a+b
}
type functo = ReturnType<typeof myfuncs>


//instance type
class SampleClass1 {
    constructor(public s:string, public t:string){}
}
type hello = InstanceType<typeof SampleClass1>


//generics
const futoo = (n:number):number=>{
   return n;
}

const ans = futoo(20);

//this is an actual generic where no one knows at last what you defined string number or anything
const gene = <CustomType>(n:CustomType):CustomType=>{
    let text:CustomType;
    return n;
}
const result = gene("shitt");
const result2 = gene(true);
const result3 = gene(20);


type Person1={
    namse:string,
    age:number
}
const fut = <T,U>(n:T,o:U):{n:T,o:U}=>{
    return {n,o};
}

const answer = fut<number,string>(20,"Lol");


type Perrson = {
    name:string,
    age:number,
}

const ussers: Perrson[]=[
    {
      name:"Aakash",
      age:19,
    },{
        name:"Nahar",
        age:20,
    },{
        name:"Akshay",
        age:17,
    }
]
const filterbyPeoples =<TT,U extends keyof TT>(arr:TT[], property:U, value:TT[U]):TT[]=>{
 return arr.filter(item=>item[property]===value)
    
} 

const filteredPeopleByName = filterbyPeoples(ussers,"name","Nahar")
console.log(filteredPeopleByName);