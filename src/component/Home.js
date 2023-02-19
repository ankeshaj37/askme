import React from 'react'


const Home = () => {
    return (
        <div>
            <div className='aa row'>
                <div class="search-box">
                    <input type="text" name="name" class="search-txt" placeholder="Search" />
                    <a class="search-btn" href="#">
                        <img className='serchbtn' src='https://img.icons8.com/ios-filled/256/search.png'></img>
                    </a>
                </div>
            </div>
            <div className='container'>
                <div className=' boxx row'>
                    <div className='divim'>
                    <div className=' imageboxx col-lg-6'>
                        <img className='sssa' src='https://img3.gadgetsnow.com/gd/images/products/additional/large/G390864_View_1/mobiles/smartphones/apple-iphone-14-pro-max-512-gb-deep-purple-6-gb-ram-.jpg' />
                    </div>
                    </div>
                    <div className=' col-lg-6'>


                        <div class="main-description px-2 text-center">
                            <div class="product-title text-bold my-1">
                               <h2>IPHONE 15 PRO</h2>
                            </div>

                            <div class="price-area my-4">
                          
                                <p class="new-price text-bold mb-2"> ₹8,000,00</p>
                                <p class="text-secondary mb-1">( Additional tax may apply on checkout )</p>
                            </div>
                            <div class="m-2">
                               <button>Buy Now</button>
                               <button>Leaen More</button>
                            </div>
                        </div>
                        <div class="row questions bg-light p-3">
                            <div class="col-md-1 icon">
                                <i class="fa-brands fa-rocketchat questions-icon"></i>
                            </div>
                            <div class="col-md-11 text">
                               <h6> Have a question about our products at E-Store? Feel free to contact our representatives via live chat or email.</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
