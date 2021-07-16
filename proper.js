var divBoard = document.getElementById("board");
var table = document.createElement("table");
var counter = 0;


table.setAttribute("class","frame");
divBoard.appendChild(table);

for(i=0;i<10;i++){                  // create a table board.
	let row = table.insertRow(i);
	for(j=0;j<10;j++){
		row.insertCell(j);
	}
}


function remove_And_Set_BoardsAttribute(onlyRe){
	if(onlyRe){
			for(let i=0;i<10;i++){
							for(let j=0;j<10;j++){	
								document.getElementById(board[i][j].locationByLetter).removeAttribute("onmouseover");
								document.getElementById(board[i][j].locationByLetter).removeAttribute("onmouseout");
								document.getElementById(board[i][j].locationByLetter).removeAttribute("onclick");
							}
			}				
	}
	else{	for(let i=0;i<10;i++){
							for(let j=0;j<10;j++){	
								document.getElementById(board[i][j].locationByLetter).removeAttribute("onmouseover");
								document.getElementById(board[i][j].locationByLetter).removeAttribute("onmouseout");
								document.getElementById(board[i][j].locationByLetter).removeAttribute("onclick");
								for(k=0;k<theZone.grayCellsArr.length;k++){

								  	
								  	if(board[i][j].locationByNumb == theZone.grayCellsArr[k]){
								  		document.getElementById(board[i][j].locationByLetter).setAttribute("onmouseover","changeColor(this,this.id)");
										document.getElementById(board[i][j].locationByLetter).setAttribute("onmouseout","returnOriginColor(this,this.id)");
								  	}
								  	
								  }

							}
						}
	}

}

function changeColor(td,id){
	if(stateGame.setting)td.style.backgroundColor = "green";
    
	if(theZone.east.length!==0){
		for(let i=0;i<theZone.east.length;i++){
			if(id  === board[theZone.east[i][0]][theZone.east[i][1]].locationByLetter){
					for(let i=0;i<theZone.east.length;i++){
					
					document.getElementById(board[theZone.east[i][0]][theZone.east[i][1]].locationByLetter).style.backgroundColor="green";
					document.getElementById(board[theZone.east[i][0]][theZone.east[i][1]].locationByLetter).setAttribute("onclick","selectTheZone(theZone.east)");
				    }
				}
			}
	}

	if(theZone.west.length!==0){
		for(let i=0;i<theZone.west.length;i++){
			if(id  === board[theZone.west[i][0]][theZone.west[i][1]].locationByLetter){
					for(let i=0;i<theZone.west.length;i++){
					document.getElementById(board[theZone.west[i][0]][theZone.west[i][1]].locationByLetter).style.backgroundColor="green";
					document.getElementById(board[theZone.west[i][0]][theZone.west[i][1]].locationByLetter).setAttribute("onclick","selectTheZone(theZone.west)");
				    }
				}
			}
	}

	if(theZone.north.length!==0){
		for(let i=0;i<theZone.north.length;i++){
			if(id  === board[theZone.north[i][0]][theZone.north[i][1]].locationByLetter){
					for(let i=0;i<theZone.north.length;i++){
					document.getElementById(board[theZone.north[i][0]][theZone.north[i][1]].locationByLetter).style.backgroundColor="green";
					document.getElementById(board[theZone.north[i][0]][theZone.north[i][1]].locationByLetter).setAttribute("onclick","selectTheZone(theZone.north)");
				    }
				}
			}
	}
	if(theZone.south.length!==0){
		for(let i=0;i<theZone.south.length;i++){
			if(id  === board[theZone.south[i][0]][theZone.south[i][1]].locationByLetter){
					for(let i=0;i<theZone.south.length;i++){
					document.getElementById(board[theZone.south[i][0]][theZone.south[i][1]].locationByLetter).style.backgroundColor="green";
					document.getElementById(board[theZone.south[i][0]][theZone.south[i][1]].locationByLetter).setAttribute("onclick","selectTheZone(theZone.south)");
				    }
				}
			}
	}

}

function returnOriginColor(td,id){
	if(theZone.selectedCell == false){
	td.style.backgroundColor = "";
    }
    if(theZone.east.length!==0){
		for(let i=0;i<theZone.east.length;i++){
			if(id  === board[theZone.east[i][0]][theZone.east[i][1]].locationByLetter){
					for(let i=0;i<theZone.east.length;i++){
					document.getElementById(board[theZone.east[i][0]][theZone.east[i][1]].locationByLetter).style.backgroundColor="gray";
				    }
				}
			}
	}

	if(theZone.west.length!==0){
		for(let i=0;i<theZone.west.length;i++){
			if(id  === board[theZone.west[i][0]][theZone.west[i][1]].locationByLetter){
					for(let i=0;i<theZone.west.length;i++){
					document.getElementById(board[theZone.west[i][0]][theZone.west[i][1]].locationByLetter).style.backgroundColor="gray";
				    }
				}
			}
	}

	if(theZone.north.length!==0){
		for(let i=0;i<theZone.north.length;i++){
			if(id  === board[theZone.north[i][0]][theZone.north[i][1]].locationByLetter){
					for(let i=0;i<theZone.north.length;i++){
					document.getElementById(board[theZone.north[i][0]][theZone.north[i][1]].locationByLetter).style.backgroundColor="gray";
				    }
				}
			}
	}
	if(theZone.south.length!==0){
		for(let i=0;i<theZone.south.length;i++){
			if(id  === board[theZone.south[i][0]][theZone.south[i][1]].locationByLetter){
					for(let i=0;i<theZone.south.length;i++){
					document.getElementById(board[theZone.south[i][0]][theZone.south[i][1]].locationByLetter).style.backgroundColor="gray";
				    }
				}
			}
	}

}




