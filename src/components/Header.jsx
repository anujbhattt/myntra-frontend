import { IoMdPerson } from "react-icons/io";
import { RiHeartPulseFill } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import img1 from "../assets/images/167204-200.png"
import img2 from "../assets/images/65508-200.png"
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import style from "./header.module.css"
function Header() {

  const bag = useSelector(store => store.bag);
  const [showmenu, setshowmenu] = useState(true);


  return <>
    <header className={style.header}>
      <div className={style.logo_container}>
        <img className={style.sidebar} alt="navbar" src={showmenu === false ? img2 : img1} onClick={() => setshowmenu(!showmenu)} />
        <Link to="/"><img className={style.myntra_home} src="images/myntra_logo.webp" alt="Myntra Home" /></Link>
      </div>
      <nav className={style.nav_bar}>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">Studio <sup>New</sup></a>
      </nav>
      <div className={style.search_bar}>
        <span className={style.search_icon}>search</span>
        <input className={style.search_input} placeholder="Search for products, brands and more" />
      </div>
      <div className={style.action_bar}>
        <div className={style.action_container}>
          <IoMdPerson />
          <span className={style.action_name}>Profile</span>
        </div>

        <div className={style.action_container}>
          <RiHeartPulseFill />
          <span className={style.action_name}>Wishlist</span>
        </div>
        <Link className={style.action_container} to="/bag">
          <FiShoppingCart />
          <span className={style.action_name}>Bag</span>
          <span className={style.bag_item_count}>{bag.length}</span>
        </Link>
      </div>
    </header >
    <nav className={style.mobile_menu} style={{ display: showmenu ? "none" : "flex" }} >
      <a href="#">Men</a>
      <a href="#">Women</a>
      <a href="#">Kids</a>
      <a href="#">Home & Living</a>
      <a href="#">Beauty</a>
      <a href="#">Studio</a>
    </nav>
  </>
}
export default Header;