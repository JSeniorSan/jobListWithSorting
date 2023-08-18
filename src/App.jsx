import Header from "./components/Header";
import SkilsLine from "./components/SkilsLine";
import CardList from "./components/CardList";
import styles from "./style/index.module.scss";
import "./index.css";
import file from "./mock/data.json";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ADD } from "./store/positiions/positions-action";
function App() {
  //
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ADD(file));
  });

  return (
    <div className={styles.bg}>
      <Header />
      <SkilsLine />
      <CardList />
    </div>
  );
}

export default App;
