import React from 'react'
import '../styles/home.css'
import {Container, Row , Col} from 'reactstrap';
import heroImg from '../../src/assets/images/hero-img01.jpg';
import heroImg01 from '../../src/assets/images/hero-img02.jpg';
import herovideo from '../../src/assets/images/hero-video.mp4';
import Subtitle from './../shared/Subtitle';    
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png'
import SearchBar from '../shared/SearchBar';
import ServiceList from "../services/ServiceList";
import FeaturedTourList from '../Components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../Components/image-gallery/MasonryImagesGallery';
import Testimonial from '../Components/Testimonial/Testimonial'
import Newsletter from '../shared/Newsletter';


const Home = () => {
    return (
        <>

        {/* ======================= hero__section start ======================== */}
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="hero__content">
                            <div className="hero__subtitle d-flex align-items-center">
                                <Subtitle subtitle={'Know Before You Go'}/>
                                <img src={worldImg} alt="" />
                            </div>
                            <h1>
                                Traveling opens the door for creating <span className="heilight">
                                    memories
                                </span>
                            </h1>
                            <p>Ready to embark on your next adventure? Start planning your dream trip today! Browse our extensive selection of tours,
                                 find the perfect destination,
                                 and book your travel with ease. Let's turn your travel dreams into reality.
                            </p>
                        </div>
                    </Col>

                    <Col lg='2'>
                        <div className="hero__img-box">
                            <img src={heroImg} alt="" />
                        </div>
                    </Col>

                    <Col lg='2'>
                        <div className="hero__img-box mt-4">
                            <video src={herovideo} alt="" controls />
                        </div>
                    </Col>

                    <Col lg='2'>
                        <div className="hero__img-box mt-5">
                            <img src={heroImg01} alt="" />
                        </div>
                    </Col>

                    <SearchBar />
                </Row>
            </Container>
        </section>
        {/* ======================= hero__section End ======================== */}

        <section>
            <Container>
                <Row>
                    <Col  lg='3'>
                        <h5 className="services__subtitle">
                            What we serve
                        </h5>
                        <h2 className='services__title'>
                            We offer our best services

                        </h2>
                    </Col>
                    <ServiceList />
                </Row>
            </Container>
        </section>

        {/* ==================== Featured Tour Section start =====================  */}

        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5'>
                        <Subtitle subtitle={'Explore'}/>
                        <h2 className="featured__tour-title">
                            Our featured tours
                        </h2>
                    </Col>
                    <FeaturedTourList />
                </Row>
            </Container>
        </section>

        {/* ==================== Featured Tour Section End =====================  */}

        {/* ==================== experience Section start =====================  */}

        <section>
            <Container className='d-flex'>
                <Col lg='6'>
                <div className="experience__content">
                    <Subtitle subtitle={'Experience'} />

                    <h2>With our all experience <br />we will serve you</h2>
                    <p>"Your journey begins with us, where convenience and reliability <br /> meet to provide you with an exceptional travel experience."
                    </p>
                </div>

                <div className="counter__wrapper d-flex align-items-center gap-5">
                    <div className="counter__box">
                        <span>12k+</span>
                        <h6>Successful Trip</h6>
                    </div>

                    <div className="counter__box">
                        <span>2k+</span>
                        <h6>Regular clients</h6>
                    </div>
                    <div className="counter__box">
                        <span>15</span>
                        <h6>Years experience</h6>
                    </div>
                </div>
                </Col>
                <Col lg='6'>
                    <div className="experience__img">
                        <img src={experienceImg} alt="" />
                    </div>
                
                </Col>
            </Container>
        </section>
        {/* ==================== experience Section End =====================  */}


        {/* ==================== gallery Section start =====================  */}

        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <Subtitle subtitle={'Gallery'}/>
                        <h2 className='gallery__title'>Visits our customer tours gallery</h2>
                    </Col>

                    <Col lg='12'>
                        <MasonryImagesGallery />
                    </Col>
                </Row>
            </Container>
        </section>

        {/* ==================== gallery Section End =====================  */}


        {/* ==================== testimonial Section start =====================  */}

        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <Subtitle subtitle={'Fans Love'}/>
                        <h2 className="testimonial__title">
                            What our fans say about us
                        </h2>
                    </Col>

                    <Col lg='12'>
                        <Testimonial />
                    </Col>
                </Row>
            </Container>
        </section>

        {/* ===================== testimonial Section End ======================  */}

        <Newsletter />

        </>
    )
}

export default Home;