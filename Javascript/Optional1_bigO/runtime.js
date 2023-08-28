// Number.prototype.isPrime = function() {
//         for( let i=2; i<Math.sqrt(this); i++ ) {
//         if( this % i === 0 ) {
//                 return false;
//         }
//         }
//         return true;
//     }

//     const { performance } = require('perf_hooks');
//     const start = performance.now();
//     let primeCount = 0;
//     let num = 2; // for math reasons, 1 is considered prime
//     while( primeCount < 1e4 ) {
//     if( num.isPrime() ) {
//             primeCount++;
//         }
//         num++;
    // }
    // console.log(`The 10,000th prime number is ${num-1}`);
    // console.log(`This took ${performance.now() - start} milliseconds to run`);
    
// recursive
// function rFib( n ) {
//     const { performance } = require('perf_hooks');
//     const start = performance.now();
//         if ( n < 2 ) {
//             return n;
//         }
//         return rFib( n-1 ) + rFib( n-2 );
//     }
    
    // iterative
    // function iFib( n ) {
    //     const { performance } = require('perf_hooks');
    //     const start = performance.now();
    //     const vals = [ 0, 1 ];
    //     while(vals.length-1 < n) {
    //         let len = vals.length;
    //         vals.push( vals[len-1] + vals[len-2] );
    //     }
    //     return vals[n];
    // }
    // iFib(20);
    
    // console.log(rFib(20))
    // console.log(`This took ${performance.now() - start} milliseconds to run`);
    
    // console.log(iFib(20))
    // console.log(`This took ${performance.now() - start} milliseconds to run`);
    //iterative is faster

    const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
    // const reversed1 = story.split("").reverse().join("");
    // console.log(reversed1)

    function reversed1(string) {
        const { performance } = require('perf_hooks');
        const start = performance.now();
        let result = string.split("").reverse().join("")
        console.log(`This took ${performance.now() - start} milliseconds to run`);
        return result
    }
    console.log(reversed1(story))

    

    function rev2(string) {
        const { performance } = require('perf_hooks');
        const start = performance.now();
        let revSTR = ''
        for (let i = string.length-1; i >=0; i--) {
            revSTR += string[i]
            
        }
        console.log(`This took ${performance.now() - start} milliseconds to run`);
        return revSTR
    }

    console.log(rev2(story))
    

    function rev3(string) {
        const { performance } = require('perf_hooks');
        const start = performance.now();
        let revSTR = ''
        let revArr = string.split('')
        for (let i = revArr.length-1; i >=0; i--) {
            revSTR +=revArr[i]
            
        }
        console.log(`This took ${performance.now() - start} milliseconds to run`);
        return revSTR
    }
    console.log(rev3(story))

    //