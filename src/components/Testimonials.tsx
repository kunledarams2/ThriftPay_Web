import { FunctionComponent, useEffect, useState } from "react";
import "./Testimonials.css";
import { motion, AnimatePresence } from "framer-motion";

export type TestimonialsType = {
  className?: string;
};

const cardData = [
  {
    id: 1,
    content:
      "“I love the transparency of ThriftPay. I always know where my money is going.”",
    author: "Jenny Wilson",
    position: "Accountant at Nestle Nigeria",
    rating: 5,
  },
  {
    id: 2,
    content: "“ThriftPay makes saving money so much easier and convenient.”",
    author: "John Doe",
    position: "Software Engineer at Google",
    rating: 3,
  },
  {
    id: 3,
    content:
      "“With ThriftPay, I can manage my finances better than ever before.”",
    author: "Jane Smith",
    position: "Product Manager at Amazon",
    rating: 4,
  },
];

const Testimonials: FunctionComponent<TestimonialsType> = ({
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : cardData.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < cardData.length - 1 ? prevIndex + 1 : 0
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change the slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <img
          className="star-icon"
          loading="lazy"
          alt=""
          src="/star.svg"
          color={i < rating ? "#F7AD30" : "lightgray"}
        />
        // <span
        //   key={i}
        //   style={{
        //     color: i < rating ? "#F7AD30" : "lightgray",
        //   }}
        // >

        // </span>
      );
    }
    return stars;
  };

  return (
    <section className={`testimonials-52 ${className}`}>
      <div className="testimonials-header">
        <h1 className="what-our-customers">What our customers say</h1>
        <div className="hear-form-our">Hear from our savers.</div>
      </div>
      <div className="testimonials-slider">
        <div className="testimonials-slider-container">
          <div className="testimonials-slider-content">
            <div className="testimonials-navigation" onClick={handlePrev}>
              <img
                className="arrow-left-icon"
                loading="lazy"
                alt=""
                src="/arrowleft.svg"
              />
            </div>

            <div className="testimonial-item">
              <AnimatePresence initial={false}>
                <motion.div
                  key={cardData[currentIndex].id}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  // exit={{ x: -300, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={
                    {
                      // width: "100%",
                      // padding: "40px",
                      // background: "white",
                      // borderRadius: "10px",
                      // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      // position: "absolute",
                      // top: "50%",
                      // left: "50%",
                      // transform: "translate(-50%, -50%)",
                      // textAlign: "center",
                    }
                  }
                >
                  <div className="testimonial1">
                    <div className="stars">
                      {renderStars(cardData[currentIndex].rating)}
                      {/* <img
                        className="star-icon"
                        loading="lazy"
                        alt=""
                        src="/star.svg"
                      />
                      <img
                        className="star-icon1"
                        loading="lazy"
                        alt=""
                        src="/star.svg"
                      />
                      <img
                        className="star-icon2"
                        loading="lazy"
                        alt=""
                        src="/star.svg"
                      />
                      <img
                        className="star-icon3"
                        loading="lazy"
                        alt=""
                        src="/star.svg"
                      />
                      <img
                        className="star-icon4"
                        loading="lazy"
                        alt=""
                        src="/star.svg"
                      /> */}
                    </div>
                    <div className="content-wrapper">
                      <h1 className="i-love-the">
                        {cardData[currentIndex].content}
                      </h1>
                      <div className="text-wrapper1">
                        <div className="jenny-wilson">
                          {cardData[currentIndex].author}
                        </div>
                        <div className="accountant-at-nestle">
                          {cardData[currentIndex].position}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div style={{ marginBottom: "10px" }}>
                    {renderStars(cardData[currentIndex].rating)}
                  </div>
                  <p style={{ fontSize: "24px", fontStyle: "italic" }}>
                    {cardData[currentIndex].content}
                  </p>
                  <h3>{cardData[currentIndex].author}</h3>
                  <p style={{ color: "gray" }}>
                    {cardData[currentIndex].position}
                  </p> */}
                </motion.div>
              </AnimatePresence>

              {/* <div className="testimonial" /> */}
            </div>
          </div>

          <div className="arrow-right-wrapper" onClick={handleNext}>
            <img
              className="arrow-right-icon"
              loading="lazy"
              alt=""
              src="/arrowright.svg"
            />
          </div>
        </div>
      </div>
      <div className="testimonials-carousel">
        <div className="testimonials-carousel-items">
          {cardData.map((_, index) => (
            <div
              className={currentIndex === index ? "carosel" : "carosel1"}
              key={index}
              onClick={() => setCurrentIndex(index)}
              // style={{
              //   width: "10px",
              //   height: "10px",
              //   borderRadius: "50%",
              //   background: currentIndex === index ? "pink" : "lightgray",
              //   cursor: "pointer",
              // }}
            />
          ))}
          {/* <div className="carosel" />
          <div className="carosel1" />
          <div className="carosel2" />
          <div className="carosel3" />
          <div className="carosel4" />
          <div className="carosel5" /> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
