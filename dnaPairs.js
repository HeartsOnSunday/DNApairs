
function pairElement(str) {
  var newSequence = str.split("");
  console.log(newSequence);
  var newArray = [];
 // var pairs = [];
 // var firstChar = newSequence[0];
  
  for (var i = 0; i < newSequence.length; i++)
  if (newSequence[i] === "G") {
   //  console.log("[G, C]");
    newArray.push(["G", "C"]);
  } else if (newSequence[i] === "C") {
  //   console.log("[C, G]");
    newArray.push(["C", "G"]);
  } else if (newSequence[i] === "T") {
  //   console.log("[T, A]");
    newArray.push(["T", "A"]);
  } else if (newSequence[i] === "A") {
   // console.log("[A, T]");
    newArray.push(["A", "T"]);
  }
  //console.log("OMG");
 // console.log(newArray);
  return newArray;
  
}

pairElement("GCG");
