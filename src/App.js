import React from 'react'
import Header from './components/Header'
import Filter from './components/Filter'
import Listings from './components/Listings'
import listingsData from './data/ListingsData'
import { useState, useEffect } from 'react'

const populateForms = () => {}
const filterData = () => {}
const changeView = () => {}

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

  // useEffect(() => {
  //   setState(
  //     listingsData.sort((a, b) => {
  //       return a.price - b.price
  //     })
  //   )
  // }, [])

  const change = (e) => {
    const name = e.target.name
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value

    // setState(
    //   {
    //     [name]: value,
    //   },
    //   () => {
    //     console.log(this.state)
    //     this.filterData()
    //   }
    // )
  }

  return (
    <div>
      <Header />
      <section id='content-area'>
        {/* <Filter
          change={() => change()}
          populateAction={() => populateForms()}
          globalState={() => state()}
        /> */}
        <Listings
          listingsData={() => filterData()}
          // change={() => change()}
          // globalState={() => state()}
          // changeView={() => changeView()}
        />
      </section>
    </div>
  )
}

export default App
