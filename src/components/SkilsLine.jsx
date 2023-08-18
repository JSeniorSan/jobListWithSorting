import styles from "../style/_filterLine.module.scss";
import { useSelector } from "react-redux";
import { selectFilterBtn } from "../store/filter/filter-selectors";
import Clear from "./Clear";
export default function SkilsLine() {
  const arrFilterBtn = useSelector(selectFilterBtn);

  return (
    <div className={styles.divFilterLine}>
      <div className={styles.filterLine}>
        <div className={styles.btnDiv}>{arrFilterBtn}</div>

        <Clear />
      </div>
    </div>
  );
}
