import React from 'react';
import './App.css';
import Content from './components/Content';
import Icon from './components/Icon';
import { T } from 'ramda';
import Modal from './components/Modal';

const App: React.FC = () => (
  <div className="flickr">
    <div className="sideBar">
      <Icon name="close" pointer={true} data-test="Icon" className={'close'} onClick={T} />
    </div>
    <Modal>
      <div>Modal test</div>
    </Modal>
    <Content />
  </div>
);

export default App;
