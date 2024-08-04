import './Hero.css'

function Hero(){

return(
    <div className="Hero">
        <div className='HeroContent'>
            <h1>YOUR FEET DESERVES THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="Hero-btn">
                <button className='shop-btn'>Shop Now</button>
                <button className='category-btn'>Category</button>
            </div>
            <div className="bottom-left">
                <p>Also Available on</p>
                <div className="brand-logos">
                    <img src="/images/amazon.png" alt="amazon" />
                    <img src="/images/flipkart.png" alt="Flipkart" />
                </div>
            </div>
        </div>
        <div className="HeroImg">
            <img src="/images/shoe_image.png" alt="Shoe" />
        </div>

    </div>
)
}


export default Hero