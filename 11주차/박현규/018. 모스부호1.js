function solution(letter) {
    let result = '';

    morse = { 
        '.-':'a',
        '-...':'b',
        '-.-.':'c',
        '-..':'d',
        '.':'e',
        '..-.':'f',
        '--.':'g',
        '....':'h',
        '..':'i',
        '.---':'j',
        '-.-':'k',
        '.-..':'l',
        '--':'m',
        '-.':'n',
        '---':'o',
        '.--.':'p',
        '--.-':'q',
        '.-.':'r',
        '...':'s',
        '-':'t',
        '..-':'u',
        '...-':'v',
        '.--':'w',
        '-..-':'x',
        '-.--':'y',
        '--..':'z'
    }
    result = letter.split(' ').map(morseword => morse[morseword]).join('')
    // result = letter.split(' ').reduce((prev,curr) => prev + morse[curr],'')
    return result;s
}

// map으로 변환후에 join하는 방법과 reduce하는 방법이 있음.
// 하드 코딩으로도 해결가능.