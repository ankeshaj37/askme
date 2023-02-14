import React from 'react'
import './Home.css'

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
                    <div className=' imageboxx col-lg-6'>
                        <img className='imgaecard' src='https://www.attrievents.com/files/albumsmodule/5874bf0eb4c97/album85/_thumb.c1.w1200.h1200/img_bk_05.jpg' />
                    </div>
                    <div className=' imageboxx col-lg-6'>
                        <h2>Event Management Team</h2>
                        <h5>Event Manager in Low Cost</h5>
                        <p>Event Manager in Low Cost</p>
                        <div class="button_slide slide_down">Check with seller</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
