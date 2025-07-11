"use strict";
/**
 * Implementation of the djb2 algorithm
 * @param str string used to generate hash value
 *
 * @returns hash value
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashDjb2 = hashDjb2;
function hashDjb2(key) {
    let hash = 5381;
    let str = String(key);
    for (let i = 0; i < str.length; i++) {
        const c = str.charCodeAt(i);
        hash = (hash << 5) + hash + c;
    }
    if (hash < 0)
        hash = hash * -1;
    return hash;
}
// console.log(hashDjb2("Dunsin"))
// console.log(hashDjb2("David"))
