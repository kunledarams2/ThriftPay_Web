import { FunctionComponent, useEffect, useState } from "react";
import "./Testimonials.css";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Testimonials.module.css";
import customer1 from "../assets/customers/Frame 2147225966.svg";
import customer2 from "../assets/customers/Frame 2147225967.svg";
import customer3 from "../assets/customers/Frame 2147225968.svg";
import customer4 from "../assets/customers/Frame 2147225969.svg";
import customer5 from "../assets/customers/Frame 2147225970.svg";
import customer6 from "../assets/customers/Frame 2147225971.svg";
import customer7 from "../assets/customers/Frame 2147225972.svg";
import customer8 from "../assets/customers/Frame 2147225973.svg";

export type TestimonialsType = {
  className?: string;
};

const cardData = [
  {
    id: 1,
    content:
      "“I love the transparency of ThriftNest. I always know where my money is going.”",
    author: "Jenny Wilson",
    position: "Accountant at Nestle Nigeria",
    avatar: customer1,
    rating: 5,
  },
  {
    id: 2,
    content: "“ThriftNest makes saving money so much easier and convenient.”",
    author: "John Doe",
    position: "Software Engineer at Google",
    avatar: customer2,
    rating: 3,
  },
  {
    id: 3,
    content:
      "“With ThriftNest, I can manage my finances better than ever before.”",
    author: "Jane Smith",
    position: "Product Manager at Amazon",
    avatar: customer3,
    rating: 4,
  },

  {
    id: 4,
    content:
      "“With ThriftNest, I can manage my finances better than ever before.”",
    author: "Jane Smith",
    position: "Product Manager at Amazon",
    avatar: customer4,
    rating: 4,
  },

  {
    id: 5,
    content:
      "“With ThriftNest, I can manage my finances better than ever before.”",
    author: "Jane Smith",
    position: "Product Manager at Amazon",
    avatar: customer5,
    rating: 4,
  },

  {
    id: 6,
    content:
      "“With ThriftNest, I can manage my finances better than ever before.”",
    author: "Jane Smith",
    position: "Product Manager at Amazon",
    avatar: customer6,
    rating: 4,
  },

  {
    id: 7,
    content:
      "“With ThriftNest, I can manage my finances better than ever before.”",
    author: "Jane Smith",
    position: "Product Manager at Amazon",
    avatar: customer7,
    rating: 4,
  },

  {
    id: 8,
    content:
      "“With ThriftNest, I can manage my finances better than ever before.”",
    author: "Jane Smith",
    position: "Product Manager at Amazon",
    avatar: customer8,
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
      );
    }
    return stars;
  };

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.whatOurCustomersSayParent}>
          <div className={styles.whatOurCustomers}>What our customers say</div>
          <img className={styles.frameChild} alt="" src="Vector 5.svg" />
        </div>
        <div className={styles.hearFormOur}>Hear form our savers.</div>
      </div>
      <div className={styles.testimonialParent}>
        <div className={styles.testimonial}>
          <div className={styles.stars}>
            {renderStars(cardData[currentIndex].rating)}
            {/* <img className={styles.starIcon} alt="" src="star.svg" />
            <img className={styles.starIcon} alt="" src="star.svg" />
            <img className={styles.starIcon} alt="" src="star.svg" />
            <img className={styles.starIcon} alt="" src="star.svg" />
            <img className={styles.starIcon} alt="" src="star.svg" /> */}
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.iLoveThe}>
              {cardData[currentIndex].content}
            </div>
            <div className={styles.textWrapper}>
              <div className={styles.jennyWilson}>
                {" "}
                {cardData[currentIndex].author}
              </div>
              <div className={styles.accountantAtNestle}>
                {cardData[currentIndex].position}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <img className={styles.frameItem} alt="" src={customer3} />

          <img
            className={styles.frameInner}
            alt=""
            src={cardData[currentIndex].avatar}
          />
          <img className={styles.frameIcon} alt="" src={customer2} />
          <img className={styles.frameChild1} alt="" src={customer4} />
        </div>
        <div className={styles.frameDiv}>
          <img className={styles.frameChild2} alt="" src={customer5} />
          <img className={styles.frameChild3} alt="" src={customer6} />
          <img className={styles.frameChild4} alt="" src={customer7} />
          <img className={styles.frameChild5} alt="" src={customer8} />
        </div>
      </div>
    </div>

    // <section className={`testimonials-52 ${className}`}>
    //   <div className="testimonials-header">
    //     <h1 className="what-our-customers">What our customers say</h1>
    //     <div className="hear-form-our">Hear from our savers.</div>
    //   </div>
    //   <div className="testimonials-slider">
    //     <div className="testimonials-slider-container">
    //       <div className="testimonials-slider-content">
    //         <div className="testimonials-navigation" onClick={handlePrev}>
    //           <img
    //             className="arrow-left-icon"
    //             loading="lazy"
    //             alt=""
    //             src="/arrowleft.svg"
    //           />
    //         </div>

    //         <div className="testimonial-item">
    //           <AnimatePresence initial={false}>
    //             <motion.div
    //               key={cardData[currentIndex].id}
    //               initial={{ x: 300, opacity: 0 }}
    //               animate={{ x: 0, opacity: 1 }}
    //               // exit={{ x: -300, opacity: 0 }}
    //               transition={{ type: "spring", stiffness: 300, damping: 30 }}
    //               style={
    //                 {
    //                   // width: "100%",
    //                   // padding: "40px",
    //                   // background: "white",
    //                   // borderRadius: "10px",
    //                   // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    //                   // position: "absolute",
    //                   // top: "50%",
    //                   // left: "50%",
    //                   // transform: "translate(-50%, -50%)",
    //                   // textAlign: "center",
    //                 }
    //               }
    //             >
    //               <div className="testimonial1">
    //                 <div className="stars">
    //                   {renderStars(cardData[currentIndex].rating)}
    //                   {/* <img
    //                     className="star-icon"
    //                     loading="lazy"
    //                     alt=""
    //                     src="/star.svg"
    //                   />
    //                   <img
    //                     className="star-icon1"
    //                     loading="lazy"
    //                     alt=""
    //                     src="/star.svg"
    //                   />
    //                   <img
    //                     className="star-icon2"
    //                     loading="lazy"
    //                     alt=""
    //                     src="/star.svg"
    //                   />
    //                   <img
    //                     className="star-icon3"
    //                     loading="lazy"
    //                     alt=""
    //                     src="/star.svg"
    //                   />
    //                   <img
    //                     className="star-icon4"
    //                     loading="lazy"
    //                     alt=""
    //                     src="/star.svg"
    //                   /> */}
    //                 </div>
    //                 <div className="content-wrapper">
    //                   <h1 className="i-love-the">
    //                     {cardData[currentIndex].content}
    //                   </h1>
    //                   <div className="text-wrapper1">
    //                     <div className="jenny-wilson">
    //                       {cardData[currentIndex].author}
    //                     </div>
    //                     <div className="accountant-at-nestle">
    //                       {cardData[currentIndex].position}
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               {/* <div style={{ marginBottom: "10px" }}>
    //                 {renderStars(cardData[currentIndex].rating)}
    //               </div>
    //               <p style={{ fontSize: "24px", fontStyle: "italic" }}>
    //                 {cardData[currentIndex].content}
    //               </p>
    //               <h3>{cardData[currentIndex].author}</h3>
    //               <p style={{ color: "gray" }}>
    //                 {cardData[currentIndex].position}
    //               </p> */}
    //             </motion.div>
    //           </AnimatePresence>

    //           {/* <div className="testimonial" /> */}
    //         </div>
    //       </div>

    //       <div className="arrow-right-wrapper" onClick={handleNext}>
    //         <img
    //           className="arrow-right-icon"
    //           loading="lazy"
    //           alt=""
    //           src="/arrowright.svg"
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="testimonials-carousel">
    //     <div className="testimonials-carousel-items">
    //       {cardData.map((_, index) => (
    //         <div
    //           className={currentIndex === index ? "carosel" : "carosel1"}
    //           key={index}
    //           onClick={() => setCurrentIndex(index)}
    //           // style={{
    //           //   width: "10px",
    //           //   height: "10px",
    //           //   borderRadius: "50%",
    //           //   background: currentIndex === index ? "pink" : "lightgray",
    //           //   cursor: "pointer",
    //           // }}
    //         />
    //       ))}
    //       {/* <div className="carosel" />
    //       <div className="carosel1" />
    //       <div className="carosel2" />
    //       <div className="carosel3" />
    //       <div className="carosel4" />
    //       <div className="carosel5" /> */}
    //     </div>
    //   </div>
    // </section>
  );
};

export default Testimonials;
