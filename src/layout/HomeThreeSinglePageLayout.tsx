import React  from 'react';
import HeaderThree from '../components/headers/HeaderThree';
import BannerThree from '../features/home-three/BannerThree';
import FeatureThree from '../features/home-three/FeatureThree';
import SlidingTextOne from '../features/home-one/SlidingTextOne';
import ServicesThree from '../features/home-three/ServicesThree';
import ProjectOne from '../features/home-one/ProjectOne';
import WhyChooseOne from '../features/home-one/WhyChooseOne';
import QuoteOne from '../features/home-three/QuoteOne';
import ProcessOne from '../features/home-one/ProcessOne';
import CtaOne from '../features/home-two/CtaOne';
import CounterOne from '../features/home-one/CounterOne';
import FindTransport from '../features/home-two/FindTransport';
import TestimonialThree from '../features/home-three/TestimonialThree';
import DownloadAppOne from '../features/home-one/DownloadAppOne';
import TeamOne from '../features/home-one/TeamOne';
import FaqOne from '../features/home-one/FaqOne';
import BlogOne from '../features/home-one/BlogOne';
import BrandOne from '../features/home-one/BrandOne';
import FooterThree from '../components/footers/FooterThree';
import StrickyHeaderThree from '../components/headers/StrickyHeaderThree'; 
import AboutThree from '../features/home-three/AboutThree';

const HomeThreeSinglePageLayout: React.FC = () => { 
    return (
        <div className="page-wrapper">
            <HeaderThree />
            <BannerThree />
            <FeatureThree />
            <AboutThree />
            <SlidingTextOne />
            <ServicesThree />
            <ProjectOne />
            <WhyChooseOne />
            <QuoteOne />
            <ProcessOne />
            <CtaOne />
            <CounterOne />
            <FindTransport />
            <TestimonialThree />
            <DownloadAppOne />
            <TeamOne />
            <FaqOne />
            <BlogOne />
            <BrandOne /> 
            <FooterThree />
            <StrickyHeaderThree />
        </div>
    );
};

export default HomeThreeSinglePageLayout;