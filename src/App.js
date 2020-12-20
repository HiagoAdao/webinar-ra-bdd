import { BrowserRouter, Switch, Route } from 'react-router-dom'
import config from './config/constants'
import GlobalStyle from './theme/globalStyle'
import Home from './views/Home'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route 
            path={config.PAGES.Home}
            component={Home}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
