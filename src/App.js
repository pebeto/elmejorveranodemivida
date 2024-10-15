import {
    Col,
    Row,
    Container,
} from 'react-bootstrap';
import React from 'react';
import {
    Route,
    Routes,
    HashRouter,
} from 'react-router-dom';

import Main from './pages/Main';
import Merch from './pages/merch/Merch';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Presskit from './pages/presskit/Presskit';

import './app.css';

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <Container>
                    <Row className="justify-content-md-center header">
                        <Col lg={10}>
                            <Header />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col lg={10}>
                            <Routes>
                                <Route path="/" element={<Main />}></Route>
                                <Route path="merch" element={<Merch />}></Route>
                                <Route path="presskit" element={<Presskit />}></Route>
                                <Route path="contact" element={<Contact />}></Route>
                            </Routes>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center footer">
                        <Col lg={10}>
                            <Footer />
                        </Col>
                    </Row>
                </Container>
            </HashRouter>
        );
    }
}

export default App;
