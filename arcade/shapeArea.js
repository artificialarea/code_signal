function shapeArea1(n) {
    return n*n + (n-1)*(n-1);
}

function shapeArea2(n) {
    console.log(`n:${n}, ${Math.pow(n, 2)} (n^2) + ${Math.pow(n-1, 2)} (n-1^2)`);
    return Math.pow(n, 2) + Math.pow(n-1, 2);
}

const Handler = {
    shapeArea1,
    shapeArea2,
};

function test(num) {
    console.log(num)
    for (let i = 1; i <= num; i++) {
        console.log(`\n//////////// shapeArea${i}`);
        console.log(Handler[`shapeArea${i}`](1));
        console.log(Handler[`shapeArea${i}`](2));
        console.log(Handler[`shapeArea${i}`](3));
        console.log(Handler[`shapeArea${i}`](4));
    }
}
test(Object.keys(Handler).length);