import React from 'react';
//require('../src/styles/main.less');
window.$ = require('jquery');
// require('../src/shared/extendJquery')(window.$);
window.$.DEBUG = true;

import KlineEditorDemo from './KlineEditorDemo'

let Main = React.createClass({
  render(){
    return <div className='main'>
      <KlineEditorDemo />
    </div>;
  }
});



React.render(<Main />, document.getElementById('app'));

// React.render(<div><h1>webpack</h1><KSModal showModal={true}><p>aaa</p></KSModal></div>, document.getElementById('app'));