import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import './styles/app.css'
import configureStore from './store/configureStore'

function generateTree() {
  let tree = {}
  return tree

}

const tree = generateTree();
export const store = configureStore(tree);

render(
  <Provider store={store}>
    <div className='app'>
      <App/>
    </div>
  </Provider>,
  document.getElementById('root')
)
