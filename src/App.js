import React from 'react'
import food from './food';

const App = () => {
    const choice=(itmes)=>{
        const fruitId=Math.floor(Math.random()*itmes.length);
        return itmes[fruitId];
    };
const remove=(items,item)=>{
    for(let i=0;i<items.length;i++){
        if(items[i]===item){
            return[...items.slice(0,i),...items.slice(i+1)];
        }
    }
}
   
    // const remove=((items,item)=>{
    //     const newArray=[...items];
    //     if(items===item){
    //         items.slice(item,1);
    //     }
    //     return newArray;
    // })

            
        

    let fruit=choice(food);
    let remaining=remove(food,fruit);
    return (
        <div>
            <h1> I would like one {fruit}</h1>
    <h2> i am sorry ,we have {remaining.length}</h2>
            
        </div>
    )
}

export default App;
