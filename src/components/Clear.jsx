import { useDispatch } from "react-redux";
import styles from "../style/_filterLine.module.scss";
import { removeAll } from "../store/filter/filter-actions";
function Clear() {
  const dispatch = useDispatch();

  return (
    <button
      className={styles.filterLine_clear}
      onClick={() => dispatch(removeAll)}
    >
      Clear
    </button>
  );
}
export default Clear;
