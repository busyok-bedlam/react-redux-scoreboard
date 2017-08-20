import React,{Component} from 'react';
import {store} from './App';
import playerReducer from './reducer'
import {addAction,removeAction,increaseAction,decreaseAction} from './generate-actions';




export  class Player extends Component {
    // onclick(index,val){
    //   this.props.click(this.props.index,val=1);
    // }
    increase(index,delta){
    store.dispatch(increaseAction(this.props.index,delta=1));
    }
    decrease(index,delta){
    store.dispatch(decreaseAction(this.props.index,delta=1));
    }
    remove(index){
    store.dispatch(removeAction(this.props.index));
    }
    render(){
      return(
          <div className="player" >
            <div className="playerName">
              <a className="removePlayer" onClick={this.remove.bind(this)}>✖</a>
              <span>{this.props.player.id} {this.props.player.name} </span>
            </div>
            <div className="playerCounter">
              <Counter score={this.props.player.score}
               //click={this.onclick.bind(this)}
               click_incr={this.increase.bind(this)}
               click_decr={this.decrease.bind(this)}
               />
            </div>

          </div>
        )
    }
  }
//OUR COUNTER

class Counter extends Component{
  render(){
    return(
      <div className="counter">
        <button onClick={this.props.click_incr}>&#10133;</button>
        <div>{this.props.score}</div>
        <button onClick={this.props.click_decr}><span>&#10134;</span></button>
      </div>
    )
  }
}
