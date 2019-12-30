// add solution here

function theBeatlesPlay(musicians, instruments) {
  let emptyArray = [];
    function forLoop() {
      for (var i = 0; i < musicians.length; i++){
        emptyArray.push(`${musicians[0]} plays ${instruments[0]}`);
    }
    return emptyArray[0];
    }}


    var newStrings = [];
    var i = 0;
    
    function johnLennonFacts(facts) {
      while (i < facts.length){
          newStrings.push(facts[i] + "!!!");
          i++;
      }
      return newStrings;
    }

//function iLoveTheBeatles(int) {}