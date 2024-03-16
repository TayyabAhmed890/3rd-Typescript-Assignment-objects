//Object ==> Key: Value Pair,
//Simple Example of Objects..!

let item = {
    item1 : "Glass",
    item2 : "Plate",
    item3 : "Dish",
    item4 : "Cup",
}

console.log(item);

//"."use for show a specific items in Objects..!

console.log(item.item3);

//Objects with Array..!

let bigData = {
    dataBase : ["files","UniqeID","Clients"],
    server : "Cloud Based",
    Info : {
        Gates : [1,2,3,4,5,6,7,8],
    }

}
//Simply Print..!

console.log(bigData);

//Now we see a Specific Details Example..!

console.log(bigData.Info.Gates[1]);
console.log(bigData.server);
