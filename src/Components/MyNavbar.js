import React from 'react'
import { Container, Form, Navbar } from 'react-bootstrap'
import '../Css/Card.css'

const MyNavbar = ({ searchMovie }) => {
    const onSearch = (word) => {
        // passing word search from user to search searchMovie function
        searchMovie(word)
    }

    return (
        <Navbar className='NavDesign' style={{ color: 'red' }}>
            <Container fluid >
                <Navbar.Brand href="">
                    <img
                        src="https://www.shutterstock.com/image-vector/film-strip-cinema-abstract-logo-260nw-304508495.jpg"
                        height="40"
                        alt="My Logo"
                        className="d-inline-block align-top rounded-circle"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Container className='NavStyle'>
                        {/* <Nav
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" className='mx-2'>Home</Nav.Link>
                            <Nav.Link href="#action2" className='mx-2'>Link</Nav.Link>
                            <Nav.Link href="#" className='mx-2'>
                                Link
                            </Nav.Link>
                        </Nav> */}
                    </Container>
                    <Form className="d-flex w-100" >
                        <Form.Control
                            type="search"
                            placeholder="بحث"
                            className="me-2 flex-grow-1"
                            aria-label="Search"
                            onChange={(e) => {
                                onSearch(e.target.value)
                            }}
                        />
                        {/* <Button>Search</Button> */}
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar
