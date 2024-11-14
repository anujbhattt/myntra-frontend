import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/bagslice";
import { MdAddShoppingCart } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import style from "./home.module.css"



function Home({ item }) {
  const dispatch = useDispatch()
  const bagItems = useSelector(store => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;
  console.log(elementFound)
  const handleToBag = () => {
    dispatch(bagAction.addtobag(item.id));
  }
  const removeToBag = () => {
    dispatch(bagAction.removetobag(item.id));
  }

  return <div className={style.item_container}>
    <img className={style.item_image} src={item.image} alt="item image" />
    <div className={style.rating}>
      {item.rating.stars} ⭐ | {item.rating.count}
    </div>
    <div className={style.company_name}>{item.company}</div>
    <div className={style.item_name}>{item.item_name}</div>
    <div className={style.price}>
      <span className={style.current_price}>Rs {item.current_price}</span>
      <span className={style.original_price}>Rs {item.original_price}</span>
      <span className={style.discount}>({item.discount_percentage}% OFF)</span>
    </div>
    {elementFound ? <button onClick={removeToBag} type="button" className={style.btn_delete_bag}> <MdDeleteForever /> Remove</button> : <button type="button" onClick={handleToBag} className={style.btn_add_bag}> <MdAddShoppingCart />   Add to Bag</button>}
  </div >
}
export default Home;