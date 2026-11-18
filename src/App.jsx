import Footer from "./components/Footer"
import Card from "./components/card"
import Navbar from "./components/Navbar"
import Song from "./components/Song"
import { useState } from "react"


function App() {

  const [count, setcount] = useState(0)
  console.log(useState)

  const addvalue = () => {
    // setcount(count + 1)
    // setcount(count + 1)
    // setcount(count + 1)
    setcount((pre_count) => pre_count + 1)
    setcount((pre_count) => pre_count + 1)
    setcount((pre_count) => pre_count + 1)
    setcount((pre_count) => pre_count + 1)
    setcount((pre_count) => pre_count + 1)

  }

  return (
    <>
      <Navbar />
      <h1>BEN 10 </h1>
      <h1>{count}</h1>

      <div className="btn_div">
        <button className="btn_count text-black" onClick={addvalue}>Tap me </button>
      </div>
      
      {/* 
      <button clasname="btn_count"
        onClick={() => {
          setcount((prev) => prev + 1);
          setcount((prev) => prev + 1);
        }}
      >
        Click me
      </button> */}


      <div className="card-contain">

        <div className="upper-cont">

          <Card title="Heatblast" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwktWsCju07xv7RDqiBEouFVFum89kkTsqXK9_48GNBQ&s=10" description="Heatblast is a plasma-based humanoid alien from the Ben 10 franchise, belonging to the Pyronite species from the star-like planet Pyros. He is famously the very first alien transformation ever used by Ben Tennyson in the pilot episode of the original series." />

          <Card title="GreyMatter" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsgBSsCVE3KB30dLvQQQYxCDroWvlxUbn4AeEXCLsKJw&s=10" description="Grey Matter is a 5-inch-tall, frog-like alien belonging to the highly intelligent Galvan species. While he lacks physical strength, his superhuman intellect allows him to easily manipulate complex machinery and solve advanced scientific problems. His tiny size also makes him incredibly agile, enabling him to infiltrate tight spaces and escape danger by crawling up walls." />
        </div>

        <div className="center-cont">
          <Card title="DiomadHead" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFH5D6wJJMzyTAC9cnS4C6E-I-jcCpxag-siL1w-lx7g&s=1" description="Diamondhead is a beloved, silicon-based humanoid alien from the Ben 10 universe, belonging to the Petrosapien species from the crystal planet Petropia. He is recognized as one of Ben Tennyson's most versatile, heavy-hitting original transformations" />
        </div>

        <div className="bottom-cont">
          <Card title="Atomic-X" pic="https://preview.redd.it/everytime-i-see-atomic-x-this-comes-to-my-mind-v0-eckproi9v69g1.png?width=640&crop=smart&auto=webp&s=1c65ae6e87551bba0da66a4510e13568f92180ea" description="**Atomic-X** is a powerful fusion of Atomix and Alien X. He combines Atomix's immense energy powers with Alien X's reality-altering abilities. Atomic-X is incredibly powerful and can manipulate matter and energy on a massive scale." />

          <Card title="WayBig" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYT-2ihUyqwPd4lF8YAQw_a_ci1gHXs3BNLrXbXot49A&s=10" description="**Way Big** is a gigantic alien from the To'kustar species. He is incredibly strong and can grow to an enormous size. Way Big is known for his super strength, powerful cosmic energy attacks, and ability to fight extremely large enemies. He is one of Ben's most powerful aliens." />
        </div>

        < Song title="It's Ben 10"
          song="एक एलियन डिवाइस का असर हो गयाउसे बांधा जब कलाई पे, ग़ज़ब हो गयायह आम बच्चा देखो कितना ख़ास हो गयाHe's Ben 10!अनोखी शक्तियों का अब यह मालिक हो गयाजब चाहा, एक एलियन में बदल गयाUpgrade, Four Arms, Diamondheadया Ripjaws बन गयाHe's Ben 10!हो कोई कितना भी ताकतवरनही है इसे, किसी का भी डरहर दुश्मन से लड़ता येहाँ सारी दुनिया की हिफ़ाजत करता ये He's Ben 10!" />


      </div>

      <Footer />
    </>
  )
}

export default App
