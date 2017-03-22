export default function avatar (state='http://meridianwealthllc.com/wp-content/uploads/2016/01/meridianbiophotosblank-480x384.jpg',action) {
    if (action.type === 'SUCCES_AVATAR') {
      return action.photoSmall
    }else{
      return state
    }
}
