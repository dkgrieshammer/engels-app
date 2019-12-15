import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainNavigation from './modules/Nav'
import Home from './modules/Home'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.siteUrl = 'http://engels-site'
    this.state = {
      title: {},
      date: "",
      content: {},
      pages: []
    }
  }

  componentDidMount() {
    return fetch('http://engels-site/wp-json/wp/v2/pages/')
      .then((response) => response.json())
      .then((responseJson) => {
        // Update state here
        const pages = responseJson
        console.log(responseJson)
        this.setState({ pages: pages })
        // const { title, date, content } =  responseJson[0];
        // this.setState({ title, date, content })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getLinkFromUrl(url) {
    // const link = url.split(this.siteURL)[1]
    const link = url.split(this.siteUrl)[1] ? url.split(this.siteUrl)[1].slice(0,-1) : url
    return link
}

  render() {
    return (
      <Router onChange={this.testFunc}>
        <div className="App">
          <MainNavigation pages={this.state.pages} siteUrl={this.siteUrl} />
          {/* Content will get some love later :) */}
          <Switch>

            <Route path="/home">
              <Home />
            </Route>
            <Route path="/letters">
              <Letters />
            </Route>
            {this.state.pages.map((page, i) => {
              const pageID = page.id
              const pageUrl = this.getLinkFromUrl(page.link)
              // const parent = page.parent;
              // path={`${parent ? '/'+parent :''}/${page.slug}`}
              // path={`/${page.slug}`}
              // console.log(pageUrl)
              return (
                // <Route key={pageID} path={`${parent ? '/'+parent :''}/${page.slug}`}>
                <Route key={pageID} path={pageUrl}>
                  <div>{page.slug}</div>
                  <div dangerouslySetInnerHTML={{ __html: page.content.rendered }}></div>
                </Route>
              )
            }
            )}
            {/* <Route path="/:pageName">
              <div></div>
            </Route> */}
          </Switch>
        </div>
      </Router>
    )
  }

}

function Letters() {
  return (
    <h2>Letters</h2>
  );
}

export default App;
