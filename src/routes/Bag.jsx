import Bagitem from "../components/Bagitem";
import Bagsummary from "../components/Bagsummary";
import { useSelector } from 'react-redux'
import style from './bag.module.css'

function Bag() {
  const bagItems = useSelector(state => state.bag);
  const items = useSelector(state => state.items);
  const finalItems = items.filter(item => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  })
  return <>
    <main className={style.body}>
      <div className={style.bag_page}>
        <div className={style.bag_items_container}>
          {finalItems.map(item => <Bagitem item={item}></Bagitem>)}
        </div>
        <div className={style.bag_summary}>
          <Bagsummary></Bagsummary>
        </div>

      </div>
    </main>
  </>
}
export default Bag;