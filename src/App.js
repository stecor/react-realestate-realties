import React from 'react'
import Header from './Header'
import Filter from './Filter'
import Listings from './Listings'
import listingsData from './data/ListingsData'

const App = () => {
  return (
    <div>
      <Header />
      <section id='content-area'>
        <Filter
          change={this.change}
          populateAction={this.populateForms}
          globalState={this.state}
        />
        <Listings
          listingsData={this.state.filterData}
          change={this.change}
          globalState={this.state}
          changeView={this.changeView}
        />
      </section>
    </div>
  )
}

export default App
