import style from "./footer.module.css"
function Footer() {
  return <footer className={style.footer}>
    <div className={style.footer_container}>
      <div className={style.footer_column}>
        <h3>MEN SHOPPING</h3>

        <a href="#">Top</a>
        <a href="#">Bottom</a>
        <a href="#">Shirts</a>
        <a href="#">Jeans</a>
        <a href="#">Winter collection</a>
        <a href="#">Belts</a>
      </div>

      <div className={style.footer_column}>
        <h3>WOMEN SHOPPING</h3>

        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">Gift Card</a>
      </div>
    </div>
    <hr />

    <div className={style.copyright}>
      © 2023 www.myntra.com. All rights reserved.
    </div>
  </footer>
}
export default Footer;