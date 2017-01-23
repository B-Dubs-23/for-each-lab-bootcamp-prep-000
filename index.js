var iterativeLog = function(array){
  array.forEach(function(index, element){
    console.log(`${element}: ${index}`)
  });
}

function iterate(callback){
  var array = [0,2,4,6,8];
  array.forEach(callback);
  return array
}

function doToArray(array, callback){
  array.forEach(callback);
}
