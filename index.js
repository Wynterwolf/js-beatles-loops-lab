// add solution here

function theBeatlesPlay(musicians, instruments) {
  let emptyArray = [];
      for (var i = 0; i < musicians.length; i++){
        emptyArray.push(musicians[i] + ' plays ' + instruments[i]);
    }
    return emptyArray;
    }
    
function johnLennonFacts(facts) {
  var results = [];
  var count = 0;
  while (count < facts.length) {
    results.push(facts[count] + "!!!");
    count++;
  }
  return results;
}

function iLoveTheBeatles(int) {
  var showLove = [];
  
  do {
    showLove.push("I love the Beatles!");
    int++;
  } while (int < 15);
  return showLove;
}