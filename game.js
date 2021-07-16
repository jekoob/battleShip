	let body = document.getElementById("body");
	let boardII=document.createElement("div");
	boardII.setAttribute("id","boardII");
	body.insertAdjacentElement('afterbegin', boardII);
	let counter1=0;
	let interval =setInterval(function(){
		counter1+=0.1;
		document.getElementById("boardII").style.opacity=counter1;
		if(counter1>1)clearInterval(interval);
	},60);
	const comBoard=buildBoard("comBoard");
	let table1 = document.createElement("table");
	table1.setAttribute("class","frame");
	boardII.appendChild(table1);

	for(i=0;i<10;i++){                  // create a table board.
		let row = table1.insertRow(i);
		for(j=0;j<10;j++){
			row.insertCell(j);
		}
	}
	let computerShipStorage={ //dont really has access to chektheZone();
		shipsArr:setShip(),
		selectedShip:undefined

	};

function setComShip(shipLength,selectedZone){
	let theShip=[];
		console.log(shipLength,selectedZone);
		for(let i=0;i<shipLength;i++){
			if(computerShipStorage.selectedShip.name === computerShipStorage.shipsArr[i].name){
				computerShipStorage.shipsArr[i].location.push(theZone.selectedCell);
				for(let j=0;j<selectedZone.length;j++){
				computerShipStorage.shipsArr[i].location.push(selectedZone[j]);
				}
				theShip=computerShipStorage.shipsArr[i].location;
				console.log(theShip);
			}
		}
		for(let i=0;i<theShip.length;i++){
			let idElement = comBoard[theShip[i][0]][theShip[i][1]];
			idElement.occupied=true;
			document.getElementById(idElement.locationByLetter).style.backgroundColor="white";
		}
	
}
function setComputerShips(counter){
	
	let randomCell=Math.floor(Math.random()*100);
	let selectedCell=document.getElementsByTagName("td")[randomCell].id;
	computerShipStorage.selectedShip=computerShipStorage.shipsArr[counter];
	console.log(computerShipStorage.selectedShip);

		for(i=0;i<10;i++){                  
			for(j=0;j<10;j++){
				if(comBoard[i][j].locationByLetter===selectedCell&&!comBoard[i][j].occupied){
					checkTheZone(comBoard[i][j],computerShipStorage,comBoard);
				//shipStorage_shipsArr_length++;

				}
			}
		}


	//let direction = Math.ceil(Math.random()*4);
	//console.log(direction);
	
	let fit=false;
	while(!fit){
		let direction = Math.ceil(Math.random()*4);
		console.log(direction);
		if(direction===1 && theZone.east.length!==0 ){
			setComShip(computerShipStorage.selectedShip.size,theZone.west);
			fit=true;
			
			console.log(computerShipStorage.selectedShip) ;

		}


		if(direction===2 && theZone.west.length!==0 ){console.log(computerShipStorage.selectedShip) ;
			setComShip(computerShipStorage.selectedShip.size,theZone.west);
			fit=true;
			
		}

		if(direction===3 && theZone.south.length!==0 ){console.log(computerShipStorage.selectedShip) ;
			setComShip(computerShipStorage.selectedShip.size,theZone.south);
			fit=true;
			
		}

		if(direction===4 && theZone.north.length!==0 ){console.log(computerShipStorage.selectedShip) 
			setComShip(computerShipStorage.selectedShip.size,theZone.north);
			fit=true;
			
		}
		else{
			let randomCell=Math.floor(Math.random()*100);
			if(randomCell%2===0){
				randomCell/=2;
			}
			else{randomCell/=1;}
			let selectedCell=document.getElementsByTagName("td")[randomCell].id;
			
			for(i=0;i<10;i++){                  
				for(j=0;j<10;j++){
					if(comBoard[i][j].locationByLetter===selectedCell&&comBoard[i][j].occupied===false){
						theZone.selectedCell=randomCell;
						theZone.west=[];
  		                theZone.east=[];
  		                theZone.north=[];
  		                theZone.south=[];

					   checkTheZone(comBoard[i][j],computerShipStorage,comBoard);
					}
				}	
			}
	    }
	}
}

setTimeout(function(){
	let counter=0;
for(let i=0;i<10;i++){
	for(let j=0;j<10;j++){
       document.getElementsByTagName("td")[counter].setAttribute("id",board[i][j].locationByLetter.toLowerCase());
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
  for(let i=4;i>=0;i--){
  		theZone.selectedCell=[];
  		theZone.west=[];
  		theZone.east=[];
  		theZone.north=[];
  		theZone.south=[];

  	computerShipStorage.selectedShip=[];
  	setComputerShips(i);
  }
  
},100);
//setComputerShips();