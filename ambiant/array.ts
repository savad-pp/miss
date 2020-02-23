let l2=[11,22,33,44].map((x)=>{
    return x
})

console.log("l2",l2)
let l3=[11,22,33,44].filter((x)=>{
    return x
})
console.log("l3",l3)

let l4=[11,22,33,44].join(("-"))
console.log("l4",l4,typeof(l4))

function add(a:string, b:string)

function add(a:number, b:number)

function add(a: any, b:any) {
    return a + b;
}

console.log(add("Hello ", "Steve")); // returns "Hello Steve" 
console.log(add(10, 20));