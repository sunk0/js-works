let input = 'samurai life above all';
let vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for(let inputIndex = 0; inputIndex < input.length; inputIndex++){
    for(let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++){
        if(input[inputIndex] === vowels[vowelIndex]){
            resultArray.push(input[inputIndex])
        }      
    }
    if(input[inputIndex] === "e" || input[inputIndex] === "u"){
        resultArray.push(input[inputIndex])
    }
}
let whaleTranslate = resultArray.join("").toUpperCase();
console.log(whaleTranslate);
