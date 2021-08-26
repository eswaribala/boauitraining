class Product {
    constructor(productId, name, dop, cost, active) {
        this._productId = productId;
        this._name = name;
        this._dop = dop;
        this._cost = cost;
        this._active = active;
    }
    get productId() {
        return this._productId;
    }
    set productId(value) {
        this._productId = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get dop() {
        return this._dop;
    }
    set dop(value) {
        this._dop = value;
    }
    get cost() {
        return this._cost;
    }
    set cost(value) {
        this._cost = value;
    }
    get active() {
        return this._active;
    }
    set active(value) {
        this._active = value;
    }
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
class SeasonalProduct extends Product {
    constructor(productId, name, dop, cost, active, offer) {
        super(productId, name, dop, cost, active);
        this._offer = offer;
    }
    get offer() {
        return this._offer;
    }
    set offer(value) {
        this._offer = value;
    }
    //method overriding
    display() {
        //super.display();
        console.log(this._offer);
    }
}
var seasonalProduct = new SeasonalProduct(935696356, "laptop", new Date(), 76000, true, 0.25);
console.log(seasonalProduct);
seasonalProduct.display();
