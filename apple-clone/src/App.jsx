import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'

// Import images
import macbookAir from './assets/images/macbook-air.svg'
import ipadAir from './assets/images/ipad-air.svg'
import iphone from './assets/images/iphone.svg'
import watch from './assets/images/watch.svg'
import watchLogo from './assets/images/apple-watch-logo.svg'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero 
          title="MacBook Air"
          subtitle="Sky blue color."
          description="Sky high performance with M4."
          image={macbookAir}
          bgColor="bg-[#f5f5f7]"
          textColor="text-apple-gray"
        />
        <Hero 
          title="iPad air"
          subtitle="Now supercharged by the M3 chip."
          image={ipadAir}
          bgColor="bg-[#f5f5f7]"
          textColor="text-apple-gray"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 bg-[#f5f5f7]">
          <ProductGrid 
            title="iPhone"
            subtitle="Meet the iPhone 16 family."
            image={iphone}
            bgColor="bg-white"
            textColor="text-apple-gray"
          />
          <ProductGrid 
            title="WATCH"
            subtitle="SERIES 10"
            description="Thinstant classic."
            image={watch}
            watchLogo={watchLogo}
            bgColor="bg-white"
            textColor="text-apple-gray"
          />
        </div>
      </main>
    </div>
  )
}

export default App
