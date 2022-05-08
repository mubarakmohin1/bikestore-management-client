import React from 'react';
import { Carousel } from 'react-bootstrap';
import ktm from '../../Image/ktm.jpg'
import gsx from '../../Image/gsx.webp'
import MT15 from '../../Image/MT15.jpg'
import bikestore from '../../Image/bikestore.jpg'
import port from '../../Image/port.jpg'
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
            <h1 className='container mt-5'>Bike Store Room</h1>
            <div className='container mt-5 d-flex justify-content-center align-items-center col col-sm-12'>
                <img src={bikestore} alt="" />
                <div className='ps-4'>
                    <p>Find Bike showroom stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection.
                        Bike showroom - Locate authorized bike showrooms in India. Check out all the list of motorcycle dealers and makes easy to locate the nearest bike showroom.Honda Bike Showroom </p>
                    <b>Address:36,Banglabajar Dhaka</b> <br />
                    <b>Mobile: 01726385196</b> <br />
                    <b>Open: 9 AM to 8 PM</b>
                </div>
            </div>
            <h1 className='container mt-5'>Bike Import Bangladesh</h1>
            <div className='container mt-5 d-flex justify-content-center align-items-center col col-sm-12'>
                <p>Currently we have 3 major Japanese manufacturer imported motorcycles in Bangladesh:

                    Honda: CBR150R with single headlamp (Thailand), 2016 CBR150R with double headlamp (Indonesia), CB150R Streetfire (Indonesia)
                    Yamaha: R15V2 (Thailand & Indonesia), M Slaz (Thailand), Xabre (Indonesia), Vixxion (Indonesia)
                    Kawasaki: KLX150, D Tracker150, Z125. (Thai)
                    Bangladesh motorcycle companies mostly rely on Indian market or China market, the 3 Japanese manufacturers in Bangladesh (Honda, Yamaha & Suzuki) all have their product line up connected to whatever bikes are manufactured in India. Honda is the only one that brings a bike from Vietnam (Wave Alpha) & Pakistan (CD80) but the rest of the lineup is based on the Indian motorcycle market.</p>
                    <img className='w-50' src={port} alt="" />
            </div>
        </div>
    );
};

export default Home;