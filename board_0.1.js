class Cell{
	constructor(){
		this.locationByLetter = null;
		this.locationByNumb = [];
		this.occupied = false;
        this.clicked = false;
	}
}

class ShipDitel{
	constructor(name,size){
		this.name = name;
		this.size = size;
		this.location =[];
	}
}

const board = buildBoard("board");
const shipType = [["Destroyer",2/*size*/],["Submarine",3],["Cruiser",3,],
                  ["Battleship",4,],["Aircraft Carrier",5]];

var stateGame ={
	setting:true,
	gameIsStart:false
	};
var shipStorage={
		shipsArr:setShip(),
		selectedShip:undefined
};
var theZone = {
	 selectedCell :[],
	 east:[],
	 west:[],
	 north:[],
	 south:[],
	 grayCellsArr:[]
	};
function buildBoard(string){
			let board=new Array(10);
			let alph="@";
			for(i=0;i<10;i++){
			    let digi=1;
			    alph=String.fromCharCode(alph.charCodeAt(0) + 1);
				board[i]=new Array(10);
				for(j=0;j<10;j++){
					board[i][j]=new Cell;
                    if(string==="board"){
                        board[i][j].locationByLetter=alph+digi;
       				    board[i][j].locationByNumb = [i,j];
                    }
                    if(string==="comBoard"){
                        board[i][j].locationByLetter=(alph+digi).toLowerCase();
                        board[i][j].locationByNumb = [i,j];
                    }
       				digi++;
				}
			}
return board;
}

function setShip(){   //setting to a ship  his name and size .
		 let shipsArr =new Array(4);            
		 for(i=0;i<5;i++){
		 	   shipsArr[i] = new ShipDitel(shipType[i][0],shipType[i][1]);
		}
		return shipsArr;
}

function selectShip(ship){

	for(let i = 0;i<shipStorage.shipsArr.length;i++){
		if(ship === shipStorage.shipsArr[i].name){
			shipStorage.selectedShip = shipStorage.shipsArr[i];
			
		}
	}
}

function  onSelectedCell(cell){
	if(stateGame.setting) checkTheZone(cell,shipStorage,board);
    
}    
    
function checkTheZone(cell,storage,board){  
    console.log(storage);
	let count = 0;
   let range=(function getRange(){
        let range=[];
       

                range[0]=0;
                range[1]=9;

            return range;
        })();
    if(cell.locationByNumb[1] + (storage.selectedShip.size - 1) <= range[1]) {
        console.log(cell);
                                                         //checking the eastern side. 
     	for(let i=1; i<storage.selectedShip.size; i++){

 			if(board[cell.locationByNumb[0]][cell.locationByNumb[1]+i].occupied === false){
 				count++;
 			}
     	}

     	if(count === storage.selectedShip.size-1){
     		count = 0;

     		for(let i = 1; i < storage.selectedShip.size; i++){

     			theZone.east.push(board[cell.locationByNumb[0]][cell.locationByNumb[1]+ i].locationByNumb);
     		}
     	    theZone.selectedCell = cell.locationByNumb;
     	}
        else{count=0;}
    }

   if(cell.locationByNumb[1] - (storage.selectedShip.size-1) >=range[0]) {
                                                         //checking the western side. 
        console.log(cell);
     	for(let i=1; i<storage.selectedShip.size; i++){

 			if(board[cell.locationByNumb[0]][cell.locationByNumb[1]- i].occupied === false){
 				count++;
 			}
     	}

     	if(count === storage.selectedShip.size-1){
     		count = 0;

     		for(let i = 1; i < storage.selectedShip.size; i++){

     			theZone.west.push(board[cell.locationByNumb[0]][cell.locationByNumb[1]- i].locationByNumb);
     		}
     	    theZone.selectedCell = cell.locationByNumb;
     	}
        else{count=0;}
    }

    if(cell.locationByNumb[0]-(storage.selectedShip.size-1) >=range[0]){                       //north side
        console.log(cell);
     	for(let i=1;i<storage.selectedShip.size;i++){
     		if(board[cell.locationByNumb[0]-i][cell.locationByNumb[1]].occupied === false){
     			count++
     		}
     	}

     	if(count === storage.selectedShip.size-1){
     		count = 0;

     		for(let i = 1; i < storage.selectedShip.size; i++){

     			theZone.north.push(board[cell.locationByNumb[0]-i][cell.locationByNumb[1]].locationByNumb);
     		}
     	    theZone.selectedCell = cell.locationByNumb;
     	}
        else{count=0;}
    }

        if(cell.locationByNumb[0]+(storage.selectedShip.size-1) <= range[1] ){                        //south side
            console.log(cell);
     	for(let i=1;i<storage.selectedShip.size;i++){
     		if(board[cell.locationByNumb[0]+i][cell.locationByNumb[1]].occupied === false){
     			count++
     		}
     	}

     	if(count === storage.selectedShip.size-1){
     		count = 0;

     		for(let i = 1; i < storage.selectedShip.size; i++){

     			theZone.south.push(board[cell.locationByNumb[0]+i][cell.locationByNumb[1]].locationByNumb);
     		}
     	    theZone.selectedCell = cell.locationByNumb;
     	}
        else{count=0;}
    }

}

