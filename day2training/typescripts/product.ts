abstract class Product{
    private _productId:number;
    private _name:string;
    private _dop:Date;
    private _cost:number;
    private _active:boolean;


    constructor(productId: number, name: string, dop: Date, cost: number, active: boolean) {
        this._productId = productId;
        this._name = name;
        this._dop = dop;
        this._cost = cost;
        this._active = active;
    }

    get productId(): number {
        return this._productId;
    }

    set productId(value: number) {
        this._productId = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get dop(): Date {
        return this._dop;
    }

    set dop(value: Date) {
        this._dop = value;
    }

    get cost(): number {
        return this._cost;
    }

    set cost(value: number) {
        this._cost = value;
    }

    get active(): boolean {
        return this._active;
    }

    set active(value: boolean) {
        this._active = value;
    }

   abstract display():void;
}
/*
var product=new Product(935696356,"laptop",
    new Date(),76000,true);
//product.productId=935696356;
//product.name="Laptop";
//product.dop=new Date();
//product.cost=67000;
//product.active=true;
console.log(product);
product.display();
*/

//inheritance
class SeasonalProduct extends Product{
    private _offer:number;

    constructor(productId: number, name: string, dop: Date, cost: number, active: boolean, offer: number) {
        super(productId,name,dop,cost,active);
        this._offer = offer;
    }


    get offer(): number {
        return this._offer;
    }

    set offer(value: number) {
        this._offer = value;
    }
//method overriding
    display(){
        //super.display();
        console.log(this._offer);
    }
}
var seasonalProduct=new SeasonalProduct(935696356,"laptop",
    new Date(),76000,true,0.25);
console.log(seasonalProduct);
seasonalProduct.display();
