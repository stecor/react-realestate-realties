import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Filter from './components/Filter'
import Listings from './components/Listings'
import listData from './data/ListingsData'

const App = () => {
  const initialData = {
    listingsData: listData,
    //filterData
    filterData: listData,
    populateFormsData: '',
    city: 'All',
    homeType: 'All',
    rooms: 'All',
    // price
    min_price: 0,
    max_price: 1000000,
    // floor
    min_floor_space: 0,
    max_floor_space: 50000,
    //extras
    elevator: false,
    basement: false,
    gym: false,
    pool: false,
    storage: false,
    parking: false,
    sortby: 'price-asc',
    view: 'box',
    search: '',
  }

  const [data, setData] = useState(initialData)

  useEffect(() => {
    filteringData()
  }, [
    data.city,
    data.homeType,
    data.rooms,
    data.price,
    data.elevator,
    data.basement,
    data.gym,
    data.pool,
    data.storage,
    data.parking,
    data.sortby,
    data.search,
    data.max_price,
    data.min_price,
    data.max_floor_space,
    data.min_floor_space,
  ])

  let change = (event) => {
    let name = event.target.name
    let value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value

    console.log('name=' + name)
    console.log('value=' + value)
    console.log(event.target.type)

    if (event.target.type === 'number') {
      console.log('number')
      value = Number(value)
    }

    setData({ ...data, [name]: value })
  }

  const changeView = (viewName) => {
    setData({ ...data, view: viewName })
  }

  const populateForms = () => {
    // city
    var cities = data.listingsData.map((item) => {
      return item.city
    })
    //Set Constructor - remove duplicate elements from the object.
    cities = new Set(cities)

    //Spread operator - turn object into array
    cities = [...cities]

    //Sort function - sorts the elements as strings in alphabetical and ascending
    cities = cities.sort()

    //homeType
    var homeTypes = data.listingsData.map((item) => {
      return item.homeType
    })
    homeTypes = new Set(homeTypes)
    homeTypes = [...homeTypes]

    homeTypes = homeTypes.sort()

    //bedrooms
    var rooms = data.listingsData.map((item) => {
      return item.rooms
    })
    rooms = new Set(rooms)
    rooms = [...rooms]

    rooms = rooms.sort()

    const populateFormsData = {
      homeTypes,
      rooms,
      cities,
    }

    setData({
      ...data,
      populateFormsData: populateFormsData,
    })
  }

  // FilteringData
  function filteringData() {
    let newData = data.listingsData.filter((item) => {
      return (
        item.price >= data.min_price &&
        item.price <= data.max_price &&
        item.floorSpace >= data.min_floor_space &&
        item.floorSpace <= data.max_floor_space
      )
    })

    if (data.city !== 'All') {
      newData = newData.filter((item) => {
        return item.city === data.city
      })
    }

    if (data.homeType !== 'All') {
      newData = newData.filter((item) => {
        return item.homeType === data.homeType
      })
    }

    if (data.rooms !== 'All') {
      newData = newData.filter((item) => {
        return item.rooms === data.rooms
      })
    }

    if (data.basement !== false) {
      newData = newData.filter((item) => {
        return item.basement === data.basement
      })
    }

    if (data.gym !== false) {
      newData = newData.filter((item) => {
        return item.gym === data.gym
      })
    }

    if (data.storage !== false) {
      newData = newData.filter((item) => {
        return item.storage === data.storage
      })
    }

    if (data.parking !== false) {
      newData = newData.filter((item) => {
        return item.parking === data.parking
      })
    }

    if (data.elevator !== false) {
      newData = newData.filter((item) => {
        return item.elevator === data.elevator
      })
    }

    if (data.pool !== false) {
      newData = newData.filter((item) => {
        return item.pool === data.pool
      })
    }

    if (data.sortby === 'price-asc') {
      newData = newData.sort((a, b) => {
        return a.price - b.price
      })
    }

    if (data.sortby === 'price-dsc') {
      newData = newData.sort((a, b) => {
        return b.price - a.price
      })
    }

    if (data.search !== '') {
      newData = newData.filter((item) => {
        let city = item.city.toLowerCase()
        let searchText = data.search.toLowerCase()
        let n = city.match(searchText)

        if (n != null) {
          return true
        } else {
          return false
        }
      })
    }

    setData((prevData) => ({ ...prevData, filterData: newData }))
  }

  return (
    <div>
      <Header />
      <section id='content-area'>
        <Filter
          onChange={change}
          populateAction={populateForms}
          globalState={data}
        />
        <div>
          <Listings
            onChange={change}
            globalState={data}
            changeView={changeView}
          />
        </div>
      </section>
    </div>
  )
}

export default App
