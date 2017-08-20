


const addAction=(name,id,score)=>({ type: "ADD_PLAYER",player:{name,id,score} });

const removeAction=(id)=>({ type: "REMOVE_PLAYER",id });

const increaseAction=(id,value)=>({ type: "INCREASE_COUNTER",id,value});

const decreaseAction=(id,value)=>({ type: "DECREASE_COUNTER",id,value});

export {addAction,removeAction,increaseAction,decreaseAction};
