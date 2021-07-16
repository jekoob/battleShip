const locationCell=[];
var board = document.getElementById("board");
var table = document.createElement("table");
table.setAttribute("id","frame");
board.appendChild(table);
table = document.getElementById("frame");

function changeColor(td){
td.style.backgroundColor = "green";
}

function backColor(td){
	td.style.backgroundColor = "blue";
}

function setShip(id){
console.log(id)
}
(function placeLocation(){
	let alph = "@";
    let counter = 0;         //to find the right 'td' element in DOM.
    for(i=0;i<10;i++){      // creating the board.
	  	var row = table.insertRow(i);
		for(k=0;k<10;k++){
			row.insertCell(k);
			}
	}
	for(a=0;a<10;a++){   // creating id name for cells
	  let digi = 1;
      alph=String.fromCharCode(alph.charCodeAt(0) + 1);
      for(i=0;i<10;i++){
      		locationCell.push(alph+digi);
      		document.getElementsByTagName("td")[counter].setAttribute("id",locationCell[counter]); // to set every cell is "id" location.
      		document.getElementsByTagName("td")[counter].setAttribute("class","cell");
      		document.getElementsByTagName("td")[counter].setAttribute("onmouseover","changeColor(this)");
      		document.getElementsByTagName("td")[counter].setAttribute("onmouseout","backColor(this)");
      		document.getElementsByTagName("td")[counter].setAttribute("onclick","setShip(this.id)");
      		digi++;
      		counter++;
      }	

	}
})();


