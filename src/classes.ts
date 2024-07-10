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