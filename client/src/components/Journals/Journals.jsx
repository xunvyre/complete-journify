import {React, useState, useEffect, useContext} from 'react';
import newJ from '../../assets/images/journify-new-journal.png';
//import placeholder from '../../assets/images/placeholder-image.jpg';
//import {dJournals} from '../../assets/dummyData';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import './Journals.css'

// import required modules
import { Navigation } from "swiper";

const Journals = () =>
{
    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [journals, setJournals] = useState([]);
    useEffect(() =>
    {
        const fetchJournals = async () =>
        {
            const res = await axios.get(`journals/${user._id}`);
            setJournals(res.data.sort((p1, p2) =>
            {
                return new Date(p2.createdAt) - new Date(p1.createdAt);
            }
            ));
        };
        fetchJournals();
    }, []);

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

                {journals.map((journal, i) =>
                (
                    <SwiperSlide key={i.id}>
                        <a href={`journals/${journal._id}`}>
                            <div class="journal card bg-light width18">
                                <img class="card-img-top img-preview" src={journal.img || PF + "/placeholder-image.jpg"} alt=""/>
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