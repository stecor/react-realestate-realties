import React from 'react'
import Header from './components/Header'
import Filter from './components/Filter'
import Listings from './components/Listings'
import listingsData from './data/ListingsData'
import LoopListings from './components/LoopListings'
import { useState, useEffect, useRef } from 'react'

const App = () => {
  const [state, setState] = useState([
    {
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
    },
  ])

  const filterData = () => {
    let newData = state.listingsData.filter((item) => {
      return (
        item.price >= state.min_price &&
        item.price <= state.max_price &&
        item.floorSpace >= state.min_floor_space &&
        item.floorSpace <= state.max_floor_space &&
        item.rooms >= state.bedrooms
      )
    })

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

  const populateForms = () => {}

  const changeView = () => {}
  const inputRef = React.createRef()
  const handleChange = () => {
    const name = inputRef.current.name
    let value =
      inputRef.current.type === 'checkbox'
        ? inputRef.current.checked
        : inputRef.current.value

    setState({
      [name]: value,
    })

    filterData()
  }

  useEffect(() => {
    setState(
      listingsData.sort((a, b) => {
        return a.price - b.price
      })
    )
    //console.log(listingsData.length)
  }, [])

  return (
    <div>
      <Header />
      <section id='content-area'>
        {/* <Filter
          change={() => change()}
          populateAction={() => populateForms()}
          globalState={() => state()}
        /> */}
        <div>
          <Listings
            listingsData={listingsData}
            // listingsData={state.filterData}
            onChange={() => handleChange()}
            ref={inputRef}
            // globalState={() => state()}
            // changeView={() => changeView()}
          />
        </div>
      </section>
    </div>
  )
}

export default App
