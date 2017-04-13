export default function priming(state={list:[],active:false},action) {
  if (action.type === 'CHANGE_WORD') {
    return {list:action.data,active:true}
  }
  if (action.type === 'CHOISE_WORD') {
    return {...state,choise:action.word,active:false};
  }
   else {
    return state
  }
}
