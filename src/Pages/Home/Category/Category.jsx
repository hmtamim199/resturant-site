import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slider1 from '../../../assets/home/slide1.jpg';
import slider2 from '../../../assets/home/slide2.jpg';
import slider3 from '../../../assets/home/slide3.jpg';
import slider4 from '../../../assets/home/slide4.jpg';
import slider5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';


const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeadingTitle={'ORDER online'}
        headingTitle={'from 11am to 11pm'}
      ></SectionTitle>
      <Swiper

        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slider1} />
          <h3 className='text-4xl uppercase text-white -mt-16 text-center'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} />
          <h3 className='text-4xl uppercase text-white -mt-16 text-center'>Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} />
          <h3 className='text-4xl uppercase text-white -mt-16 text-center'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} />
          <h3 className='text-4xl uppercase text-white -mt-16 text-center'>Deserts</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} />
          <h3 className='text-4xl uppercase text-white -mt-16 text-center'>Salads</h3>
        </SwiperSlide>

      </Swiper>
    </section>
  );
};

export default Category;