import React from 'react'
import Header from './components/Header'
import Filter from './components/Filter'
import Listings from './components/Listings'
import listingsData from './data/ListingsData'

import { useState, useEffect } from 'react'

const App = () => {
  const [state, setState] = useState({
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
  })

  useEffect(() => {
    const listingsData = state.filterData.sort((a, b) => {
      return a.price - b.price
    })

    setState({
      ...state,
      listingsData,
    })

    populateForms()
  }, [])

  const change = (event) => {
    let name = event.target.name
    let value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value

    console.log('name=' + [name])
    console.log('value=' + value)
    console.log(event.target.type)
    name = name.replaceAll(`"`, `'`)
    value = value.replaceAll(`"`, `'`)
    setState({ ...state, [name]: value }, filterData())
  }

  const changeView = (viewName) => {
    setState({
      ...state,
      view: viewName,
    })
  }

  const populateForms = () => {
    // city
    var cities = state.listingsData.map((item) => {
      return item.city
    })
    //Set Constructor - remove duplicate elements from the object.
    cities = new Set(cities)

    //Spread operator - turn object into array
    cities = [...cities]

    //Sort function - sorts the elements as strings in alphabetical and ascending
    cities = cities.sort()

    //homeType
    var homeTypes = state.listingsData.map((item) => {
      return item.homeType
    })
    homeTypes = new Set(homeTypes)
    homeTypes = [...homeTypes]

    homeTypes = homeTypes.sort()

    //bedrooms
    var bedrooms = state.listingsData.map((item) => {
      return item.rooms
    })
    bedrooms = new Set(bedrooms)
    bedrooms = [...bedrooms]

    bedrooms = bedrooms.sort()

    const populateFormsData = {
      homeTypes,
      bedrooms,
      cities,
    }

    setState({
      ...state,
      populateFormsData: populateFormsData,
    })
  }

  const filterData = () => {
    console.log('name=' + state.city)

    let newData = state.listingsData.filter((item) => {
      return (
        item.price >= state.min_price &&
        item.price <= state.max_price &&
        item.floorSpace >= state.min_floor_space &&
        item.floorSpace <= state.max_floor_space &&
        item.rooms >= state.bedrooms
      )
    })

    if (state.city !== 'All') {
      newData = newData.filter((item) => {
        return item.city === state.city
      })
    }

    if (state.homeType !== 'All') {
      newData = newData.filter((item) => {
        return item.homeType === state.homeType
      })
    }

    if (state.sortby === 'price-asc') {
      newData = newData.sort((a, b) => {
        return a.price - b.price
      })
    }

    if (state.sortby === 'price-dsc') {
      newData = newData.sort((a, b) => {
        return b.price - a.price
      })
    }

    if (state.search === '') {
      newData = newData.filter((item) => {
        let city = item.city.toLowerCase()
        let searchText = state.search.toLowerCase()
        let n = city.match(searchText)

        if (n != null) {
          return true
        } else {
          return false
        }
      })
    }
    console.log(newData)

    const { newfilterData } = newData
    setState({
      ...state,
      filterData: newfilterData,
    })
  }

  return (
    <div>
      <Header />
      <section id='content-area'>
        <Filter
          onChange={change}
          populateAction={populateForms}
          globalState={state}
        />
        <div>
          <Listings
            listingsData={state.filterData}
            onChange={change}
            globalState={state}
            changeView={changeView}
          />
        </div>
      </section>
    </div>
  )
}

export default App
