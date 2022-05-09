import React, { forwardRef } from 'react'
import LoopListings from './LoopListings'

const Listings = forwardRef((props, ref) => {
  return (
    <section id='listings'>
      {/* Search Area */}
      <section className='search-area'>
        <input
          type='text'
          name='search'
          ref={ref}
          onChange={props.onChange}
          placeholder='Search'
          onFocus={(e) => (e.target.placeholder = '')}
          onBlur={(e) => (e.target.placeholder = 'Search')}
        />
      </section>

      <section className='sortby-area'>
        <div className='results'>{props.listingsData.length} results found</div>
        <div className='sort-options'>
          <select name='sortby' className='sortby' onChange={props.onChange}>
            <option value='price-asc'>Lowest Price</option>
            <option value='price-dsc'>Highest Price</option>
          </select>
          <div className='view'>
            <i
              className='fa fa-th-list'
              aria-hidden='true'
              // onClick={props.changeView(null, 'long')}
            ></i>
            <i
              className='fa fa-th'
              aria-hidden='true'
              // onClick={this.props.changeView.bind(null, 'box')}
            ></i>
          </div>
        </div>
      </section>

      <section className='listings-results'>
        <div className='row'>
          <LoopListings listings={props.listingsData} />
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
})

export default Listings
