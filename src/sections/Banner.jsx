import React from 'react';
import anhCuoiBanner from "../images/anh-cuoi-banner.png";

export default function Banner(){
    return (
        <div className='banner section section-primary relative'>
            <div className='flex flex-column gap-24'>
                <div className='flex align-end justify-center'>
                    <img className='banner-logo' src="https://thiepcuoi.cloud/assets/images/templates/coba/deco2.png" alt="loa" />
                    <div className='banner-border'>
                        <span className='red-text'>LOA LOA LOA... BÀ CON CHÚ Ý</span>
                    </div>
                </div>

                <div className="badge badge-green">
                    <div className='flex gap-12 relative'>
                        <span className='left-2 md:-top-3 rotate-[-7.04deg] text-[28.99px] sm:text-[60px] font-birthstone'>Cô dâu chú rể</span>
                        <span className="font-extrabold text-[13px] sm:text-title-mobile uppercase line-height">Về chung một nhà</span>
                    </div>
                </div>

                <h1 className='heading heading-medium red-heading text-center'>Xuân Sinh <br />&<br/> Bùi Quỳnh</h1>

                <div className='banner-content'>
                    <div className="flex-1 relative banner-images" style={{ opacity: '1', transform: 'none' }}>
                        <div className="relative w-[319px] h-[393px] md:w-[577.2px] md:h-[730px] z-30 ">
                            <img src="https://thiepcuoi.cloud/assets/images/templates/coba/stampBanner1.png" className="absolute w-full h-full rotate-[4.16deg] " />
                            <div className="overflow-hidden cursor-pointer absolute top-6 md:top-10 left-4 md:left-7 rounded w-[90%]  h-[90%] rotate-[4.16deg] z-1">
                                <img 
                                    className="w-full h-full z-10 object-cover    border-transparent    " 
                                    alt="Wedding couple" 
                                    id="banner-imageBanner" 
                                    src={anhCuoiBanner} 
                                    loading="lazy" 
                                    draggable="false" 
                                    style={{ objectPosition: "50% 50%", transform: "scale(1)", transformOrigin: "center center", opacity: "1", transition: "opacity 0.15s ease-in-ou" }}
                                />
                                <img src="https://thiepcuoi.cloud/assets/images/templates/coba/iconFollower1.png" className="absolute -bottom-10 md:-bottom-36 rotate-[-9deg] z-20 -right-5 md:-right-32 max-w-[127px] max-h-[104px] md:max-w-[382px] md:max-h-[312px]" />
                            </div>
                        </div>
                    </div>

                    <div 
                        className="relative bottom-0 md:relative w-full lg:-mt-40 h-[260px]" 
                        style={{ opacity: "1", transform: "none" }}
                    >
                        <div 
                            className="absolute z-10 px-7 pt-[15px] pb-5 bottom-9 lg:-top-10 shadow-3d w-[280px] sm:w-[384px] h-[77px] flex justify-center items-center gap-5" 
                            style={{ backgroundColor: "rgb(249, 184, 93)" }}
                        >
                            <span 
                                className="font-birthstone rotate-[-7.04deg] text-[40px] md:text-[60px] leading-[81.6px]" 
                                style={{ color: "rgb(172, 42, 33)" }}
                            >
                                Ngày
                            </span>
                            <span className='banner-date'>25-01-2026</span>
                        </div>
                        <img src="	https://thiepcuoi.cloud/assets/images/templates/coba/frameBanner1.png" className="w-full h-full object-cover object-top" />
                    </div>
                </div>
            </div>
        </div>
    );
};