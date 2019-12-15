import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

class MainNavigation extends React.Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            siteUrl:props.siteUrl,
            pages:[]
        }
    }
    
    componentDidMount() {
        return fetch('http://engels-site/wp-json/wp/v2/menu')
            .then((response) => response.json())
            .then((responseJson) => {
                // Update state here
                const pageLinks = Object.values(responseJson)
                this.setState({pages : pageLinks})
            })
            .catch((error) => {
                console.error(error);
            });
    }

    getLinkFromUrl(url) {
        const link = url.split(this.props.siteUrl)[1] ? url.split(this.props.siteUrl)[1].slice(0,-1) : url
        return link
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand as={Link} to="/home">Industriegeschichte Privat</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/home">Start</Nav.Link>
                        <Nav.Link as={Link} to="/letters">Briefdokumente</Nav.Link>
                        <Nav.Link as={Link} to="/correspondence">Korrespondenzen</Nav.Link>
                        <NavDropdown title="Register" id="register-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/people">Personen</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/places">Orte</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/organizations">Organisationen</NavDropdown.Item>
                        </NavDropdown>
                        {this.state.pages.map(pageLink => {
                            const pageTitle = pageLink.title
                            const pageUrl = this.getLinkFromUrl(pageLink.url)
                            console.log(pageUrl)
                            const childElements = pageLink.wpse_children ? Object.values(pageLink.wpse_children) : null
                            if(childElements) {
                                return (
                                    <NavDropdown key={pageLink.ID} title={pageLink.title} id="context-nav-dropdown">
                                        {childElements.map(el => (<NavDropdown.Item key={el.ID} as={Link} to={this.getLinkFromUrl(el.url)}>{el.title}</NavDropdown.Item>))}
                                    </NavDropdown>
                                )
                            } else {
                            return <Nav.Link key={pageLink.ID} as={Link} to={pageUrl}>{pageTitle}</Nav.Link>
                            }
                        }
                        )}
                    </Nav>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Navbar>
        )
    }
}


export default MainNavigation;