function findTheCell(cell){
	if(shipStorage.selectedShip){
		for(let i=0;i<10;i++){
			for(let j=0;j<10;j++){
				if(board[i][j].locationByLetter === cell && board[i][j].occupied===false){
					onSelectedCell(board[i][j]);
					let clickedCell=document.getElementById(board[i][j].locationByLetter);
					clickedCell.style.color="green";

					if(theZone.east.length !== 0){
						for(let k = 0 ;k < theZone.east.length;k++){
							let x=board[i][theZone.east[k][1]].locationByLetter;
							//console.log(board[i][theZone.east[k][1]].locationByLetter);
							document.getElementById(x).style.backgroundColor = "gray";
				    	}
					}

					if(theZone.west.length!== 0){
						for(let k = 0 ;k < theZone.west.length;k++){
							let x=board[i][theZone.west[k][1]].locationByLetter;
							//console.log(board[i][theZone.west[k][1]].locationByLetter);
							document.getElementById(x).style.backgroundColor = "gray";
				    	}
					}

					if(theZone.north.length!==0){
						for(let k = 0 ;k < theZone.north.length;k++){
							let x=board[theZone.north[k][0]][j].locationByLetter;
							//console.log(board[theZone.north[k][0]][j].locationByLetter);
							document.getElementById(x).style.backgroundColor = "gray";
				    	}
					}

					if(theZone.south.length!==0){
						for(let k = 0 ;k < theZone.south.length;k++){
							let x=board[theZone.south[k][0]][j].locationByLetter;
							//console.log(board[theZone.south[k][0]][j].locationByLetter);
							document.getElementById(x).style.backgroundColor = "gray";
				    	}
					}	
					//let counter=0;
				}
			}
		}		

					if(theZone.west.length!==0){
						for(let i=0;i<theZone.west.length;i++){
						theZone.grayCellsArr.push(theZone.west[i]);
					    }
					}
					if(theZone.east.length!==0){
						for(let i=0;i<theZone.east.length;i++){
						theZone.grayCellsArr.push(theZone.east[i]);
					    }
					}
					if(theZone.north.length!==0){
						for(let i=0;i<theZone.north.length;i++){
						theZone.grayCellsArr.push(theZone.north[i]);
					    }
					}
					if(theZone.south.length!==0){
						for(let i=0;i<theZone.south.length;i++){
						theZone.grayCellsArr.push(theZone.south[i]);
					    }
					}
					if(theZone.grayCellsArr.length===0){
						return;

					}

					if(stateGame.setting)remove_And_Set_BoardsAttribute(false);
					if(!stateGame.setting) remove_And_Set_BoardsAttribute(true);


	}
}
//setting for each cell his attributes.
for(let i=0;i<10;i++){
	for(let j=0;j<10;j++){
       document.getElementsByTagName("td")[counter].setAttribute("id",board[i][j].locationByLetter);
       document.getElementsByTagName("td")[counter].setAttribute("class","cell");
       document.getElementsByTagName("td")[counter].setAttribute("onmouseover","changeColor(this,this.id)");
       document.getElementsByTagName("td")[counter].setAttribute("onmouseout","returnOriginColor(this,this.id)");
       document.getElementsByTagName("td")[counter].setAttribute("onclick","findTheCell(this.id)");

       //get rit off border's edges.
       if(i===0){
       	document.getElementsByTagName("td")[counter].style.borderTop="0px";
       	document.getElementsByTagName("td")[counter].style.height="10%";
       	if(j===0)
       	document.getElementsByTagName("td")[counter].style.borderTopLeftRadius="12px";
       }
       if(i===9){
       	document.getElementsByTagName("td")[counter].style.borderBottom="0px";
       	document.getElementsByTagName("td")[counter].style.height="10%";
       	if(j===9)
       	document.getElementsByTagName("td")[counter].style.borderBottomRightRadius="12px";
       if(j===0)
       		document.getElementsByTagName("td")[counter].style.borderBottomLeftRadius="12px";
       }
       if(j===9){
       		document.getElementsByTagName("td")[counter].style.borderRight="0px";
       		document.getElementsByTagName("td")[counter].style.width="9.4%";
       		if(i===0)
       		document.getElementsByTagName("td")[counter].style.borderTopRightRadius="12px";
       }
       if(j===0){
       		document.getElementsByTagName("td")[counter].style.borderLeft="0px";
       		document.getElementsByTagName("td")[counter].style.width="9.4%";
       		
       }
       counter++;
    }
}
counter=0;

let shipStorage_shipsArr_length=shipStorage.shipsArr.length
function changeColorItemAfterClick(){
	
	if(theZone.grayCellsArr.length===0){	
		for(let i=0;i<shipStorage_shipsArr_length;i++){
			if(document.getElementsByClassName('shipCell')[i].style.backgroundColor){
				document.getElementsByClassName('shipCell')[i].style.backgroundColor="";
			}
		}
	    document.getElementById(shipStorage.selectedShip.name).style.backgroundColor="green";
	}
}


for(let i=0;i<shipStorage.shipsArr.length;i++){
		document.getElementsByClassName('storageItem')[i].innerHTML = shipStorage.shipsArr[i].name;
		//document.getElementsByClassName('shipCell')[i].setAttribute.('onmouseover','changeColorItem()');
		document.getElementsByClassName('shipCell')[i].setAttribute("onclick","selectShip(this.id);changeColorItemAfterClick()");
}