function selectTheZone(zone){
    console.log(zone);
    for(let i=0;i<theZone.grayCellsArr.length;i++){
            let currentCell=document.getElementById(board[theZone.grayCellsArr[i][0]][theZone.grayCellsArr[i][1]].locationByLetter);
            currentCell.removeAttribute("onmouseover");
            currentCell.removeAttribute("onmouseout");
            currentCell.removeAttribute("onclick");

    }

   
   for(let i=0;i<theZone.grayCellsArr.length;i++){
                 document.getElementById(board[theZone.grayCellsArr[i][0]][theZone.grayCellsArr[i][1]].locationByLetter).style.backgroundColor="";
   }
   for(let i=0;i<zone.length;i++){
            document.getElementById(board[zone[i][0]][zone[i][1]].locationByLetter).style.backgroundColor="green";
            if(zone===theZone.east){
                    if(i===0){
                        document.getElementById(board[zone[i][0]][zone[i][1]-1].locationByLetter).style.border="white solid 1px";
                        document.getElementById(board[zone[i][0]][zone[i][1]-1].locationByLetter).style.borderTopLeftRadius="20px";
                        document.getElementById(board[zone[i][0]][zone[i][1]-1].locationByLetter).style.borderBottomLeftRadius="20px";
                    }
                    if(i===zone.length-1){
                        document.getElementById(board[zone[i][0]][zone[i][1]].locationByLetter).style.borderTopRightRadius="20px";
                        document.getElementById(board[zone[i][0]][zone[i][1]].locationByLetter).style.borderBottomRightRadius="20px";
                    }
                }

            if(zone===theZone.west){
                    if(i===0){
                        document.getElementById(board[zone[i][0]][zone[i][1]+1].locationByLetter).style.border="white solid 1px";
                        document.getElementById(board[zone[i][0]][zone[i][1]+1].locationByLetter).style.borderTopRightRadius="20px";
                        document.getElementById(board[zone[i][0]][zone[i][1]+1].locationByLetter).style.borderBottomRightRadius="20px";
                    }
                    if(i===zone.length-1){
                        document.getElementById(board[zone[i][0]][zone[i][1]].locationByLetter).style.borderTopLeftRadius="20px";
                        document.getElementById(board[zone[i][0]][zone[i][1]].locationByLetter).style.borderBottomLeftRadius="20px";
                    }
                }
            if(zone===theZone.north){
                    if(i===0){
                        document.getElementById(board[zone[i][0]+1][zone[i][1]].locationByLetter).style.border="white solid 1px";
                        document.getElementById(board[zone[i][0]+1][zone[i][1]].locationByLetter).style.borderBottomLeftRadius="20px";
                        document.getElementById(board[zone[i][0]+1][zone[i][1]].locationByLetter).style.borderBottomRightRadius="20px";
                    }
                    if(i===zone.length-1){
                        document.getElementById(board[zone[i][0]][zone[i][1]].locationByLetter).style.borderTopRightRadius="20px";
                        document.getElementById(board[zone[i][0]][zone[i][1]].locationByLetter).style.borderTopLeftRadius="20px";
                    }
                }
            if(zone===theZone.south){
                    if(i===0){
                        document.getElementById(board[zone[i][0]-1][zone[i][1]].locationByLetter).style.border="white solid 1px";
                        document.getElementById(board[zone[i][0]-1][zone[i][1]].locationByLetter).style.borderTopLeftRadius="20px";
                        document.getElementById(board[zone[i][0]-1][zone[i][1]].locationByLetter).style.borderTopRightRadius="20px";
                    }
                    if(i===zone.length-1){
                        document.getElementById(board[zone[i][0]][zone[i][1]].locationByLetter).style.borderBottomRightRadius="20px";
                        document.getElementById(board[zone[i][0]][zone[i][1]].locationByLetter).style.borderBottomLeftRadius="20px";
                    }
                }
            
            document.getElementById(board[zone[i][0]][zone[i][1]].locationByLetter).style.border="white solid 1px";

   }

       
      
    board[theZone.selectedCell[0]][theZone.selectedCell[1]].occupied=true;
    for(let i=0;i<zone.length;i++){
        board[zone[i][0]][zone[i][1]].occupied=true;
    }
    for(let i=0;i<shipStorage.shipsArr.length;i++){
        if(shipStorage.selectedShip.name===shipStorage.shipsArr[i].name){
           
            shipStorage_shipsArr_length--;

            document.getElementById(shipStorage.selectedShip.name).remove();
            shipStorage.shipsArr[i].location=zone;
            shipStorage.shipsArr[i].location.unshift(theZone.selectedCell);
           
            if(shipStorage_shipsArr_length===0){
                stateGame.gameIsStart=true;
                stateGame.setting=false;
                remove_And_Set_BoardsAttribute(true);
               /* let body=document.getElementById("body");
                let script=document.createElement("script");
                script.setAttribute("src","game.js");
                script.setAttribute("type","text/javascript");
                body.appendChild(script);*/
               document.getElementById("shipStorage").remove();
               document.getElementById("shipsTable").remove();
               let marginTop=0;
               let interval=setInterval(function(){ 
                    marginTop+=1;
                   document.getElementById("board").style.marginLeft=33+marginTop+"%";
                    if(marginTop===20){
                        clearInterval(interval);
                        //document.getElementById("board").style.top="-55%";
                        let body=document.getElementById("body");
                        let script=document.createElement("script");
                        script.setAttribute("src","game.js");
                        script.setAttribute("type","text/javascript");
                        body.appendChild(script);
                    }
               },40);

            }

        }

    }

    theZone.grayCellsArr=[];
    shipStorage.selectedShip=[];
    theZone.selectedCell=[];
    theZone.north=[];
    theZone.west=[];
    theZone.east=[];
    theZone.south=[];
    if(stateGame.setting){
        for(let i=0;i<10;i++){
            for(let j=0;j<10;j++){
             if(board[i][j].occupied===false){
             document.getElementById(board[i][j].locationByLetter).setAttribute("onmouseover","changeColor(this)");
             document.getElementById(board[i][j].locationByLetter).setAttribute("onmouseout","returnOriginColor(this)");
             document.getElementById(board[i][j].locationByLetter).setAttribute("onclick","findTheCell(this.id)");
                }
            }   
        }
    }
}
