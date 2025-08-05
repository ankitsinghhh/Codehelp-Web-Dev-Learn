import React, { useEffect, useState } from 'react'

import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Autoplay,FreeMode,Navigation, Pagination}  from 'swiper'
import ReactStars from "react-rating-stars-component"
import { apiConnector } from '../../services/apiconnector'
import { ratingsEndpoints } from '../../services/apis'
import { FaStar } from 'react-icons/fa'


const ReviewSlider = () => {

    const [reviews, setReviews] = useState([]);
    const truncateWords = 15;


    useEffect(() => {
        const fetchAllReviews = async() => {
            const {data} = await apiConnector("GET", ratingsEndpoints.REVIEWS_DETAILS_API)
            console.log("LOgging response in rating", data);

            if (data?.success) {
                setReviews(data?.allReviews || []);  // ✅ FIXED
            }
            

            console.log("Printing Reviews", reviews);

        }
        fetchAllReviews();
    }, []);


  return (
    <div className='text-white'>
        <div className='h-[190px] max-w-maxContent'>
            <Swiper
            slidesPerView={4}
            spaceBetween={24}
            loop={true}
            freeMode={true}
            autoplay={{
                delay: 2500,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className='w-full'
            >

{reviews.map((review, index) => (
          <SwiperSlide key={index} className="bg-white shadow-md p-4 rounded-md">
            <div className="flex items-center gap-3 mb-2">
              <img
                src={
                  review?.user?.image
                    ? review?.user?.image
                    : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                }
                alt="Profile Pic"
                className="h-9 w-9 object-cover rounded-full"
              />
              <div>
                <p className="font-semibold text-sm">
                  {review?.user?.firstName} {review?.user?.lastName}
                </p>
                <p className="text-xs text-gray-500">{review?.course?.courseName}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-2">{review?.review}</p>
            <div className="flex items-center gap-2">
              <p className="text-yellow-500 font-bold">{review?.rating?.toFixed(1)}</p>
              <ReactStars
                count={5}
                value={review?.rating}
                size={20}
                edit={false}
                activeColor="#ffd700"
                emptyIcon={<FaStar />}
                fullIcon={<FaStar />}
              />
            </div>
          </SwiperSlide>
        ))}
            </Swiper>
        </div>
    </div>
  )
}

export default ReviewSlider
