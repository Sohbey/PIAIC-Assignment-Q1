// NAME : Sohaib Durrani
// ROLL NO : PIAIC57039
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an 
// index in one of your programs to produce an index error. Make sure you correct the error before closing the program
let names : Array<string> = ['khan','jan','hello']
for(let i=0; i<names.length; i++)
{
    console.log(names[i])
}
try{
    names[4] = 5
}
catch(e)
{
    e.message()
}