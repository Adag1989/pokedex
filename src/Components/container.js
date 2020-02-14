import React, {Component} from 'react';
import Frontcard from './frontCard';
import Backcard from './backCard';

class Cardcontainer extends Component {
    state= {
        pokemon: [],
        cardBack: []
    }
    
    async componentDidMount() {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=200')
        const json = await response.json();
        
        const pokemon = json.results;
        console.log(json.results)
        this.setState({  pokemon: pokemon });
      
        Promise.all(pokemon.map(({ url }) => fetch(url).then(res => res.json())))
        .then(cardBack => this.setState({ cardBack: cardBack }))}

      handleClick = (e) => {
          !e.currentTarget.style.transform? e.currentTarget.style.transform = 'rotateY(180deg)' : e.currentTarget.style.transform = ''
      }

      capitalizeName = (name) => {
          return (
              name.charAt(0).toUpperCase() + name.slice(1)
              
          )
      }
    
      render() {
       console.log(this.state)
        return (
            this.state.pokemon.map((poke, index)=>{
                return (
                   
                    <div onClick={this.handleClick} 
                        className={"card-container"} 
                        key={index}
                        >                  
                        <Frontcard capital={this.capitalizeName} name={this.state.pokemon[index].name}/>
                        <Backcard capital={this.capitalizeName} number={index} name={this.state.cardBack} />                      
                    </div>
                    
      
                )
            })
        )
    }
 }

    export default Cardcontainer;