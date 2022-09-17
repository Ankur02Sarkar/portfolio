import './product-image-slider.scss'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'
import { useState } from 'react'

const ProductImagesSlider = props => {
    const [activeThumb, setActiveThumb] = useState()

    return (
        <section id="cocurricular">
            <h2>Co Curricular Activities</h2>
            <Swiper className="container cocurricular_container product-images-slider"
                loop={true}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation, Thumbs]}
                grabCursor={true}
                thumbs={{ swiper: activeThumb }}
            >
                {
                    props.images.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img src={item} alt="product images" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <Swiper
                onSwiper={setActiveThumb}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                modules={[Navigation, Thumbs]}
                className='product-images-slider-thumbs'
            >
                {
                    props.images.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="product-images-slider-thumbs-wrapper">
                                <img src={item} alt="product images" />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}

ProductImagesSlider.propTypes = {
    images: PropTypes.array.isRequired
}

export default ProductImagesSlider