function solution(id_list, report, k) {
    let result = [];
    let report_set = Array.from(new Set(report));
    let attackeders = [];
    let attackers = [];
    
    for (let i = 0; i < report_set.length; i++) {
        let reporters = report_set[i].split(' ')

        attackers.push(reporters[1])
        
    }
        const checked = {};
        attackers.forEach((x) => {
            checked[x] = (checked[x] || 0) + 1;
        });

        for (let j = 0; j < id_list.length; j++) {
            for (let i = 0; i < report_set.length; i++) {
                if (checked[id_list[j]] >= k && report_set[i].split(' ')[1] == id_list[j]) {
                    attackeders.push(report_set[i].split(' ')[0])
                }
            }
        }

        const semiResult = {};
        attackeders.forEach((x) => { 
          semiResult[x] = (semiResult[x] || 0)+1; 
        });

    for (let j = 0; j < id_list.length; j++) {
        if (semiResult[id_list[j]] == undefined) {
            result.push(0)
        } else {
            result.push(semiResult[id_list[j]])
        }
    }
    return result;
}








function solution(id_list, report, k) {
    let result = [];
    let report_set = Array.from(new Set(report));
    let attackeders = [];
    let attackers = [];
    
    let temp = [];
    
    for (let i = 0; i < report_set.length; i++) {
        let reporters = report_set[i].split(' ')
        temp.push(reporters);
        attackers.push(reporters[1])
        
    }
        const checked = {};
        attackers.forEach((x) => {
            checked[x] = (checked[x] || 0) + 1;
        });

        for (let j = 0; j < id_list.length; j++) {
            for (let i = 0; i < report_set.length; i++) {
                if (checked[id_list[j]] >= k && temp[i][1] == id_list[j]) {
                    attackeders.push(temp[i][0])
                }
            }
        }

        const semiResult = {};
        attackeders.forEach((x) => { 
          semiResult[x] = (semiResult[x] || 0)+1; 
        });

    for (let j = 0; j < id_list.length; j++) {
        if (semiResult[id_list[j]] == undefined) {
            result.push(0)
        } else {
            result.push(semiResult[id_list[j]])
        }
    }
    return result;
}