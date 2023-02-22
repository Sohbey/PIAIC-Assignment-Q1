// NAME : Sohaib Durrani
// ROLL NO : PIAIC57039

function car_info(mani:string,model:string,...arg:string[])
{
    let carObj:{
        manufacture:string,
        mdl :string,
    } = 
    {
        manufacture:mani,
        mdl:model
    }
    for(let i=0; i<arg.length/2; i++)
    {
        if(arg.length%2!=0)
        {
            break
        }
        carObj[arg[i]] = arg[i+1]
    }
    return carObj
}
let obj = car_info('honda','civic 2018','owner','Durrani')
console.log(obj)