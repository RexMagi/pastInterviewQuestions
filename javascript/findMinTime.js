function minimumTime(numOfSubFiles, files) {
    const mergeTimes = [];

    let min1 = 0;
    let min2 = 0;
    const removeMin1 = (e) => { return e != min1 };
    const removeMin2 = (e) => { return e != min2 }
    for (let i = 0; i < numOfSubFiles - 1; i++) {
        min1 = Math.min.apply(null, files);
        files = files.filter(removeMin1);
        min2 = Math.min.apply(null, files);
        files = files.filter(removeMin2);

        mergeTimes.push(min1 + min2)
        files.push(min1 + min2)
    }

    return mergeTimes.reduce((accumulator, a) => accumulator + a, 0);
}
// FUNCTION SIGNATURE ENDS


console.log(minimumTime(5, [16, 5, 5, 6, 7]))
    //6,5 [16, 43, 7,11]
    //11,7[16, 43, 18]
    //16,18 [43,34]
    //43,34

    // (6 + 5) + 11 + 7 + 16 + 18 + 43 + 34