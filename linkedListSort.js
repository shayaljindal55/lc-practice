
  function sortEvents() {
    debugger
  const events = [
      {
        id: 8,
        next: 9
      },
      {
        id: 0,
        next: 8
      },
      {
        id: 4,
        next: 13
      },
      {
        id: 9,
        next: 4
      }
    ]
    debugger
    
let sortedList = [];
//check which next does not have matching id, that will be the root
for( let i =0; i<events.length ; i++) {
const result = events.filter(x => 
   (x.id!== events[i].id && x.next!== events[i].next) && x.next !== events[i].id) ;
if(result !== undefined) {
sortedList[0] = result;
return; 
}

}

for(let i=1; i< events.length; i++) {
const nextNode = events.find(x => sortedList[i].next === x.id); //O(n)
if(nextNode){
sortedList[i] = nextNode; // will add all other nodes
}
console.log(sortedList)
return sortedList;

}
debugger
sortEvents();





}


//   const events = [
//     {
//       id: 0,
//       next: 8
//     },
//     {
//       id: 8,
//       next: 9
//     },
//     {
//       id: 9,
//       next: 4
//     },
//     {
//       id: 4,
//       next: 13
//     }
//   ]



