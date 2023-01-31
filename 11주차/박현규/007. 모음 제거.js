function solution(my_string) {
    let result = '';
    let standard = ['a','e','i','o','u']

    for(let i = 0 ; i < standard.length; i++){
        if(my_string.split('').includes(standard[i])){
            my_string = my_string.replaceAll(standard[i],'')
        }
    }
    result = my_string
    return result;
}

// ----------------------------------------------------------------------

const solution = (my_string) => my_string.replace(/[aeiou]/g,'')

// replace 정규표현식을 사용.