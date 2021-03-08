const n1 = document.querySelector("#n1") as HTMLInputElement;
const n2 = document.querySelector("#n2") as HTMLInputElement;
const btn = document.querySelector("#btnSum")!;

function sum(a: number, b: number) {
  return a + b;
}

btn.addEventListener("click", (event) => {
  const res = sum(Number(n1.value), Number(n2.value));
  console.log(res);
});
