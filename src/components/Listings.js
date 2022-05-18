import React from 'react'
import LoopListings from './LoopListings'

const Listings = (props) => {
  const globalState = props.globalState
  const changeView = props.changeView
  const onChange = props.onChange

  return (
    <section id='listings'>
      {/* Search Area */}
      <section className='search-area'>
        <input
          type='text'
          name='search'
          onChange={onChange}
          placeholder='Search'
          onFocus={(e) => (e.target.placeholder = '')}
          onBlur={(e) => (e.target.placeholder = 'Search')}
        />
      </section>

      <section className='sortby-area'>
        <div className='results'>
          {globalState.filterData.length} results found
        </div>
        <div className='sort-options'>
          <div className='view'>
            <select name='sortby' className='sortby' onChange={onChange}>
              <option value='price-asc'>Lowest Price</option>
              <option value='price-dsc'>Highest Price</option>
            </select>
            <i
              className='fa fa-th-list'
              aria-hidden='true'
              onClick={() => changeView('long')}
              style={{ cursor: 'pointer' }}
            ></i>
            <i
              className='fa fa-th'
              aria-hidden='true'
              onClick={() => changeView('box')}
              style={{ cursor: 'pointer' }}
            ></i>
          </div>
        </div>
      </section>

      <section className='listings-results'>
        <div className='row'>
          <LoopListings globalState={globalState} />
        </div>
      </section>

      <section id='pagination'>
        <div className='row'>
          <ul className='pages'>
            <li>Prev</li>
            <li className='active'>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>next</li>
          </ul>
        </div>
      </section>
    </section>
  )
}

export default Listings
