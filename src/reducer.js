const playerReducer = (state={},action)=>{
  switch(action.type){
    case "ADD_PLAYER": return {...state,players: [...state.players,action.player]};
    case "REMOVE_PLAYER":
    return {
      ...state,
      players:[
        ...state.players.slice(0,action.id),
        ...state.players.slice(action.id+1)
      ]
    };

    case "INCREASE_COUNTER": return {
      ...state,
      ...{
        players:[
          ...state.players.slice(0,action.id),
          {...state.players[action.id],
            ...{score: state.players[action.id].score+action.value}
          },
          ...state.players.slice(action.id+1)
        ]
       }
     };
     case "DECREASE_COUNTER": return {
       ...state,
       ...{
         players:[
           ...state.players.slice(0,action.id),
           {...state.players[action.id],
             ...{score: state.players[action.id].score-action.value}
           },
           ...state.players.slice(action.id+1)
         ]
        }
      };

    default: return state;
  }
}
export default playerReducer;
// score {players:[{name1,id1,score1},{name2,id2,score2}]}
