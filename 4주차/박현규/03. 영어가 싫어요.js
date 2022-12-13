function solution(numbers) {
    let numbers_copy = JSON.parse(JSON.stringify(numbers))

    if (numbers_copy.includes('one')) {
        numbers_copy = numbers_copy.replaceAll('one', '1')
    }
    if (numbers_copy.includes('two')) {
        numbers_copy = numbers_copy.replaceAll('two', '2')
    }
    if (numbers_copy.includes('three')) {
        numbers_copy = numbers_copy.replaceAll('three', '3')
    }
    if (numbers_copy.includes('four')) {
        numbers_copy = numbers_copy.replaceAll('four', '4')
    }
    if (numbers_copy.includes('five')) {
        numbers_copy = numbers_copy.replaceAll('five', '5')
    }
    if (numbers_copy.includes('six')) {
        numbers_copy = numbers_copy.replaceAll('six', '6')
    }
    if (numbers_copy.includes('seven')) {
        numbers_copy = numbers_copy.replaceAll('seven', '7')
    }
    if (numbers_copy.includes('eight')) {
        numbers_copy = numbers_copy.replaceAll('eight', '8')
    }
    if (numbers_copy.includes('nine')) {
        numbers_copy = numbers_copy.replaceAll('nine', '9')
    }
    if (numbers_copy.includes('zero')) {
        numbers_copy = numbers_copy.replaceAll('zero', '0')
    }

    let result = parseInt(numbers_copy)
    return result;
}


// 좀 더 있어보이는 방법 없을까...?