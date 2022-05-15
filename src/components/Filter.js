import React, { useEffect } from 'react'

const Filter = (props) => {
  useEffect(() => {
    props.populateAction()
  }, [])

  const cities = () => {
    //console.log('cities')
    console.log(props)
    if (props.globalState.populateFormsData.cities !== undefined) {
      let { cities } = props.globalState.populateFormsData

      return cities.map((item) => {
        return (
          <option name='select city' key={item} value={item}>
            {item}
          </option>
        )
      })
    }
  }

  const homeTypes = () => {
    if (props.globalState.populateFormsData.homeTypes !== undefined) {
      var { homeTypes } = props.globalState.populateFormsData

      return homeTypes.map((item) => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        )
      })
    }
  }

  const rooms = () => {
    if (props.globalState.populateFormsData.rooms !== undefined) {
      var { rooms } = props.globalState.populateFormsData

      return rooms.map((item) => {
        return (
          <option key={item} value={item}>
            {item}+ BR
          </option>
        )
      })
    }
  }

  return (
    <section id='filter'>
      <div className='inside'>
        <h4>Filter</h4>

        <select
          name='city'
          className='filters city'
          type='select'
          onChange={props.onChange}
        >
          <option value='All'>All Cities</option>

          {cities()}
        </select>

        <select
          name='homeType'
          className='filters homeType'
          onChange={props.onChange}
        >
          <option value='All'>All Home Types</option>
          {homeTypes()}
        </select>
        <label htmlFor='bedrooms'></label>
        <select
          name='rooms'
          className='filters bedrooms'
          onChange={props.onChange}
        >
          <option value='0'>All Bedrooms</option>
          {rooms()}
        </select>
        <div className='filters price'>
          <span className='title price'>Price</span>
          <label htmlFor='min_price'>Min.</label>
          <input
            type='text'
            name='min_price'
            className='min-price'
            onChange={props.onChange}
            value={props.globalState.min_price}
          />

          <label htmlFor='max_price'>Min.</label>
          <input
            type='text'
            name='max_price'
            className='max-price'
            onChange={props.onChange}
            value={props.globalState.max_price}
          />
        </div>

        <div className='filters floor-space'>
          <span className='title floor-space'>Floor Space</span>
          <label htmlFor='min_floor_space'>Min.</label>
          <input
            type='text'
            name='min_floor_space'
            className='min-floor-space'
            onChange={props.onChange}
            value={props.globalState.min_floor_space}
          />
          <label htmlFor='max_floor_space'>Max.</label>
          <input
            type='text'
            name='max_floor_space'
            className='max-floor-space'
            onChange={props.onChange}
            value={props.globalState.max_floor_space}
          />
        </div>

        <div className='filters extras'>
          <span className='title'>Extras</span>

          <label htmlFor='elevator'>
            <span>Elevator</span>
            <input
              type='checkbox'
              value={props.globalState.elevator}
              name='elevator'
              onChange={props.onChange}
            />
          </label>
          <hr />
          <label htmlFor='pool'>
            <span>Swimming Pool</span>
            <input
              type='checkbox'
              value={props.globalState.pool}
              name='pool'
              onChange={props.onChange}
            />
          </label>
          <hr />
          <label htmlFor='basement'>
            <span>Basement</span>
            <input
              type='checkbox'
              value={props.globalState.basement}
              name='basement'
              onChange={props.onChange}
            />
          </label>
          <hr />
          <label htmlFor='gym'>
            <span>Gym</span>
            <input
              type='checkbox'
              value={props.globalState.gym}
              name='gym'
              onChange={props.onChange}
            />
          </label>
          <hr />
          <label htmlFor='storage'>
            <span>Storage</span>
            <input
              type='checkbox'
              value={props.globalState.storage}
              name='storage'
              onChange={props.onChange}
            />
          </label>
          <hr />
          <label htmlFor='parking'>
            <span>Parking</span>
            <input
              type='checkbox'
              value={props.globalState.parking}
              name='parking'
              onChange={props.onChange}
            />
          </label>

          <hr />
        </div>
      </div>
    </section>
  )
}

export default Filter
