class Product{
    private _productId:number;
    private _name:string;
    private _dop:Date;
    private _cost:number;
    private _active:boolean;


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
}

var product=new Product();
product.productId=935696356;
product.name="Laptop";
product.dop=new Date();
product.cost=67000;
product.active=true;
console.log(product);
