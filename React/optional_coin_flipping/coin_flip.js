function tossCoin() {
        return Math.random() > 0.5 ? "heads" : "tails";
    }
    
function fiveHeads() {
    return new Promise( (resolve, reject) => {
        let headCount = 0;
        let attempts = 0;
        while (headCount < 5 && attempts < 100) {
            attempts++;
            let result = tossCoin();
            console.log(result +' attempt ' + attempts)
            if (result=== 'heads') {
                headCount++
            } else {
                headCount = 0
            }
            
        }
        if (headCount>4 && attempts < 100) {
            resolve(`5 heads were flipped in ${attempts} attempts.`)
        } else {
            reject('it somehow never happened')
        }
    })
}

fiveHeads()
    .then( res => console.log(res))
    .catch ( err => console.log(err));
console.log('when will this run?')