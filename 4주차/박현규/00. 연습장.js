function solution(id_list, report, k) {
    let result = [];
    let reportSet = Array.from(new Set(report));
    let reportSetContainer = [];
    let attackeders = [];
    let attackers = [];
    
    for (let i = 0; i < reportSet.length; i++) {
        let reporters = reportSet[i].split(' ')
        reportSetContainer.push(reporters);
        attackers.push(reporters[1])
        
    }
        const checked = {};
        attackers.forEach((x) => {
            checked[x] = (checked[x] || 0) + 1;
        });

        for (let j = 0; j < id_list.length; j++) {
            for (let i = 0; i < reportSet.length; i++) {
                if (checked[id_list[j]] >= k && reportSetContainer[i][1] == id_list[j]) {
                    attackeders.push(reportSetContainer[i][0])
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