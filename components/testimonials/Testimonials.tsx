"use client";
import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from "next/link";

const reviews = [
    {
        id: 1,
        src: '/review-from-student/dane-lim.png',
        alt: 'Image 1',
        description: 'Recommended ✨ For students studying IT.  Before, I was just a student that don\'t understand coding, but after I applied for a scholarship here, things changed and I was able to code, know a lot of technology.  For teachers, they are good teachers, when I do not understand, they always teach me and give a good advice to me and my classmates.  When I study here, it feels like my home, we have teachers and students have a good relationship with each other.\n' +
            'CSTAD GOOD FOR STUDENTS WANT TO STUDY "IT" ✨'
        ,
        name: 'Dane Lim ',
        link: 'https://www.facebook.com/dane.lim.7169/posts/1118605142631986?ref=embed_post',
    },
    {
        id: 2, src: '/review-from-student/phon-sobon.png',
        alt: 'Phon Sobon ',
        description: 'At CSTAD, I\'m learning a lot about IT. The teachers are really good and help me understand things easily. Being around other students who also love IT makes me excited to learn. We do practical projects and fun activities that help me get better at IT. The teachers and mentors at CSTAD also talk to me about what kind of IT jobs I might like and how to be good at them. They\'re not just teaching IT stuff, but also how to work well with others and solve problems. For me, CSTAD i… See more',
        name: 'Phon Sobon ',
        link: 'https://www.facebook.com/sobon.phon',
    },
    {
        id: 3, src: '/review-from-student/manny-sin.png', alt: 'Manny Sin ',
        description: 'As a student at CSTAD, I confidently say here is the best place for students who are would like to develop their IT skills to be an expert. CSTAS will provide you a good way to reach your dreams because teachers are Skillful with the long-term experience in teaching. They really have good approach in teaching that students will be easy to understand. Especially, teacher focus on new and latest technology. So, if you want to explore your IT career, start with CSTAD.',
        name: 'Manny Sin ',
        link:'https://www.facebook.com/manny.sin.56/posts/1111287956913108?ref=embed_post',
    },
    {
        id: 4, src: '/review-from-student/ly-hour.png', alt: 'lyhou',
        description: 'CSTAD is the best for who want to improve your IT skill I\'m highly recommend to all of you because good environment,best teacher, team work, project research,  lastest technology and sharing knowledge special lecture.',
        name: 'Phiv Lyhou',
        link: 'https://www.facebook.com/lyhouphiv/posts/1587479905331314?ref=embed_post',
    },
    {
        id: 5, src: '/review-from-student/seav-mey.png', alt: 'seav-mey.png',
        description: 'CSTAD is the best place for those who want to learn IT. Good environment with best mentors. Here is the right place to start your IT career.',
        name: 'Sea Mey ',
        link: 'https://www.facebook.com/permalink.php?story_fbid=1108519180169213&id=100030334253914&ref=embed_post',
    },
    {
        id: 6, src: '/review-from-student/nita.png', alt: 'Ni Ta',
        description: 'Reflecting on my unforgettable journey at the  Center of Science and Technology Advanced Development - CSTAD where every day felt like a chapter in a story, I highly recommend computer science students who want to learn and improve their IT skills to consider enrolling in a short course or applying for a scholarship at CSTAD. 📖✨',
        name: 'Ni Taa',
        link: 'https://www.facebook.com/photo.php?fbid=1120140612694121&set=a.110448263663366&type=3&ref=embed_post',
    },
    {
        id: 7, src: '/review-from-student/hom-pheakakvotey.png', alt: 'Votey ',
        description: 'A good environment school with the best mentors and learning system.',
        name: 'Votey ',
        link: 'https://www.facebook.com/permalink.php?story_fbid=733700445319473&id=100060385729598&ref=embed_post',
    },
    {
        id: 8, src: '/review-from-student/helen.png', alt: 'Helen Leang ',
        description: 'Don’t know where to start with your IT path? I highly recommend CSTAD as there will be many friendly and lively mentor guiding you through your journey 24/7 with great school environment setting and plenty of scholarships similar to those abroad school. And if your ability is satisfactory, you might even land a chance in studying abroad and proper position in the IT industrial.',
        name: 'Helen Leang ',
        link: 'https://www.facebook.com/mochi.lazing',
    },
    {
        id: 9, src: '/review-from-student/panha.png', alt: 'Panha',
        description: 'I strongly recommend CSTAD to all my IT fellows who want to effectively gain a skill in a short time. \n' +
            'The center offers consultations before taking a course and provides a very wide range of course choices. Courses at CSTAD are neatly organized to meet job demands and are taught and trained by skilled instructors.\n' +
            'Start your IT career today, Start with CSTAD',
        name: 'Panha',
        link: 'https://www.facebook.com/Panha.03/posts/3636037866644957?ref=embed_post',
    },
    {
        id: 10, src: '/review-from-student/chento.png', alt: 'Chea Chento',
        description: 'At CSTAD, I\'m learning a lot about IT. The teachers are really good and help me understand things easily. Being around other students who also love IT makes me excited to learn. We do practical projects and fun activities that help me get better at IT. The teachers and mentors at CSTAD also talk to me about what kind of IT jobs I might like and how to be good at them. They\'re not just teaching IT stuff, but also how to work well with others and solve problems. For me, CSTAD i… See more',
        name: 'Chea Chento',
        link:'https://www.facebook.com/photo.php?fbid=3677666295798772&set=a.2096984980533586&type=3&ref=embed_post',
    },
    {
        id: 11, src: '/review-from-student/song.png', alt: 'Song',
        description: 'Highly recommend for everyone who want to develop our skill in a short time and want to choose the right way as a good programmer.❤️✌️',
        name: 'Song',
        link: 'https://www.facebook.com/ah.heasong/posts/1445201653091156?ref=embed_post',
    },
]
// Ensure the Swiper code runs only in the browser
function Testimonials() {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            Swiper.use([Navigation, Pagination]);
            new Swiper(swiperRef.current, {
                autoHeight: true,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    bulletActiveClass: 'swiper-pagination-bullet-active',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }
    }, []);

    return (
        <section aria-labelledby="testimonials-title">
            <div>
                <div id="page" data-aos="fade-right" className="site bg-white-80">
                    <div className="container">
                        <div data-aos="fade-up" className="testI">
                            <header className="head">
                                <h5
                                    id="testimonials-title"
                                    data-aos="fade-right"
                                    className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-error">
                                    TESTIMONIALS
                                </h5>
                                <h1
                                    data-aos="fade-right"
                                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary">
                                    HEAR FROM OUR STUDENTS
                                </h1>
                            </header>

                            <main className="body swiper" ref={swiperRef}>
                                <ul className="swiper-wrapper">
                                    {reviews.map((review) => (
                                        <li key={review.id} className="swiper-slide" role="article">
                                            <article className="wrapper">
                                                <div className="thumbnail">
                                                    <img src={review.src} alt={review.alt} />
                                                </div>
                                                <div className="text-start aside">
                                                    <p className="truncate-lines-2 text-base md:text-lg text-black-34 tracking-wide my-4">{review.description}</p>
                                                    <div className="name text-start ml-12">
                                                        <h4 className="text-lg md:text-xl font-bold">{review.name}</h4>
                                                        <p className="text-error text-sm md:text-base">Student from iSTAD</p>
                                                    </div>

                                                    <Link href={review.link ?? '#'} passHref target="_blank"
                                                          className="hover:text-black-34 text-[12px] text-sm md:text-base cursor-pointer rounded-lg mt-5 text-primary">
                                                        <button className="custom-button">See More</button>

                                                    </Link>

                                                </div>
                                            </article>
                                        </li>
                                    ))}
                                </ul>

                                <div className="swiper-pagination" role="navigation"></div>
                                <button className="swiper-button-prev" aria-label="Previous testimonial"></button>
                                <button className="swiper-button-next" aria-label="Next testimonial"></button>
                            </main>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');

                * {
                    margin: 0;
                    padding: 0;
                }

                *::before, *::after {
                    box-sizing: border-box;
                }

                .custom-button {
                    color: #253C95; /* Use your primary color variable or replace with a specific color */
                    transition: color 0.2s, background-color 0.2s; /* Smooth transition for color and background */
                    font-weight: 250; /* Medium font weight */
                    border-radius: 0.375rem; /* Rounded corners */
                    border: 1px solid #3b82f6;
                    font-size: 0.875rem; /* Small text size */
                    padding: 0.325rem 1.25rem; /* Padding: 10px top and bottom, 20px left and right */
                    text-align: center;
                    margin-inline-end: 0.2rem; /* Margin to the end of the element */
                    margin-bottom: 0.2rem; /* Margin to the bottom of the element */
                }

                .custom-button:hover {
                    color: white; /* Text color on hover */
                    background-color: #3b82f6; /* Background color on hover (blue-500) */
                }

                .custom-button:focus {
                    outline: none; /* Remove default outline */
                    ring: 4px solid rgba(59, 130, 246, 0.3); /* Ring color (blue-300) */
                }


                a {
                    text-decoration: none;
                    color: inherit;
                }

                a, button, div[role="button"] {
                    -webkit-tap-highlight-color: transparent;
                }

                ul {
                    list-style: none;
                }

                h2, h3, h4 {
                    font-weight: 500;
                    line-height: normal;
                }

                body {
                    font-family: 'Poppins', sans-serif;
                    font-size: 1rem;
                    font-weight: 400;
                    line-height: 1.8;
                    color: #343434;
                    background-color: #FFFFFF;
                }

                .site {
                    height: 85vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .container {
                    max-width: 1100px;
                    width: 100%;
                    padding: 0 30px;
                    margin: 0 auto;
                }

                .testI .head {
                    text-align: center;
                    margin-bottom: 60px;
                }

                .testI .wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 30px;
                    padding: 20px;
                }

                .testI {
                    max-width: 900px;
                    margin: 0 auto;
                }

                .testI .thumbnail {
                    width: 100px;
                    height: 100px;
                    position: relative;
                    flex-shrink: 0;
                    margin-bottom: 20px; /* Add space below the image */
                }

                .testI .thumbnail img {
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    transform: scale(2);
                    transition: transform .5s;
                }

                .testI .swiper-slide-active .thumbnail img {
                    transform: scale(1);
                }

                .testI .thumbnail::before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: calc(100% + 30px);
                    height: calc(100% + 10px);
                    background-color: #253C95;
                    border-radius: 50%;
                    z-index: -1;
                    box-shadow: 0 20px 30px -10px rgba(0, 0, 2, 0.35);
                    transition: border-radius .5s .3s;
                }

                .testI .swiper-slide-active .thumbnail::before {
                    border-radius: 33% 67% 50% 50% / 50% 14% 86% 50%;
                }

                .testI .aside {
                    margin-left: 40px;
                    position: relative;
                    padding-top: 10px;
                    display: flex;
                    flex-direction: column;
                    align-self: flex-end;
                }

                .testI .aside > p {
                    position: relative;
                    line-height: normal;
                    margin-bottom: 30px;
                    opacity: 0;
                    transform: translateX(10%);
                    transition: transform 1s, opacity 1s;
                }

                .testI .swiper-slide-active .aside > p {
                    transform: translateX(0);
                    opacity: 1;
                }

                .testI .aside > p::before,
                .testI .aside > p::after {
                    font-family: serif;
                    line-height: 1;
                    position: absolute;
                    color: #ced6e0;
                    height: 40px;
                    z-index: -1;
                }

                .testI .aside > p::before {
                    content: open-quote;
                    top: -40px;
                    left: 10px;
                }

                .testI .aside > p::after {
                    content: close-quote;
                    right: 0;
                }

                .testI .aside .name {
                    position: relative;
                    width: fit-content;
                    line-height: 1;
                    opacity: 0;
                    transform: translateX(30px);
                    transition: transform 1s .2s, opacity 1s .3s;
                }

                .testI .swiper-slide-active .name {
                    transform: translateX(0);
                    opacity: 1;
                }

                .testI .aside .name h4 {
                    margin-left: 48px;
                    font-size: 1rem;
                    font-weight: 800;
                    color: #253C95;
                    opacity: .8;
                    margin-bottom: 5px; /* Add space below the name */
                }

                .testI .aside .name p {
                    font-size: 0.875rem;
                    text-align: right;
                    margin-left: 48px;
                }

                .testI :is(.swiper-button-next, .swiper-button-prev) {
                    background-color: #ced6e0;
                    top: 35%;
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    transition: background-color .3s;
                    box-shadow: 0 20px 30px -10px rgba(0, 0, 2, 0.35);
                }

                .testI :is(.swiper-button-next, .swiper-button-prev):hover {
                    background-color: #253C95;
                }

                .testI :is(.swiper-button-next, .swiper-button-prev)::after {
                    font-size: 1rem;
                    font-weight: 800;
                    color: #FFFFFF;
                }

                .testI .swiper-pagination {
                    position: relative;
                }

                .testI .swiper-pagination span {
                    background-color: #ced6e0;
                    transition: width .3s;
                    opacity: 1;
                }

                .testI .swiper-pagination .swiper-pagination-bullet-active {
                    width: 26px !important;
                    border-radius: 4px;
                    background-color: #253C95;
                }

                @media screen and (min-width: 290px) {
                    .testI .wrapper {
                        flex-direction: column;
                        padding: 20px;
                    }

                    .testI .thumbnail {
                        width: 100px;
                        height: 100px;
                        margin-bottom: 20px; /* Ensure the space remains in smaller screens */
                    }

                    .testI :is(.swiper-button-next, .swiper-button-prev) {
                        top: 40%;
                    }

                    .testI .swiper-slide-active .name {
                        transform: translateX(-25px);
                    }
                }

                @media screen and (min-width: 768px) {
                    .testI .wrapper {
                        flex-direction: row;
                        padding: 30px 100px;
                    }

                    .testI .thumbnail {
                        width: 200px;
                        height: 200px;
                        margin-bottom: 0; /* Remove bottom margin for larger screens */
                    }

                    .testI :is(.swiper-button-next, .swiper-button-prev) {
                        top: 50%;
                    }

                    .testI .swiper-slide-active .name {
                        transform: translateX(-50px);
                    }
                }
            `}</style>
        </section>

    );
}

export default Testimonials;
