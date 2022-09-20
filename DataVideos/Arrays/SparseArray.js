// Comparar os dados que eu tenho com os dados do sistema e vê a
// quantidade.Quanto que eu tenho de tal elemento?
// Results = [2,1,0]

function matching_strings(){

    let strings = ["ab","ab","abc"]
    let queries = ["ab","abc","bc"]

    let results = [];
    let count;

    for(let i = 0; i<queries.length; i++){
        count = 0;

        for(let j = 0; j<strings.length; j++){
            
            if(strings[j] == queries[i]) {
                count ++;
            }
        }

        results.push(count)
    }

    return results;
}

console.log(matching_strings())
