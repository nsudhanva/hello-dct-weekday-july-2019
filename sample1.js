console.log('hello niranjanhk')

function balancedArray(a) {
    let firstSum = 0
    let secondSum = 0
    let number = 0
    for (let i = 0; i < a.length / 2; i++) {
        firstSum += a[i]
    }
    for (let i = a.length / 2; i < a.length; i++) {
        secondSum += a[i]
    }
    if (firstSum < secondSum) {
        number = secondSum - firstSum
    } else {
        number = firstSum - secondSum
    }
    return number
}

const a = [1, 2, 3, 4, 5, 6, 4, 8]
console.log(balancedArray(a))