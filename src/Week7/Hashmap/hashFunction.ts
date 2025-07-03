/**
 * Implementation of the djb2 algorithm
 * @param str string used to generate hash value
 * 
 * @returns hash value
 */

export function hashDjb2(str: string): number {
  let hash = 5381;

  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);
    hash = (hash << 5) + hash + c;
  }
  return hash;
}