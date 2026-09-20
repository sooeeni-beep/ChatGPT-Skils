import React from 'react';
import {Header,HeroSection,CategoryCards,PromotionalBanners,PlatformTrustBanner,FeaturedProducts,Testimonials,ConversionCard,BrandTrustBar,Footer} from '../ChatGPT Skils/sections';

export default function App(){
 return <div className="min-h-screen bg-[#f8fafc]">
  <Header/>
  <main>
   <HeroSection/>
   <CategoryCards/>
   <PromotionalBanners/>
   <PlatformTrustBanner/>
   <section className="mx-auto grid max-w-[1500px] gap-5 px-5 pt-5 lg:grid-cols-[2fr_1fr_1fr] lg:gap-4 lg:px-8"><FeaturedProducts/><Testimonials/><ConversionCard/></section>
  </main>
  <BrandTrustBar/>
  <Footer/>
 </div>;
}
