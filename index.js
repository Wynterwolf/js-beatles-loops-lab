// add solution here

function theBeatlesPlay(musicians, instruments) {
  let emptyArray = [];
    function forLoop() {
      for (var i = 0; i < musicians.length; i++){
        emptyArray.push(`${musicians[0]} plays ${instruments[0]}`);
    }
    return emptyArray[0];
    }}

// I'd honestly try something like this - it's tough to tell 
// without running the tests. ^_^ 

// What kind of function is this?
const theBeatlesPlay = (musicians, instruments) => {
  const emptyArray = [];
  
  // Why are we using the length of musicians?
  for (i = 0; i < musicians.length i++;) {
    emptyArray.push(`${muscicians[i]} plays ${instruments[i]});
  }
  
  // WHy is the placement of this return important?
  return emptyArray;
}


function johnLennonFacts(factsArray) {
  while (factsArray > 0){
    return `${factsArray}!!!`; 
}}

//function iLoveTheBeatles(int) {}
