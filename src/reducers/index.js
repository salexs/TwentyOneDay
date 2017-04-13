import { combineReducers } from 'redux';

import aims from './aims';
import habits from './habits';
import user from './user';
import avatar from './avatar';
import priming from './priming';

export default combineReducers({
  aims,
  habits,
  user,
  avatar,
  priming
});
