import React from 'react';
import './App.css';
import Content from './components/Content';
import Icon from './components/Icon';
import { T } from 'ramda';

const App: React.FC = () => (
  <div className="flickr">
    <div className="sideBar">
      <Icon name="close" pointer={true} data-test="Icon" className={'close'} onClick={T} />
    </div>
    <Content />
  </div>
);

export default App;
