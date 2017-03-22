export default function user (state={user:'',loginStyle:''},action) {
    if (action.type === 'LOGIN_SUCCES') {
      return action.payload
    }else{
      return state
    }
}
