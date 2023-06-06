import React, { Component } from 'react';
import './App.css';
import ComingSoon from "./Components/react-coming-soon";

class App extends Component {
  render() {
    return (
      <ComingSoon title="TrekkingPole Coming Soon" image="https://react-coming-soon.maksv.me/default-image.jpeg" bgColor="#03a9f4" textColor="#fafafa" null />
    );
  }
}

export default App;
