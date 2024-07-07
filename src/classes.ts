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

