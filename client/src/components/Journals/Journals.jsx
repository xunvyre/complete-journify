import {React, useState} from 'react';
import newJ from '../../assets/images/journify-new-journal.png';
import placeholder from '../../assets/images/placeholder-image.jpg';
import {dJournals} from '../../assets/dummyData';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import './Journals.css'

// import required modules
import { Navigation } from "swiper";

const Journals = () =>
{
    //set useStates to activate single journal views
    return (
        <section id="journals">
            <Swiper
                navigation={true}
                modules={[Navigation]}
                slidesPerView='auto'
                spaceBetween={30}
            >
                <SwiperSlide>
                    <a href="#upload">
                        <div class="journal card bg-light width18">
                            <img class="card-img-top img-preview" src={newJ} alt="A stylized pencil writing on a textured white background."/>
                            <div class="card-body">
                                <h2 class="card-title">A new journey...</h2>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>

                {dJournals.filter(journal => journal.userId === 1).map((journal, i) =>
                (
                    <SwiperSlide key={i.id}>
                        <a href={`journals/${journal.id}`}>
                            <div class="journal card bg-light width18">
                                <img class="card-img-top img-preview" src={placeholder} alt=""/>
                                <div class="card-body">
                                    <h2 class="card-title">{journal.title}</h2>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Journals;