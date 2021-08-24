import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper'
import 'swiper/swiper-bundle.css'
import { useDispatch } from 'react-redux'
import { setInputTitle } from '../../../redux/inputCreation/inputCreationAction'

SwiperCore.use([Navigation, Pagination, Controller, Thumbs])

export const Carousel = ({items, title, closeModal}) => {
    
    const slides = []
    const dispatch = useDispatch()
    const handleSelect = (title) => {
        dispatch(setInputTitle(title))
        closeModal()
    }

    for (let i = 0; i < items.length; i++) {
        slides.push(
          <SwiperSlide onClick={e => {handleSelect(items[i])}} className='swiper__label' key={`slide-${i}`} tag="li">
            {items[i]}
          </SwiperSlide>
        )
    }

    return <>

        <h5 className='swiper__title'>{title}</h5>
       <Swiper
       className='swiper__labels'
       id="main"
        tag="section"
        wrapperTag="ul"
        spaceBetween={15}
        slidesPerView="auto"
        loop="true"
       >{slides}</Swiper>
    </>
}
