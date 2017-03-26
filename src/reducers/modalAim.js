export default function modalAim (state = '', action) {
  if (action.type === 'OPEN_AIM_CREATE') {
    return 'openAimCreate';
  }
  if (action.type === 'OPEN_HABBIT_CREATE') {
    return 'openHabbitCreate';
  }
  if (action.type === 'ADD_AIM'){
    return 'close';
  }
  if (action.type === 'ADD_HABIT'){
    return 'close';
  }
  if (action.type === 'RETURN_STATUS') {
    return '';
  }
  else
   {
    return state;
  }
}
