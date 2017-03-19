export default function avatar (state='',action) {
    if (action.type === 'SUCCES_AVATAR') {
      return action.photoSmall
    }else{
      return state
    }
}
