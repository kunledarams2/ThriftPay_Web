import { FunctionComponent } from "react";
// import "./Benefit.css";
import styles from "./ThriftGroups.module.css";

export type BenefitType = {
  // className?: string;
  title?: string;
  body?: string;
  icon: string;
};

const Benefit: FunctionComponent<BenefitType> = ({
  // className = "",
  title,
  body,
  icon,
}) => {
  return (
    <div className={styles.benefit3}>
      <img className={styles.icons3} alt="" src={icon} />
      <div className={styles.seamlessManagementParent}>
        <div className={styles.benefitTitle}> {title}</div>
        <div className={styles.benefitDescription}> {body}</div>
      </div>
    </div>
  );
};

export default Benefit;
