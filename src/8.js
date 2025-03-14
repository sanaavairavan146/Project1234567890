const numbers = [];
for(let i=0;i<10;i++){
    let num = Math.floor(Math.random()*10);
    if(!numbers.includes(num)){
        numbers.push(num);
    }
}
return numbers;
