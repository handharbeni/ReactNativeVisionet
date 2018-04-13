function main() {
  test(search);
}

function search(data, searchText) {
  var jData = data;
  var jLabel = Object.keys(data);

  var rArrayData = [];
  for(var i=0;i<jLabel.length;i++){
    var jSubData = jData[jLabel[i]];
    for(var j=0;j<jSubData.length;j++){
      var m = jSubData[j].name.toLowerCase().includes(searchText.toLowerCase());
      var n = jLabel[i].toLowerCase().includes(searchText.toLowerCase());
      if(m || n){
        rArrayData.push({
          "id": jSubData[j].id,
          "name": jSubData[j].name,
          "floor": jSubData[j].floor,
          "location": jSubData[j].location,
          "category": jLabel[i]
        });
      }  
    }
  }
  return rArrayData;
}

main();