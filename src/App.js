import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { DataContext } from "./modules/Contexts"
import {Header} from 'Components/header/Header'
import Home from './modules/Home'
import Letters from './pages/Letters'
import WpPage from './pages/WpPage'
import Correspondences from './pages/Correspondences';
import Footer from 'Components/Footer/Footerbar/Footerbar';
import { SmartHeader } from 'Components/header/SmartHeader';
import MainNavigation from 'Components/header/SmartNav';

const wpUrl = 'https://chost20.zim.uni-wuppertal.de/wordpress/wp-json/wp/v2/pages/'
const siteUrl = 'https://chost20.zim.uni-wuppertal.de/wordpress'
// chost20.zim.uni-wuppertal.de
const apiUrl = 'https://chost20.zim.uni-wuppertal.de/api'

// const localWpUrl = 'http://wordpress.engels-archiv.de/wp-json/wp/v2/pages/'
// const localSiteUrl = 'http://wordpress.engels-archiv.de'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.siteUrl = siteUrl
    this.counter = 0
    this.state = {
      title: {},
      date: "",
      content: {},
      pages: [],
      letters: [],
      places: [],
      persons: []
    }
    
  }
  
  componentDidMount() {
    //should be called here
    this.getWpPages()
    this.getData()
  }

  getData() {
    console.log("Called by " + this.counter)
    const getPersons = fetch(apiUrl + '/api/v1/persons').then((response) => response.json())
    const getPlaces = fetch(apiUrl + '/api/v1/places').then((response) => response.json())
    const getLetters = fetch(apiUrl + '/api/v1/letters').then((response) => response.json())
    Promise.all([getPersons, getPlaces, getLetters])
    .then((responses) => {
      console.log("api response", responses)
      const persons = responses[0]
      const places = responses[1]
      const letters = responses[2]
      this.setState({ 
        persons: persons.data.person,
        places: places.data.place,
        letters: letters.data.letter
      })
      this.counter ++
      console.log("Called by " + this.counter)
      })
      .catch((error) => {
        console.error(error);
      })
  }

  // getAllPersons() {
  //   return fetch('http://api.engels-archiv.de/api/v1/persons')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       // Update state here
  //       const persons = responseJson
  //       this.setState({ persons: persons.data.person })
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }
  // getAllPlaces() {
  //   return fetch('http://api.engels-archiv.de/api/v1/places')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       // Update state here
  //       const places = responseJson
  //       this.setState({ places: places.data.place })
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  // getAllLetters() {
  //   return fetch('http://api.engels-archiv.de/api/v1/letters')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       // Update state here
  //       const letters = responseJson
  //       this.setState({ letters: letters.data.letter })
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  getWpPages() {
    console.log("Called by " + this.counter)
    return fetch(wpUrl)
    .then((response) => response.json())
    .then((responseJson) => {
      // Update state here
      const pages = responseJson
      // console.log("wp pages", pages)
      this.setState({ pages: pages })
        this.counter ++
        // console.log("Called by " + this.counter)
      })
      .catch((error) => {
        console.log("WP Pages Error:")
        console.error(error);
      });
  }

  getLinkFromUrl = (url) => {
    const link = url.split(this.siteUrl)[1] ? url.split(this.siteUrl)[1].slice(0, -1) : url
    return link
  }

  render() {
    return (
      <Router>
        <DataContext.Provider value={this.state}>
          <div className="App">
            {/* <Header pages={this.state.pages} siteUrl={this.siteUrl} callback={this.getLinkFromUrl} /> */}
            {/* <SmartHeader callback={this.getLinkFromUrl} /> */}
            <Header><MainNavigation callback={this.getLinkFromUrl}/></Header>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/correspondences">
                <Correspondences persons={this.state.persons}/>
              </Route>
              <Route path="/letters">
                <Letters letters={this.state.letters} />
              </Route>
              {this.state.pages.map((page, i) => {
                const pageID = page.id
                const pageUrl = this.getLinkFromUrl(page.link)
                return (
                  <Route key={pageID} path={pageUrl}>
                    <WpPage page={page} />
                  </Route>
                )
              }
              )}
            </Switch>
          </div>
        <Footer />
        </DataContext.Provider>
        </Router>
    )
  }

}

export default App;
