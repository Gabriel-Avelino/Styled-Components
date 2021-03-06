import React from 'react';
import Header from './components/Header';
import Content from './components/Content'
import Footer from './components/Footer';
import Global from './themes/global';

function App() {
  return (
   <React.Fragment>
     <Global/>
     <Header/>
     <Content/>
     <Footer/>
   </React.Fragment>
  );
}

export default App;
