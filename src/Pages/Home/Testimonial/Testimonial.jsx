import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";


const Testimonial = () => {

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('testimonial.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])

  return (
    <section >
      <SectionTitle

        headingTitle={"what our client says"}
        subHeadingTitle={"testimnila"}
      > </SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        {
          reviews.map(review => <SwiperSlide
            key={review._id}

          >

            <div className="my-16 mx-24 flex flex-col items-center">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <i className="fa-solid fa-star"></i>
              <p className="py-8">{review.details}</p>
              <h className="text-2xl text-orange-500">{review.name}</h>
            </div>
          </SwiperSlide>)
        }

      </Swiper>
    </section>
  );
};

export default Testimonial;