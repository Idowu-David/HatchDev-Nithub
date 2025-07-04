"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hashMap_1 = require("./hashMap");
const map = new hashMap_1.HashMap();
// let song = {
// 	"Title": "Worthy of my Praise",
// 	"Duration": "109s",
// }
// map.set("Dunsin Oyekan", 19);
// map.print(map);
// map.delete("Hello");
// map.print(map);
map.set("dram ", 5);
map.set("vivency", 100);
map.set("hola", 129);
map.print(map);
map.delete("hola");
map.print(map);
map.set("ALX", 10);
map.print(map);
// map.set("urites", 89);
// map.set("redescribed", 72);
// map.print(map);
// map.update("David", true);
// console.log(map.delete("David"));
// console.log(map.get("Hello"));
// map.set("depravement", 4);
// map.set("subgenera", 5);
// map.print(map);
