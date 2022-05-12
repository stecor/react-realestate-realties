import React, { Component } from 'react'
import Header from './components/Header'
import Filter from './components/Filter'
import Listings from './components/Listings'
import listingsData from './data/ListingsData'

class App extends Component {
  constructor() {
    super()
    this.state = {
      listingsData,
      city: 'All',
      homeType: 'All',
      bedrooms: '0',
      // price
      min_price: 0,
      max_price: 1000000,
      // floor
      min_floor_space: 0,
      max_floor_space: 50000,
      // extras
      elevator: false,
      finished_basement: false,
      gym: false,
      swimming_pool: false,
      filterData: listingsData,
      populateFormsData: '',
      sortby: 'price-asc',
      view: 'box',
      search: '',
    }

    this.change = this.change.bind(this)
    this.filterData = this.filterData.bind(this)
    this.populateForms = this.populateForms.bind(this)
    this.changeView = this.changeView.bind(this)
  }

  componentWillMount() {
    var listingsData = this.state.listingsData.sort((a, b) => {
      return a.price - b.price
    })

    this.setState({
      listingsData,
    })
  }

  change(event) {
    var name = event.target.name
    var value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value
    console.log(name)
    console.log(value)
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.filterData()
      }
    )
  }

  changeView(viewName) {
    this.setState({
      view: viewName,
    })
  }

  filterData() {
    var newData = this.state.listingsData.filter((item) => {
      return (
        item.price >= this.state.min_price &&
        item.price <= this.state.max_price &&
        item.floorSpace >= this.state.min_floor_space &&
        item.floorSpace <= this.state.max_floor_space &&
        item.rooms >= this.state.bedrooms
      )
    })
    console.log(this.state.city)
    if (this.state.city !== 'All') {
      newData = newData.filter((item) => {
        return item.city === this.state.city
      })
    }

    if (this.state.homeType !== 'All') {
      newData = newData.filter((item) => {
        return item.homeType === this.state.homeType
      })
    }

    if (this.state.sortby === 'price-asc') {
      newData = newData.sort((a, b) => {
        return a.price - b.price
      })
    }

    if (this.state.sortby === 'price-dsc') {
      newData = newData.sort((a, b) => {
        return b.price - a.price
      })
    }

    if (this.state.search !== '') {
      newData = newData.filter((item) => {
        var city = item.city.toLowerCase()
        var searchText = this.state.search.toLowerCase()
        var n = city.match(searchText)

        if (n != null) {
          return true
        } else {
          return false
        }
      })
    }

    this.setState({
      filterData: newData,
    })
  }

  populateForms() {
    // city
    var cities = this.state.listingsData.map((item) => {
      return item.city
    })
    //Set Constructor - remove duplicate elements from the object.
    cities = new Set(cities)
    //Spread operator - turn object into array
    cities = [...cities]
    //Sort function - sorts the elements as strings in alphabetical and ascending
    cities = cities.sort()

    //homeType
    var homeTypes = this.state.listingsData.map((item) => {
      return item.homeType
    })
    homeTypes = new Set(homeTypes)
    homeTypes = [...homeTypes]

    homeTypes = homeTypes.sort()

    //bedrooms
    var bedrooms = this.state.listingsData.map((item) => {
      return item.rooms
    })
    bedrooms = new Set(bedrooms)
    bedrooms = [...bedrooms]

    bedrooms = bedrooms.sort()

    this.setState(
      {
        populateFormsData: {
          homeTypes,
          bedrooms,
          cities,
        },
      },
      () => {
        console.log(this.state)
      }
    )
  }

  render() {
    return (
      <div>
        <Header />
        <section id='content-area'>
          <Filter
            change={(e) => this.change(e)}
            populateAction={this.populateForms}
            globalState={this.state}
          />
          <Listings
            listingsData={this.state.filterData}
            change={(e) => this.change(e)}
            globalState={this.state}
            changeView={this.changeView}
          />
        </section>
      </div>
    )
  }
}

export default App
