import styles from "../style/_cardSpace.module.scss";
import { useDispatch } from "react-redux";
import { removeValue } from "../store/filter/filter-actions";
function UiBtn(props) {
  const dispatch = useDispatch();
  return (
    <div className={styles.flexBtnX}>
      <div className={styles.btnActive}>{props.name}</div>
      <button
        className={styles.x}
        onClick={() => dispatch(removeValue(props.name))}
      >
        X
      </button>
    </div>
  );
}
export default UiBtn;
