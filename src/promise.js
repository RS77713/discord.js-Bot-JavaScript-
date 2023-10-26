const one = () => {
    return 'one';
}

const two = () => {
    setTimeout(() => {
        return'two';
    },3000)
    
}
const three = () => {
    return 'three';
}

const agregate = () => {
    const valOne = one();
    console.log(valOne);
    const valTwo = two();
    console.log(valTwo);
    const valThreee = threee();
    console.log(valThreee);
}

//agregate();
const calculate = (a, b, c) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0 || c < 0){
                reject('')
            }
            resolve(a + b + c);
         }, 3000)
    })
}

calculate(1, 2, 3).then(additional => {
    console.log(additional);
    return calculate(additional, 4, 5)
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
}).finally(() => {
    console.log('Task is finished');
})

//Async/await

// const add = async () => {
//     const sum1 = await calculate(1, 2, 3);
//     const sum2 = await calculate(sum1, 4, 5);
//     const sum3 = await calculate(sum3, 6, 7);
//     return sum3;
// }

// add().then(result => {
//     console.log(result);
// });