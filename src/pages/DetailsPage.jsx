/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
/* eslint-disable */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { FiArrowRightCircle } from 'react-icons/fi';
import { BsBookmarkCheckFill } from 'react-icons/bs';
import { BiLeftArrow } from 'react-icons/bi';
import Carousel from 'react-multi-carousel';
import { createUser } from '../redux/User/User';
import 'react-multi-carousel/lib/styles.css';

const DetailsPage = () => {
  const { data, status } = useSelector((state) => state.MostRecent);
  const dispatch = useDispatch();

  let { name } = useParams();
  const hotel = data.filter((hotel) => hotel.id === parseInt(name, 10));
  console.log(status);
  name = name.replace(/_/g, ' ');

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="App">
      <div className="title-container">
        <h2>
          { hotel[0].name.toUpperCase() }
        </h2>
      </div>

      <div className="details-container">
        <div className="hotel-images">
          <Carousel
            ssr
            itemClass="image-item"
            responsive={responsive}
            autoPlaySpeed={1000}
            keyBoardControl
            customTransition="all .5"
            transitionDuration={500}
          >
            <div>
              <img
                src={hotel[0].image[0]}
                alt="hotel"
                className="details-img"
              />
            </div>
            <div>
              <img
                src={hotel[0].image[1]}
                alt="hotel"
                className="details-img"
              />
            </div>
            <div>
              <img
                src={hotel[0].image[2]}
                alt="hotel"
                className="details-img"
              />
            </div>
          </Carousel>
        </div>
        <div className="hotel-details">
          <p className="text-xl">📌 {hotel[0].address}</p>
          <div className="odd">
            <p>Price</p>
            <div className="views">
              <p>$ {hotel[0].cost}</p>
            </div>
          </div>
          <div className="even">
            <h3>Description</h3>
            <div className="views">
              <p>🔖</p>
            </div>
          </div>
          <p className="text-xl">
            { hotel[0].description }
          </p>
          <Link to={`/reserve/${hotel[0].id}`}>
            <button type="button" className="button-details" label="Reserve">
              <BsBookmarkCheckFill />
              Reserve
              {' '}
              <FiArrowRightCircle />
            </button>
          </Link>
        </div>
      </div>
      <div className="return-btn">
        <Link to="/">
          <button
            type="button"
            className="button-return"
            label="Reserve"
            onClick={() => dispatch(createUser())}
          >
            <BiLeftArrow />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DetailsPage;
