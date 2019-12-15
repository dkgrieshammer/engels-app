import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

class MainNavigation extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            pages:[]
        }
    }
    
    componentDidMount() {
        return fetch('http://engels-site/wp-json/wp/v2/menu')
            .then((response) => response.json())
            .then((responseJson) => {
                // Update state here
                console.log("menu")
                const pageLinks = Object.values(responseJson)
                this.setState({pages : pageLinks})
                // const childItems = responseJson.filter(el => el.menu_item_parent != 0 )
                // console.log(childItems)
                // const parentItems = responseJson.filter(el => childItems.some(element => element.menu_item_parent == el.ID))
                // console.log(parentItems)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    getLinkFromUrl(url) {
        const urlArray = url.split('/').reverse()
        const link = urlArray[1] != "" ? urlArray[1] : urlArray[0]
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
                            const childElements = pageLink.wpse_children ? Object.values(pageLink.wpse_children) : null
                            console.log(childElements)
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