import React from 'react';
import {
 Header,HeroSection,CategoryCards,PromotionalBanners,
 FeaturedProducts,Testimonials,ConversionCard,BrandTrustBar,Footer
} from '../ChatGPT Skils/sections';

/** Each section imports its primitives and tokens from the committed ChatGPT Skils directory.
 * The markup stays semantic and the 1280px desktop composition collapses for smaller screens.
 */
export default function App() {
 return (
  <div className="min-h-screen bg-[#f8fafc] text-[#111329]">
   <Header/>
   <main id="main-content">
    <HeroSection/>
    <CategoryCards/>
    <PromotionalBanners/>
    <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-4 px-5 pt-3 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] lg:gap-4 lg:px-8">
     <div className="md:col-span-2 lg:col-span-1"><FeaturedProducts/></div>
     <Testimonials/>
     <ConversionCard/>
    </div>
   </main>
   <BrandTrustBar/>
   <Footer/>
  </div>
 );
}
