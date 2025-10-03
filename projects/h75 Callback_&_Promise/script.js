console.log("Raj is hacker")
console.log("Raja is Eyesofhacker")


setTimeout(() => {
    console.log("i'm a inside settimeout")
}, 0);

setTimeout(() => {
    console.log("i'm a inside settimeout 2")
}, 0);

console.log("The End")

const fn = () => {
    console.log("Nothing")
}

const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry", fn);
    document.head.append(sc)
}

loadScript(" ", callback )
