var Grocery = /** @class */ (function () {
    function Grocery(name, itemNo, price, quantity, brand) {
        this.name = name;
        this.itemNo = itemNo;
        this.price = price;
        this.quantity = quantity;
        this.brand = brand;
    }
    return Grocery;
}());
;
var groceryList = [new Grocery("Chocolate", 10279954, 13.50, 5, "Hershey's"), new Grocery("Apples", 10584922, 13.50, 12, "Delicous"), new Grocery("Milk", 15842654, 32.29, 5, "White Yummy's"), new Grocery("Soup", 84059887, 60.88, 20, "Creamy's"), new Grocery("Cereal", 46517800, 16.50, 4, "Crunchy's")];
var table = document.getElementById("groceryList").getElementsByTagName('tbody')[0];
for (var index in groceryList) {
    var newRow = table.insertRow();
    var rowLis = [groceryList[index].itemNo, groceryList[index].name, groceryList[index].brand, groceryList[index].price, groceryList[index].quantity];
    for (var itm in rowLis) {
        var newCell = newRow.insertCell();
        var newText = document.createTextNode(rowLis[itm].toString());
        newCell.appendChild(newText);
    }
    // console.log(groceryList[index].itemNo, groceryList[index].name, groceryList[index].brand, groceryList[index].price, groceryList[index].quantity);
}
