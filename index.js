// add solution here

function theBeatlesPlay(musicians, instruments) {
  let emptyArray = [];
    function forLoop() {
      for (var i = 0; i < musicians.length; i++){
        emptyArray.push(`${musicians} plays ${instruments}`);
    }
    return emptyArray;
    }}


function johnLennonFacts(factsArray) {
  while (factsArray > 0){
    console.log(--factsArray);
  }
return `${factsArray}!!!`; 
}

//function iLoveTheBeatles(int) {}