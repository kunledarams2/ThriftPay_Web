import { FunctionComponent, useState } from "react";
import "./FAQ.css";
import { motion } from "framer-motion";

export type FAQType = {
  className?: string;
  howDoesTheThriftPlanWork?: string;
  icons?: string;
  howDoesTheThriftPlanWork1?: string;
  showHowDoesThe?: boolean;
};

const FAQ: FunctionComponent<FAQType> = ({
  className = "",
  howDoesTheThriftPlanWork,
  // icons,
  howDoesTheThriftPlanWork1,
  // showHowDoesThe,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq ${className}`}>
      <div className="f-a-q-content">
        <h1 className="how-does-the">{howDoesTheThriftPlanWork}</h1>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleCollapse}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          {isOpen ? (
            <img
              className="icons34"
              loading="lazy"
              alt=""
              src="/icons-36.svg"
            />
          ) : (
            <img
              className="icons34"
              loading="lazy"
              alt=""
              src="/icons-39.svg"
            />
          )}
        </motion.div>

        {/* <img className="icons34" loading="lazy" alt="" src={icons} /> */}
      </div>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        style={{
          overflow: "hidden",
          // backgroundColor: "lightblue",
          // padding: isOpen ? "20px" : "0 20px",
          textAlign: "center",
        }}
      >
        {isOpen && (
          <div className="how-does-the1">{howDoesTheThriftPlanWork1}</div>
        )}
      </motion.div>
      {/* {showHowDoesThe && (
        <div className="how-does-the1">{howDoesTheThriftPlanWork1}</div>
      )} */}
    </div>
  );
};

export default FAQ;
