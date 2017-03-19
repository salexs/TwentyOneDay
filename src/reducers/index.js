import { combineReducers } from 'redux';

import aims from './aims';
import habits from './habits';
import showHabit from './showHabit';
import user from './user';
import avatar from './avatar';

export default combineReducers({
  aims,
  habits,
  showHabit,
  user,
  avatar
});
