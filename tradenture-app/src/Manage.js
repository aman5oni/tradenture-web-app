import React from 'react';
import "./Manage.css"
import Header from "./Assets/Components/Header/Header"
import Content from './Assets/Components/Content/Content';
import Footer from './Assets/Components/Footer/Footer';
export default function componentName() {
  return (
    <div className="manageStyle">
        <Header className="headerMain"/>
        <Content className="contentMain"/>
        <Footer className = "footerMain"/>
    </div>
  );
}
