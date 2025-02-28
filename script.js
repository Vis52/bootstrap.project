const URL = "https://api.webscraping.ai/html?url=https://example.com&api_key=your_api_key_here";

const getFacts = async ()=>{
    console.log("gettingdata...");
let response = await fetch(URL);
console.log(response);
let data = await response.json();
console.log(data);
};