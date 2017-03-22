export function handleLogin() {

  return function(dispatch) {

    dispatch({
      type: 'LOGIN_REQUEST'
    })

    VK.Auth.login((r) => { // eslint-disable-line no-undef
      console.log(r.session)
      if (r.session) {
        let user = r.session.user;
        var payload = {user:user,loginStyle:'_complited'}
        console.log(payload)
        dispatch({
          type: 'LOGIN_SUCCES',
          payload
        })
      } else {
        dispatch({
          type: 'LOGIN_FAIL',
          error: true,
          payload: new Error('Ошибка авторизации')
        })
      }
    },4); // запрос прав на доступ к photo
  }
}
