const URL = "https://api.webscraping.ai/html?url=https://example.com&api_key=your_api_key_here";

const getFacts = async ()=>{
    console.log("gettingdata...");
let response = await fetch(URL);
console.log(response);
let data = await response.json();
console.log(data);
};

let c = 10;
let b = 17;
 let a = c + b;
console.log(a)


const d = 120;
let s = "vishal";
z = s+d;
console.log(z)
console.log(typeof z , typeof a)

let age = 21;
let name = "shal";
if (age>=18){
    if(name="vishal"){
        console.log("vishal");
    }
    else{
        console.log("name not match");
    }
    console.log("you are eligible");

}else{
    console.log("sorry! you are not eligible");
}