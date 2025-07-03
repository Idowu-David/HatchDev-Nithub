"use strict";
/**
 * Implementation of the djb2 algorithm
 * @param str string used to generate hash value
 *
 * @returns hash value
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashDjb2 = hashDjb2;
function hashDjb2(str) {
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
        const c = str.charCodeAt(i);
        hash = (hash << 5) + hash + c;
    }
    return hash;
}
