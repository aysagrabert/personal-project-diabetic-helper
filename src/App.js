// import React from 'react';
// import {HashRouter} from 'react-router-dom';
// import {Provider} from 'react-redux'
// import store from './redux/store'
// import routes from './routes';
// import './App.css';

// function App() {
//   return (
//     <Provider store={store}>
//       <HashRouter>
//         <div className="App">
//           {routes}
//         </div>
//       </HashRouter>
//     </Provider>
//   );
// }

// export default App;


import React from 'react';
import routes from './routes';
import {HashRouter} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';

function App() {
  return (
    <HashRouter>
      <div className="App">
        
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
