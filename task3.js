const sqrarray = () => {
    let output = []
    let input = [2, 4, 5, 10]
    for (let i = 0; i < input.length; i++) {
        output.push(input[i] * input[i])
    }
    console.log('(1). [2, 4, 5, 10] ==>', output);


}

sqrarray()

const fillterOdd = () => {
    let output = []
    let input = [2, 5, 7, 9, 11, 12, 14, 13, 20]
    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 == 0) {
            output.push(input[i])
        }
    }
    console.log('(2). [2, 5, 7, 9, 11, 12, 14, 13, 20]  ==>', output);
}

fillterOdd()

const sum = () => {
    let output = 0;
    let input = [2, 5, 7, 9, 11, 12, 14, 13, 20]
    for (let i = 0; i < input.length; i++) {
        output += input[i]
    }
    console.log('(3). [2, 5, 7, 9, 11, 12, 14, 13, 20]  ==>  ', output);

}
sum()

// USING JAVASCRIPT METHOD
const useMap = () => {
    let inputs = [2, 4, 5, 10]
    let result = inputs.map(input => input * input)
    console.log('(4). map ==>', result);
}
useMap()

const useFillter = () => {
    let input = [2, 5, 7, 9, 11, 12, 14, 13, 20]

    let result = input.filter((value) => value % 2 == 0)
    console.log('(5). flilter  ==>', result);
}
useFillter()

const useReduce = () => {
    let input = [2, 5, 7, 9, 11, 12, 14, 13, 20]
    let result = input.reduce((total, num) => total + num)
    console.log('(6). reduce  ==>', result);

}
useReduce()


const ascending = () => {
    let input = [2, 5, 7, 9, 11, 12, 23, 32, 14, 13, 20]
    let result = input.sort(function (a, b) {
        return a - b
    });
    console.log('(7). [2, 5, 7, 9, 11, 12, 23, 32, 14, 13, 20] ==> ', result);
}
ascending()