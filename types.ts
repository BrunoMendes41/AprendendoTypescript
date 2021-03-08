// Boolean (True / false)
let isOpen: boolean;
isOpen = true;

// string ('foo', "foo", `foo`)
let message: string;
message = `foo ${isOpen}`;

//number (int, float, hex, bin)
let total: number;
total = 0xff0;

//array (type[])
let items: string[];
items = ["foo", "bar"];
//ou
let values: Array<number>;
values = [1, 2, 3];

//tuple: array com numero de
// elementos e tipagem fixa
let title: [number, string];
title = [1, "foo"];

// enum
enum Colors {
  white = "#fff",
  black = "#000",
}

// any: qualquer coisa
let coisa: any;
coisa = [2, "sada"];

//void (vazio)
function logger(): void {
  console.log("foo");
}

// null | undefined
type Bla = string | undefined;

// nerver
function error(): never {
  throw new Error("error");
}

// object
let cart: object;

cart = {
  key: "fj",
};

// type inference
let message2 = "mensagem";

window.addEventListener("click", (e) => {
  e.target;
});
