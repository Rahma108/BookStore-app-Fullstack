
import Navbar from '../../components/common/Navbar.jsx'
import BestPicks from '../../components/common/Product.jsx'
import HeroSection from '../../components/common/Landing.jsx'

function Home() {

  return (
    <div>
        {/* Nav Bar ............. */}
        <Navbar />
        {/* <Landing /> */}
        <HeroSection />
      {/* Product */}
        <BestPicks/>
    </div>
  )
}

export default Home