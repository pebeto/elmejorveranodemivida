import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './pages/Main';
import Dates from './pages/dates/Dates';
import Merch from './pages/merch/Merch';
import Presskit from './pages/presskit/Presskit';
import Contact from './pages/contact/Contact';
import './app.css';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Container>
          <Row className="header-row">
            <Col>
              <Header />
            </Col>
          </Row>
          <Row className="body-row">
            <Col>
              <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="dates" element={<Dates />}></Route>
                <Route path="merch" element={<Merch />}></Route>
                <Route path="presskit" element={<Presskit />}></Route>
                <Route path="contact" element={<Contact />}></Route>
              </Routes>
            </Col>
          </Row>
          <Row className="footer-row">
            <Col>
              <Footer />
            </Col>
          </Row>
        </Container>
      </HashRouter>
    );
  }
}

export default App;
