
function pairElement(str) {
  var dnaMap = {C:"G", G:"C", A:"T", T:"A"};
  //var newSequence = str.split("");
 // console.log(newSequence);
  var newArray = [];
 // var pairs = [];
 // var firstChar = newSequence[0];
  
  console.log(newArray);

  
  for (var i = 0; i < str.length; i++)
  
    newArray.push([str[i], dnaMap[str[i]]]);
    return newArray;
  
}

pairElement("GCG");
