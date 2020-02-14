import React from 'react';

const Backcard = (props) => {
    const details = !props.name[props.number]? '':props.name[props.number]
    return (
        
        <div className={"card-back"}>  
            <h4 className={'back-name'}>{!details? 'hi': props.capital(details.name)}</h4>
            <img className={'poke-pic2'} src={!details? 'loading...':`http://www.pokestadium.com/sprites/xy/${details.name}.gif`}></img>
            <h4 className={'back-num'}>{!props?'loading':'#' + (props.number+1)}</h4>
    <h4 className={'moves'}> <h2>Moves</h2> <li className={'move-list'}>{props.capital(!details.moves? 'loading':details.moves[0].move.name)}</li> <li className={'move-list2'}>{props.capital(!details.name? '':details.name==='ditto'? '':details.moves[1].move.name)}</li> </h4>        
    <h4 className={'types'} className={'type-list'}><h2 className={'type-head'}>Types</h2> {!details? 'hi': details.types.map((type)=> {return <li className={'list-items'}>{props.capital(type.type.name)}</li>})}</h4>
        </div>
       
    )
}

export default Backcard;
