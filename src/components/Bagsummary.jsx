import { useSelector } from 'react-redux'
import style from "./bagsummary.module.css"
function Bagsummary() {
  const items = useSelector(state => state.items);
  const bagItemsid = useSelector(state => state.bag);
  const finalItems = items.filter(item => {
    const itemIndex = bagItemsid.indexOf(item.id);
    return itemIndex >= 0;
  })
  const Conveniencefees = 99;
  let totalItem = bagItemsid.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  })


  let finalPayment = totalMRP - totalDiscount + Conveniencefees;
  return <>
    <div className={style.bag_details_container}>
      <div className={style.price_header}>PRICE DETAILS ({totalItem} Items) </div>
      <div className={style.price_item}>
        <span className={style.price_item_tag}>Total MRP</span>
        <span className={style.price_item_value}>₹{totalMRP}</span>
      </div>
      <div className={style.price_item}>
        <span className={style.price_item_tag}>Discount on MRP</span>
        <span className={style.price_item_value} priceDetail-base-discount>-₹{totalDiscount}</span>
      </div >
      <div className={style.price_item}>
        < span className={
          style.price_item_tag}>Convenience Fee</span>
        <span className={style.price_item_value}>₹{Conveniencefees}</span>
      </div >
      <hr />
      <div className={style.price_footer}>
        < span className={
          style.price_item_tag}>Total Amount</span>
        <span className={style.price_item_value}>₹{finalPayment}</span>
      </div>
    </div >
    <button className={style.btn_place_order}>
      < div className={
        style.css_xjhrni}>PLACE ORDER</div>
    </button>
  </>
}
export default Bagsummary;