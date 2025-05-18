const teas=['leamon tea', 'ginger tea','black tea','Oolang tea','masala tea','Herbal tea']
// add chamomile tea
teas.push('chamomile tea')
//remove Oolang tea
const idx=teas.indexOf('Oolang tea')
if(idx!=-1) teas.splice(idx,1)

console.log(teas);

//filter tea which are not caffinated

const caffTeas=teas.filter((tea)=> tea!='Herbal tea')
console.log(caffTeas);

const test=['🐔','🥚']
//murgi pehe ai mere me toh.
console.log(test.sort());

const uppercase=[]
for(let i=0;i<teas.length;i++){
    uppercase.push(teas[i].toUpperCase())
}
console.log(uppercase);



