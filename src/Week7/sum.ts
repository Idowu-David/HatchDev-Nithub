function sum(n: number): number {
  if (n < 1) return 0;
  return n + sum(n - 1);
}

console.log(sum(4));