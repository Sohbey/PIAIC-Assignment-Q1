// NAME : Sohaib Durrani
// ROLL NO : PIAIC57039

let colors : Array<string> = ['red','yellow','green']
let alien_color : string = colors[Math.ceil((Math.random()*3)-1)]
// console.log(colors[Math.ceil((Math.random()*3)-1)])
if(alien_color == 'green')
{
    console.log('player earned 5 points')
}
if(alien_color != 'green')
{
    console.log('')
}