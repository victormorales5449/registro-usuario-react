import React from 'react';
import './css/global.css';
import Form from './component/form.jsx';
import Table from './component/table.jsx';

class App extends React.Component {

  render(){
    return (
      <>
        <Form />
        <Table />
      </>
    );
  }
}

export default App;

