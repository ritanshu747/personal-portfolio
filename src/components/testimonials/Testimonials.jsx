import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/akarsh-saxena30/',
      name: 'Akarsh Saxena',
      role: 'Technology Program Analyst at Fiserv',
      test: 'As a developer and problem solver, I consider Ritanshu to be an outstanding collaborator. My introduction to Ritanshu took place during our college days, where I had the opportunity to instruct him in the fundamentals of the C programming language. Since then, he has exhibited substantial growth in his comprehension of the development process. At this juncture, he has impressively tackled over 250 LeetCode challenges, a noteworthy accomplishment, particularly considering his initial lack of familiarity with programming languages. Presently, he excels as a proficient frontend engineer.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/pranshidwivedi/',
      name: 'Pranshi Dwivedi',
      role: 'Associate Software Engineer at Accenture',
      test: "Working together with Ritanshu on the CAR-RENTAL APPLICATION (DriveEasyRentals) was an absolute pleasure. One remarkable trait about him is his relentless pursuit of improvement. Even after completing projects, he diligently seeks out additional resources to enhance his knowledge. Collaborating with him feels effortless and comfortable, akin to partnering with a longtime acquaintance.",
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/shivang-katiyar-2001/',
      name: 'Shivang Katiyar',
      role: 'Associate Software Engineer at Accenture',
      test: ' During our time working together on the same team, I had the opportunity to witness his remarkable strengths in communication and programming. His ability to effectively convey ideas and information is truly commendable, making him an asset when it comes to team dynamics and project collaboration',
    },
   
   
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials