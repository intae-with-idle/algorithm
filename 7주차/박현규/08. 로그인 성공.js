function solution(id_pw, db) {
    let result = '';

    let id = id_pw[0]
    let pw = id_pw[1]

    for (let i = 0; i < db.length; i++) {
        if (id == db[i][0] && pw == db[i][1]) {
            result = 'login'
            break
        }
        if (id == db[i][0] && pw !== db[i][1]) {
            result = 'wrong pw'
            break
        }
        else {
            result = 'fail'
        }
    }
    return result;
}