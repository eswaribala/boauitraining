/**
 * Created by BALASUBRAMANIAM on 27-10-2015.
 */
function Category(id,name)
{
    this.id=id;
    this.name=name;
}

function SubCategory(id,name,type)
{
    //parameter as an object
   Category.apply(this,[id,name]);
  this.type=type;
}
//inheritance
SubCategory.prototype=new Category();

var subcategory = new SubCategory(1,'Clothes','MEN');
console.log(subcategory.name);
console.log(subcategory.type);
