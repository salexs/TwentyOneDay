export default function user (state='',action) {
    if (action.type === 'LOGIN_SUCCES') {
      return action.payload
    }else{
      return state
    }
}
