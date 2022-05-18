import React from 'react'
import { Link } from 'react-router-dom'

const LoopListings = (props) => {
  const globalState = props.globalState

  if (globalState === undefined || globalState.length === 0) {
    return 'Sorry your filter did not match any listing'
  }

  return globalState.filterData.map((listing, index) => {
    var formatedPrice = listing.price
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')

    if (globalState.view === 'box') {
      //this is the box view
      return (
        <div className='col-md-3' key={index}>
          <div className='listing'>
            <div
              className='listing-img'
              style={{
                background: `url("${listing.image}") no-repeat center center`,
              }}
            >
              <span className='address'>{listing.address}</span>
              <div className='details'>
                <div className='col-md-3'>
                  <img className='user-img-box' src={listing.userImg} alt='' />
                </div>
                <div className='col-md-9'>
                  <div className='user-details'>
                    <span className='user-name'>{listing.user}</span>
                  </div>
                  <div className='listing-details'>
                    <div className='floor-space'>
                      <i className='fa fa-square-o'></i>
                      <span>{listing.floorSpace} ft&sup2;</span>
                    </div>
                    <div className='bedrooms'>
                      <i className='fa fa-bed'></i>
                      <span>{listing.rooms} bedr.</span>
                    </div>
                  </div>
                  <div className='view-btn'>
                    <Link
                      to={`/details/${listing.post_id}`}
                      key={listing.post_id}
                    >
                      Details
                    </Link>
                  </div>
                  <span className='post-date'>Posted: {listing.postDate}</span>
                </div>
              </div>
            </div>
            <div className='bottom-info'>
              <span className='price'>${formatedPrice}</span>
              <span className='location'>
                {' '}
                <i className='fa fa-map-marker'></i> {listing.city} ,{' '}
                {listing.state}
              </span>
            </div>
          </div>
        </div>
      )
    } else {
      // this is long view
      return (
        <div className='col-md-12 col-lg-6' key={index}>
          <div className='listing'>
            <div
              className='listing-img'
              style={{
                background: `url("${listing.image}") no-repeat center center`,
              }}
            >
              <span className='address'>{listing.address}</span>
              <div className='details'>
                <div className='col-md-3'>
                  <img className='user-img-long' src={listing.userImg} alt='' />
                </div>
                <div className='col-md-9'>
                  <div className='user-details'>
                    <span className='user-name'>{listing.user}</span>
                  </div>
                  <div className='listing-details'>
                    <div className='floor-space'>
                      <i className='fa fa-square-o'></i>
                      <span>{listing.floorSpace} ft&sup2;</span>
                    </div>
                    <div className='bedrooms'>
                      <i className='fa fa-bed'></i>
                      <span>{listing.rooms} bedr.</span>
                    </div>
                  </div>
                  <div className='view-btn'>
                    <Link
                      to={`/details/${listing.post_id}`}
                      key={listing.post_id}
                    >
                      Details
                    </Link>
                  </div>
                  <span className='post-date'>
                    Posted on: {listing.postDate}
                  </span>
                </div>
              </div>
            </div>
            <div className='bottom-info'>
              <span className='price'>${formatedPrice}</span>
              <span className='location'>
                {' '}
                <i className='fa fa-map-marker'></i> {listing.city} ,{' '}
                {listing.state}
              </span>
            </div>
          </div>
        </div>
      )
    }
  })
}

export default LoopListings
