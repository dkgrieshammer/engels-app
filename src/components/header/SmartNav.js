import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { Navbar } from './../../styles';

class MainNavigation extends React.Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            pages:[]
        }
    }
    
    componentDidMount() {
        return fetch('http://wordpress.engels-archiv.de/wp-json/wp/v2/menu')
            .then((response) => response.json())
            .then((responseJson) => {
                // Update state here
                // const pageLinks = Object.values(responseJson)
                const pageLinks = Object.values(responseJson)
                const sortedLinks = pageLinks.sort((a, b) => {
                    if(a.menu_order > b.menu_order) return 1
                    if(a.menu_order < b.menu_order) return -1
                    return 0
                })
                this.setState({pages : sortedLinks})
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            null
            // <Navbar bg="light" expand="lg">
            //     <Navbar.Brand as={Link} to="/home">Industriegeschichte Privat</Navbar.Brand>
            //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
            //     <Navbar.Collapse id="basic-navbar-nav">
            //         <Nav className="ml-auto">
            //             {this.state.pages.map(pageLink => {
            //                 const pageTitle = pageLink.title
            //                 const pageUrl = this.props.callback(pageLink.url)
            //                 const childElements = pageLink.wpse_children ? Object.values(pageLink.wpse_children) : null
            //                 if(childElements) {
            //                     return (
            //                         <NavDropdown key={pageLink.ID} alignRight title={pageLink.title} id="context-nav-dropdown">
            //                             {childElements.map(el => (<NavDropdown.Item key={el.ID} as={Link} to={this.props.callback(el.url)}>{el.title}</NavDropdown.Item>))}
            //                         </NavDropdown>
            //                     )
            //                 } else {
            //                 return <Nav.Link key={pageLink.ID} as={Link} to={pageUrl}>{pageTitle}</Nav.Link>
            //                 }
            //             }
            //             )}
            //         </Nav>
            //         {/* <Form inline>
            //             <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            //             <Button variant="outline-success">Search</Button>
            //         </Form> */}
            //     </Navbar.Collapse>
            // </Navbar>
        )
    }
}


export default MainNavigation;