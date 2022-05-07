import React from 'react';
import { Carousel } from 'react-bootstrap';
import ktm from '../../Image/ktm.jpg'
import gsx from '../../Image/gsx.webp'
import MT15 from '../../Image/MT15.jpg'
// import Overview from '../OverView/Overview';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ktm}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-info font-weight-600'>KTM Bike stored Available</h3>
                        <p>KTM Brand Bike is very Popular of our country though it is very expensive according to our economy</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={gsx}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-black font-weight-600'>GSX Bike stored Available</h3>
                        <p>GSX Brand Bike is very Popular of our country though it is very expensive according to our economy</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={MT15}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-primary font-weight-600'>MT15 Bike stored Available</h3>
                        <p className='text-primary'>MT15 Brand Bike is very Popular of our country though it is very expensive according to our economy</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div>

                <Services></Services>
                {/* <Overview></Overview> */}

            </div>
            <div className='container'>

            </div>
        </div>
    );
};

export default Home;