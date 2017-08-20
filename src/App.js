
import React, { Component } from 'react';
import './App.css';
import {createStore} from 'redux';
import {PLAYERS} from './players';
import playerReducer from './reducer'
import {addAction,removeAction,increaseAction,decreaseAction} from './generate-actions';
import {Player} from './player'
//CREATE OUR STORE
let current = 0;
const initialState ={ players:[] };
export let store = new createStore(playerReducer,initialState);
store.dispatch(addAction("dddd1",0,0));
store.dispatch(addAction("dddd2",1,0));
store.dispatch(addAction("dddd3",2,0));

// store.dispatch({type:"ADD_PLAYER",name:"fffffffffd"});
console.log(store.getState().players);
//
//   class Player extends Component {
//     // onclick(index,val){
//     //   this.props.click(this.props.index,val=1);
//     // }
//     increase(index,delta){
//     store.dispatch(increaseAction(this.props.index,delta=1));
//     }
//     decrease(index,delta){
//     store.dispatch(decreaseAction(this.props.index,delta=1));
//     }
//     remove(index){
//     store.dispatch(removeAction(this.props.index));
//     }
//     render(){
//       return(
//           <div className="player" >
//             <div className="playerName">
//               <a className="removePlayer" onClick={this.remove.bind(this)}>✖</a>
//               <span>{this.props.player.id} {this.props.player.name} </span>
//             </div>
//             <div className="playerCounter">
//               <Counter score={this.props.player.score}
//                //click={this.onclick.bind(this)}
//                click_incr={this.increase.bind(this)}
//                click_decr={this.decrease.bind(this)}
//                />
//             </div>
//
//           </div>
//         )
//     }
//   }
// //OUR COUNTER
//
// class Counter extends Component{
//   render(){
//     return(
//       <div className="counter">
//         <button onClick={this.props.click_incr}>&#10133;</button>
//         <div>{this.props.score}</div>
//         <button onClick={this.props.click_decr}><span>&#10134;</span></button>
//       </div>
//     )
//   }
// }

//OUR APPLICATION
class App extends Component {
  constructor(){
    super();
    this.state = {players:PLAYERS};
    this.increase = this.increase.bind(this)
  }
  componentDidMount(){
  store.subscribe(()=>this.forceUpdate())
}
  increase(index,delta){
  store.dispatch(increaseAction(index,delta));
  }
  render() {
    const players = store.getState().players;
    let title = "This is scoreBoard";
    let Header = <div className="header"> {title}</div>;
    return (
      <div className="App">
          {Header}
          {players.map((item,i)=><Player
          //  click={this.increase}
            index={i} key={i}
            player={item} />)}
      </div>
    );
  }
}

export default App;
