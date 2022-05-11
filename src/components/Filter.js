import React, { useEffect } from 'react'

const Filter = (props) => {
  useEffect(() => {
    props.populateAction()
  }, [])

  const cities = () => {
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

  const bedrooms = () => {
    if (props.globalState.populateFormsData.bedrooms !== undefined) {
      var { bedrooms } = props.globalState.populateFormsData

      return bedrooms.map((item) => {
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
          onChange={(event) => props.onChange(event)}
        >
          <option value='All'>All Cities</option>
          {cities()}
        </select>

        <select
          name='homeType'
          className='filters homeType'
          onChange={(event) => props.onChange(event)}
        >
          <option value='All'>All Home Types</option>
          {homeTypes()}
        </select>
        <label htmlFor='bedrooms'></label>
        <select
          name='bedrooms'
          className='filters bedrooms'
          onChange={(event) => props.onChange(event)}
        >
          <option value='0'>All Bedrooms</option>
          {bedrooms()}
        </select>
        <div className='filters price'>
          <span className='title price'>Price</span>
          <label htmlFor='min_price'>Min.</label>
          <input
            type='text'
            name='min_price'
            className='min-price'
            onChange={(event) => props.onChange(event)}
            value={props.globalState.min_price}
          />

          <label htmlFor='max_price'>Min.</label>
          <input
            type='text'
            name='max_price'
            className='max-price'
            onChange={(event) => props.onChange(event)}
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
            onChange={(event) => props.onChange(event)}
            value={props.globalState.min_floor_space}
          />
          <label htmlFor='max_floor_space'>Max.</label>
          <input
            type='text'
            name='max_floor_space'
            className='max-floor-space'
            onChange={(event) => props.onChange(event)}
            value={props.globalState.max_floor_space}
          />
        </div>

        <div className='filters extras'>
          <span className='title'>Extras</span>

          <label htmlFor='elevator'>
            <span>Elevator</span>
            <input
              type='checkbox'
              value='elevator'
              name='elevator'
              onChange={(event) => props.onChange(event)}
            />
          </label>
          <hr />
          <label htmlFor='swimming_pool'>
            <span>Swimming Pool</span>
            <input
              type='checkbox'
              value='swimming-pool'
              name='swimming_pool'
              onChange={(event) => props.onChange(event)}
            />
          </label>
          <hr />
          <label htmlFor='basement'>
            <span>Basement</span>
            <input
              type='checkbox'
              value='basement'
              name='basement'
              onChange={(event) => props.onChange(event)}
            />
          </label>
          <hr />
          <label htmlFor='gym'>
            <span>Gym</span>
            <input
              type='checkbox'
              value='gym'
              name='gym'
              onChange={(event) => props.onChange(event)}
            />
          </label>
          <hr />
          <label htmlFor='storage'>
            <span>Storage</span>
            <input
              type='checkbox'
              value='storage'
              name='storage'
              onChange={(event) => props.onChange(event)}
            />
          </label>
          <hr />
          <label htmlFor='parking'>
            <span>Parking</span>
            <input
              type='checkbox'
              value='parking'
              name='parking'
              onChange={(event) => props.onChange(event)}
            />
          </label>
          <hr />
        </div>
      </div>
    </section>
  )
}

export default Filter
