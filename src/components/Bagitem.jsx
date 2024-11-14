import { useDispatch } from "react-redux";
import { bagAction } from "../store/bagslice";
import style from "./bagitem.module.css"

function Bagitem({ item }) {

  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(bagAction.removetobag(item.id));
  }

  return <div className={style.bag_item_container}>
    <div className={style.item_left_part}>
      <img className={style.bag_item_img} src={item.image} />
    </div>
    <div className={style.item_right_part}>
      <div className={style.company}>{item.company}</div>
      <div className={style.item_name}>{item.item_name}</div>
      <div className={style.price_container}>
        <span className={style.current_price}>Rs {item.current_price}</span>
        <span className={style.original_price}>Rs {item.original_price}</span>
        <span className={style.discount_percentage}>({item.discount_percentage}% OFF)</span>
      </div>
      <div className={style.return_period}>
        <span className={style.return_period_days}>{item.return_period} days</span> return available
      </div>
      <div className={style.delivery_details}>
        Delivery by
        <span className={style.delivery_details_days}>{item.delivery_date}</span>
      </div>
    </div>
    <div className={style.remove_from_cart} onClick={handleRemoveItem}>X</div>
  </div>
}
export default Bagitem