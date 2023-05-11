import React from "react";
import './Home.css';
import Header from './Header'
import Product from './Product'

function Home () {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/Travel/Flights/April_FlashSale/PC_Hero_3000x1200_CBCC_V2._CB591667014_.jpg"
                alt=""
                />

                <div className="home__row">
                    <Product 
                    id={123321}
                    title={"Redgear Cosmo 7,1 Usb Gaming Wired Over Ear Headphones With Mic With Virtual Surround Sound,50Mm Driver, Rgb Leds & Remote Control(Black)"} 
                    price={11.99} 
                    image={"https://m.media-amazon.com/images/I/71PhCZEGH7L._SX522_.jpg"}
                    rating={5}
                    />
                    <Product id={145432}
                    title={"Havit Mechanical Keyboard, Wired Compact PC Keyboard with Number Pad Red Switch Mechanical Gaming Keyboard 89 Keys for Computer/Laptop (Black)"}
                    price={42.99}
                    rating={4}
                    image={"https://m.media-amazon.com/images/I/71yGtauB-AL._AC_UY327_FMwebp_QL65_.jpg"}
                    />
                </div>
                <div className="home__row">
                    <Product 
                    id={122334}
                    title={"HP Pavilion Gaming 5th Gen AMD Ryzen 5 Processor 15.6 inches(39.6cm) FHD Gaming Laptop (8GB/512GB SSD/144 Hz/Windows 10 Home/MS Office/NVIDIA GTX 1650 4GB/Shadow Black), 15-ec2008AX, 1.98kg"}
                    price={45.99}
                    rating={4}
                    image={"https://m.media-amazon.com/images/I/51DmOWr3rnL._AC_UY327_FMwebp_QL65_.jpg"}
                    />
                    <Product 
                    id={154321}
                    title={"OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)"}
                    price={20.99}
                    rating={4}
                    image={"https://m.media-amazon.com/images/I/61QRgOgBx0L._AC_UY327_FMwebp_QL65_.jpg"}
                    />                   
                    <Product 
                    id={165432}
                    title={"realme Buds Air 3 Neo True Wireless in-Ear Earbuds with Mic, 30 hrs Playtime with Fast Charging and Dolby Atmos Support (Starry Blue)"}
                    price={10.00}
                    rating={4}
                    image={"https://m.media-amazon.com/images/I/61wnFKjF1EL._AC_UY327_FMwebp_QL65_.jpg"}
                    />
                </div>
                <div className="home__row">
                    <Product 
                    id={123456}
                    title={"Samsung 34-inches 86.42cm LED Odyssey G5 Ultra WQHD, 165 Hz, 1ms, 1000R Curved Gaming Monitor, HDR10, AMD FreeSync Premium -LC34G55TWWWXXL, Black, 3440 X 1440 (WQHD) Pixels"}
                    price={40.49}
                    rating={4}
                    image={"https://m.media-amazon.com/images/I/71it2biogSS._SX522_.jpg"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;