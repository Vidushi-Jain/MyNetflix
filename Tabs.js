import React from 'react'
import { tabLabels } from './Constant'
import "./Tabs.css"
import { Link } from 'react-router-dom'

const Tabs = ({ activeTabName, onClickTab }) => {
    const { CANCEL_AT_ANY_TIME, PICK_YOUR_PRICE, WATCH_ANYWHERE } = tabLabels;

    const renderTabTitle = (tabTitle, isActive, icon, id) => (
        <div onClick={() => onClickTab(tabTitle)} id={id} className={`tab-items ${isActive && "tab-border"}`}>
            <i className={icon}></i>
            <p>{tabTitle}</p>
        </div>
    )
    return (
    <>
    <section className='tabs'>
                <div className="container">
                    {
                        renderTabTitle(
                        CANCEL_AT_ANY_TIME,
                        activeTabName === CANCEL_AT_ANY_TIME,
                        "fas fa-door-open fa-3x ",
                        "tab-1"
                    )
                    }
                    { 
                        renderTabTitle(
                        WATCH_ANYWHERE,
                        activeTabName === WATCH_ANYWHERE,
                        "fas fa-tablet-alt fa-3x",
                        "tab-2"
                    )

                    }

                    { 
                       renderTabTitle(
                        PICK_YOUR_PRICE,
                        activeTabName === PICK_YOUR_PRICE,
                        "fas fa-tags fa-3x ",
                        "tab-3"
                    )
                    }
                </div>
            </section>


            {
                activeTabName === CANCEL_AT_ANY_TIME &&
                (
                    <section className='tab-content'>
                        <div className="container">
                            <div id="tab-1-content" className={`tab-container-item ${CANCEL_AT_ANY_TIME && "show"}`}></div>
                            <div>
                                <p className="text-lg">
                                    If you have decided Netflix isn't for use,no problem.No commitment.Cancel online anytime.
                                </p>
                                <Link to='\netflixShow' className="btn btn-lg">
                                    Watch for free 30 days
                                </Link>
                            </div>
                            <img src="http://i.ibb.co/J2xDJV7/tab-content-1.png" alt="not found" />
                        </div>
                    </section>
                )
            }
            
                { activeTabName === WATCH_ANYWHERE && (
                    <section className='tab-content'>
                        <div className="container">
                            <div id="tab-2-content-top">
                                <p className="tab-2-content-top">
                                    WATCH tvs SHOWS AND MOVIES ANYTIME,ANYWHERE PERSONALIZED FOR YOU
                                </p>
                                <Link to='./netflixShow' className='btn btn-lg'>
                                    Watch Free for 30 days
                                </Link>
                            </div>
                            <div >
                             <img src="http://i.ibb.co/DpdN7Gn/tab-content-2-1.png" alt="not found"></img>
                             <p className='text-md'></p>
                             <p className='text-dark'>
                             Smart TVs, Playstation,Xbox, Chromecast,Apple Tv,Blu-ray Player and more
                             </p>
                             <div>
                             <img src="http://i.ibb.co/R3r1SPX/tab-content-2-1.png" alt="not found"></img>
                             <p className='text-md'>Watch on your TV</p>
                             <p className='text-dark'>AVAILABLE ON PHONE AND TABLET</p>
                             </div>
                             <div>
                             <img src="http://i.ibb.co/gDhnwWn/tab-content-2-1.png" alt="not found"></img>
                             <p className='text-md'>USE YOUR COMPUTER</p>
                             <p className='text-dark'>
                             WATCH RIGHT ON NETFLIX.COM</p>
                            </div>
                            </div>
                            
                        </div>
                    </section>
                
                )
            }
            {activeTabName === PICK_YOUR_PRICE &&(
                <section className='tab-content'>
                <div className='container'>
                <div id='tab-3-content' className={`tab-2-content-items ${activeTabName===PICK_YOUR_PRICE &&'show'}`}>
                <div className='text-center'>
                <p className='text-lg'>
            
                Choose one month plan and watch everything on NETFLIX</p>
                
                <Link to="/netflixShow" className='btn-header btn-x1'>
                WATCH for 30 days
                </Link>
                </div>
                </div>
                <div>
                <table className='table'>
                <thead>
                <tr>
                  <td>        </td>
                  <td>BASIC</td>
                  <td>STANDARD</td>
                  <td>PREMIUM</td>
                </tr>
                </thead>
                <body>
                <tr>
                  <td> Monthly price after free months ends on 12/03/2023</td>
                  <td>$6.99</td>
                  <td>$11.99</td>
                  <td>$15.99</td>
                </tr>
                <tr>
                  <td> HD available</td>
                  <td>
                    <i className='fas fa-times'></i>
                  </td>
                  <td>
                  <i className='fas fa-check'></i>
                  </td>
                  <td><i className='fas fa-check'></i></td>
                </tr>
                <tr>
                  <td>Ultra HD available</td>
                  <td>
                    <i className='fas fa-times'></i>
                  </td>
                  <td>
                  <i className='fas fa-times'></i>
                  </td>
                  <td><i className='fas fa-check'></i></td>
                </tr>
                <tr>
                  <td>Screen you can watch on at the same time</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Watch on your laptop, tv phone tablet </td>
                  <td>
                    <i className='fas fa-check'></i>
                  </td>
                  <td>
                  <i className='fas fa-check'></i>
                  </td>
                  <td><i className='fas fa-check'></i></td>
                </tr>
                <tr>
                  <td>Unlimited movies and TVs shows</td>
                  <td>
                    <i className='fas fa-check'></i>
                  </td>
                  <td>
                  <i className='fas fa-check'></i>
                  </td>
                  <td><i className='fas fa-check'></i></td>
                </tr>
                <tr>
                  <td>Cancel anytime</td>
                  <td>
                    <i className='fas fa-check'></i>
                  </td>
                  <td>
                  <i className='fas fa-check'></i>
                  </td>
                  <td><i className='fas fa-check'></i></td>
                </tr>
                <tr>
                  <td>First month free</td>
                  <td>
                    <i className='fas fa-check'></i>
                  </td>
                  <td>
                  <i className='fas fa-check'></i>
                  </td>
                  <td><i className='fas fa-check'></i></td>
                </tr>
               
    
                </body>
              </table>
            </div>
    
                
                
                </div>
                
                </section>
            )}
         </>
    )
        }   
            export default Tabs
