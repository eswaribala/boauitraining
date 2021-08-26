class Product {
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
var product = new Product();
product.productId = 935696356;
product.name = "Laptop";
product.dop = new Date();
product.cost = 67000;
product.active = true;
console.log(product);
