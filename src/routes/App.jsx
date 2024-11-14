import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Fetchitem from '../components/Fetchitem'
import Loader from '../components/Loader'
import { useSelector } from 'react-redux'

function App() {
  const fetchStatus = useSelector((state) => state.fetchStatus)

  return (
    <>
      <Header></Header>
      <Fetchitem></Fetchitem>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}
export default App
