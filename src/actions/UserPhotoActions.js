export function loadAvatar() {
  return function (dispatch) {
    dispatch({type:"AVATAR_REQUEST"})
    getMainPhoto(dispatch);
  }
}

function getMainPhoto(dispatch) {
    VK.Api.call('photos.getAll', {extended:1, count: 1},(r) => { // eslint-disable-line no-undef
      try {
        let photoSmall = r.response[1].src_small;
        dispatch({type:'SUCCES_AVATAR',photoSmall})
      } catch (e) {
        dispatch({type:'EROR_AVATAR'})
      }
    })
}
