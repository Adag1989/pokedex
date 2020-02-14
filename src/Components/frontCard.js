import React from 'react';
import pokeLogo from './Photos/pokeLogo.png';
import pokeBall from './Photos/pokeball.png';



const Frontcard = (props) => {
    const name = props.name;
    return (
     
        <div className={"card-front"}>
            <h4 className={'pokename'}>{props.capital(name)}</h4>
            <img className={'poke-pic'} src={`http://www.pokestadium.com/sprites/xy/${props.name}.gif`} alt={'pokesprite'}></img>
            <img className={'logo'} src={pokeLogo} alt={'pokelogo'}></img>
            <img className={'pokeball'} src={pokeBall} alt={'pokeball'}></img>
        </div>
        
        
    )
}

export default Frontcard;