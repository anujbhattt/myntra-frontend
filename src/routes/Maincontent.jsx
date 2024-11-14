import Home from "../components/Home";
import { useSelector } from "react-redux"
import style from "./maincontent.module.css"

function Maincontent() {
  const items = useSelector(store => store.items);
  return <main className={style.main}>
    <div className={style.items_container}>
      {items.map(item => <Home key={item.id} item={item}></Home>)}
    </div>
  </main>
}
export default Maincontent;