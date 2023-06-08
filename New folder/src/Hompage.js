import React, {useEffect, useLayoutEffect, useState} from "react";
import './styles.css'
export function Navbar(){
    useEffect(() => {
        const bnbText = document.getElementById('bnb_word')
        const walletText = document.querySelector('.btn_cwallect')
        const buttons = document.querySelectorAll(".buttons");
        const options = document.querySelectorAll(".options");
        const images = document.querySelectorAll('.imgs');
        const globe = document.querySelector('#img_globe')
        const toggleButton = document.querySelector(".toggle")
        const options6 = document.getElementById('options6')
        const EarnBtn = document.querySelector('#earnBtn')
        const WinBtn = document.querySelector('#winBtn')
        const NftBtn = document.querySelector('#nftBtn')
        const DotsBtn = document.querySelector('#dotsBtn')
        const Earn = document.querySelector('#earn')
        const Win = document.querySelector('#win')
        const Nft = document.querySelector('#nft')
        const Dots = document.querySelector('#dots')
        const cWal = document.querySelector('.cWallet')

        function good() {
            if (window.matchMedia("(max-width: 1127px)").matches) {
                walletText.textContent ='Connect'
                bnbText.textContent = 'BNB';

            } else {
                walletText.textContent ='Connect Wallet'
                bnbText.textContent = 'BNB Smart Chain';
            }
            if (window.matchMedia("(max-width: 767px)").matches) {
                bnbText.innerHTML = '';
            }
        }
        var prevScrollPos = window.pageYOffset;
        var isScrollingUp = false;

        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;

            if (prevScrollPos > currentScrollPos) {
                // Scrolling up
                isScrollingUp = true;
                document.getElementById("navbar").style.top = "0";
            } else {
                // Scrolling down
                isScrollingUp = false;
                if (currentScrollPos > 1200) {
                    document.getElementById("navbar").style.top = "-100px";
                }
            }

            prevScrollPos = currentScrollPos;
        };

        window.onload = good;
        window.onresize = good;


        EarnBtn.addEventListener('mouseover',function (){
            Earn.style.display = 'flex'
            Win.style.display = 'none'
            Nft.style.display = 'none'
            Dots.style.display = 'none'
        })

        EarnBtn.addEventListener('mouseout',function (){
            Earn.style.display = 'none'
            Win.style.display = 'none'
            Nft.style.display = 'none'
            Dots.style.display = 'none'
        })
        WinBtn.addEventListener('mouseover',function (){
            Earn.style.display = 'none'
            Win.style.display = 'flex'
            Nft.style.display = 'none'
            Dots.style.display = 'none'
        })
        WinBtn.addEventListener('mouseout',function (){
            Earn.style.display = 'none'
            Win.style.display = 'none'
            Nft.style.display = 'none'
            Dots.style.display = 'none'
        })
        NftBtn.addEventListener('mouseover',function (){
            Earn.style.display = 'none'
            Win.style.display = 'none'
            Nft.style.display = 'flex'
            Dots.style.display = 'none'
        })
        NftBtn.addEventListener('mouseout',function (){
            Earn.style.display = 'none'
            Win.style.display = 'none'
            Nft.style.display = 'none'
            Dots.style.display = 'none'
        })
        DotsBtn.addEventListener('mouseover',function (){
            Earn.style.display = 'none'
            Win.style.display = 'none'
            Nft.style.display = 'none'
            Dots.style.display = 'flex'
        })
        DotsBtn.addEventListener('mouseout',function (){
            Earn.style.display = 'none'
            Win.style.display = 'none'
            Nft.style.display = 'none'
            Dots.style.display = 'none'
        })
        buttons.forEach((button, index) => {
            let timeoutId;
            const divs = options[index]
            button.addEventListener("mouseover", function showOptions() {
                options[index].style.visibility = "visible";
                divs.addEventListener("mouseover", function showOptions() {
                    options[index].style.visibility = "visible";
                });
            });

//
            button.addEventListener('mouseout', () => {
                timeoutId = setTimeout(() => {
                    hideBoth();
                }, 50);
                divs.addEventListener('mouseout', () => {
                    hideBoth();
                });
            });


            // Function to hide the div
            function hideBoth() {
                // Only hide the div if both the button and the div are not currently being hovered over
                const buttonNotHovered = !button.matches(':hover');
                const divNotHovered = !divs.matches(':hover');

                if (buttonNotHovered && divNotHovered) {
                    divs.style.visibility = 'hidden';
                }
            }

        })

        globe.addEventListener('mouseover', function todo() {
            options[5].style.visibility = "visible";
            options[5].style.display = "flex";
            options[5].id = 'options72'
            options[5].addEventListener("mouseover", function showOptions() {
                options6.style.visibility = "visible";
            });
        })
        globe.addEventListener('mouseout', function () {
            setTimeout(removes, 80);
            options[5].addEventListener('mouseout', () => {
                removes();
            });
        });

        function removes() {
            if (!globe.matches(':hover') && !options[5].matches(':hover')) {
                options[5].style.visibility = 'hidden';
                options[5].style.display = "none";

            }
        }

        function remove() {
            if (!bnbDiv.matches(':hover') && !options6.matches(':hover')) {
                options6.style.visibility = 'hidden';
                options6.style.display = "none";
            }
        }


        const bnbDiv = document.querySelector('#div_bnb')
        bnbDiv.addEventListener('mouseover', function todo() {
            options6.style.visibility = "visible";
            options6.style.display = "flex";
            options6.addEventListener("mouseover", function showOptions() {
                options[5].style.visibility = "visible";
            });
        })
        bnbDiv.addEventListener('mouseout', function () {
            setTimeout(remove, 60);
            options6.addEventListener('mouseout', () => {
                remove();
            });
        });
    }, []);

        return(
            <div id="navbar" className="navbar">
                <div id="sep1" className="sep1">
                    <div id="sec1" className="sec_1">
                        <a href="index.html">
                            <img className="imgs" id="img_beer" src="images/beer.svg" />
                        </a>
                        <span className="ps_word" id="ps_word">
          PancakeSwap
        </span>
                    </div>
                    <div className="sec_2">
                        <div id="TradeDiv1" className="TradeDiv">
                            <button className="buttons" id="btn_trade">
                                Trade <span className="scale_borders" />
                            </button>
                            <div className="options" id="options1">
                                <a id="oo" href="swap.html">
                                    <span className="opt_kids">Swap</span>
                                </a>
                                <span className="opt_kids">Liquid</span>
                                <span className="opt_kids">Liquidity</span>
                                <span className="opt_kids" id="perpetual">Perpetual<img src="images/l-arrow.svg" /></span>
                                <span className="opt_kids" id="bridge">Bridge<img src="images/l-arrow.svg" /></span>
                            </div>
                        </div>
                        <div id="TradeDiv2" className="TradeDiv">
                            <button className="buttons" id="btn_earn">
                                Earn <span className="scale_borders" />
                            </button>
                            <div className="options" id="options2">
                                <span id={'farms'} className="opt_kids">Farms</span>
                                <span id={'pl'} className="opt_kids">Pools</span>
                            </div>
                        </div>
                        <div id="TradeDiv3" className="TradeDiv">
                            <button className="buttons" id="btn_win">
                                Win
                                <span className="green_dot" />
                                <span className="scale_borders" />
                            </button>
                            <div className="options" id="options3">
                                <span id={'tr'} className="opt_kids">Trading Competition</span>
                                <span className="opt_kids">Prediction(BETA)</span>
                                <span className="opt_kids">Lottery</span>
                                <span className="opt_kids" id="potteryDiv">
              Pottery (BETA) <span className="pottery">POT OPEN</span>
            </span>
                            </div>
                        </div>
                        <div id="TradeDiv4" className="TradeDiv">
                            <button className="buttons" id="btn_nft">
                                NFT <span className="scale_borders" />
                            </button>
                            <div className="options" id="options4">
                                <span id={'ovr'} className="opt_kids">Overview</span>
                                <span className="opt_kids">Collections</span>
                                <span id={'act'} className="opt_kids">Activity</span>
                            </div>
                        </div>
                        <div id="TradeDiv5" className="TradeDiv">
                            <button className="buttons" id="btn_(... .)">
                                <span className="scale_borders" />
                                <span className="div_cir_dot" id="div_cir_dot">
              <span className="cir_dot" />
              <span className="cir_dot" />
              <span className="cir_dot" />
                                    &nbsp;
            </span>
                            </button>
                            <div className="options" id="options5">
                                <span id={'info'} className="opt_kids">Info</span>
                                <a id="ifo" href="IFO.html">
                                    <span className="opt_kids">IFO</span>
                                </a>
                                <span className="opt_kids">Voting</span>
                                <a id="o" href="affiliates-program.html">
                                    <span className="opt_kids">Affiliate Program</span>
                                </a>
                                <a id="ooo" href="leaderboard.html">
                                    <span className="opt_kids">Leaderboard</span>
                                </a>
                                <span className="opt_kids" id="blog">Blog <img src="images/l-arrow.svg" /></span>
                                <span className="opt_kids" id="docs">Docs <img src="images/l-arrow.svg" />{" "}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sep2" className="sep2">
                    <div className="sec_3" id="sec_3">
                        <img className="imgs" id="img_deer2" src="images/7186.png" />
                        <span className="api-price">$1.234</span>
                    </div>
                    <div id="sec4" className="sec_4">
                        <div id="TradeDiv6" className="TradeDiv2">
                            <img className="imgs" id="img_globe" src="images/globe.svg" />
                            <div className="options" id="options7">
                                    <span>العربية</span>
                                    <span>বাংলা</span>
                                    <span>Engspansh</span>
                                    <span>Deutsch</span>
                                    <span>Ελληνικά</span>
                                    <span>Español</span>
                                    <span>Suomalainen</span>
                                    <span>Fispanpino</span>
                                    <span>Français</span>
                                    <span>हिंदी</span>
                                    <span>Magyar</span>
                                    <span>Bahasa Indonesia</span>
                                    <span>Itaspanano</span>
                                    <span>日本語</span>
                                    <span>한국어</span>
                                    <span>Nederlands</span>
                                    <span>Polski</span>
                                    <span>Português (Brazil)</span>
                                    <span>Português</span>
                                    <span>Română</span>
                                    <span>Русский</span>
                                    <span>Svenska</span>
                                    <span>தமிழ்</span>
                                    <span>Türkçe</span>
                                    <span>Українська</span>
                                    <span>Tiếng Việt</span>
                                    <span>简体中文</span>
                                    <span>繁體中文</span>
                            </div>
                        </div>
                        <img className="imgs" id="img_settings" src="images/settings.svg" />
                        <div id="TradeDiv7" className="TradeDiv3">
          <span id="div_bnb" className="div_bnb">
            <img className="imgs" id="img_bnb" src="images/56.png" />
            <p id="bnb_word" className="bnb_word">BNB Smart Chain</p>
              <img className='darr' src='images/downarr.svg'/>
          </span>
                            <div id="options6">
                                <span id={'sln'} className="opt_kids">Select a network</span>
                                <span className="opt_kids">BNB Smart Chain</span>
                                <span className="opt_kids">Ethereum</span>
                                <span id={'apt'} className="opt_kids">Aptos</span>
                            </div>
                        </div>
                        <div className="btn_cwallect">Connect Wallet</div>
                    </div>

                </div>
            </div>
            )
}
export function Hompage(){
    useEffect(() => {



        // toggleButton.addEventListener("click", () => {
        //     if (toggleButton.checked){
        //         toggleButton.style.transform = "translate(100%)"
        //         document.querySelector('body').style.background='white'
        //
        //     }
        //     else{
        //         toggleButton.style.transform = "translate(-100%)"
        //         document.querySelector('body').style.background='#08060b'
        //     }
        // })
    }, [])
    return(
        <>
            <a href="#" className="page-up">
                <svg
                    viewBox="0 0 24 24"
                    color="invertedContrast"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-231a1e38-0 duevIU"
                    style={{ marginLeft: 0 }}
                >
                    <path d="M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z" />
                </svg>
            </a>
            <div className="cWallet"></div>
            <div id="navbar" className="navbar">
                <div id="sep1" className="sep1">
                    <div id="sec1" className="sec_1">
                        <a id="inn" href="index.html">
                            <img className="imgs" id="img_beer" src="images/beer.svg" />
                        </a>
                        <span className="ps_word" id="ps_word">
          PancakeSwap
        </span>
                    </div>
                    <div className="sec_2">
                        <div id="TradeDiv1" className="TradeDiv">
                            <button className="buttons" id="btn_trade">
                                Trade <span className="scale_borders" />
                            </button>
                            <div className="options" id="options1">
                                <a id="oo" href="swap.html">
                                    <span className="opt_kids">Swap</span>
                                </a>
                                <span className="opt_kids">Liquid</span>
                                <span className="opt_kids">Liquidity</span>
                                <span className="opt_kids" id="perpetual">
              Perpetual <img src="images/l-arrow.svg" />
            </span>
                                <span className="opt_kids" id="bridge">
              Bridge <img src="images/l-arrow.svg" />
            </span>
                            </div>
                        </div>
                        <div id="TradeDiv2" className="TradeDiv">
                            <button className="buttons" id="btn_earn">
                                Earn <span className="scale_borders" />
                            </button>
                            <div className="options" id="options2">
                                <span className="opt_kids">Farms</span>
                                <span className="opt_kids">Pools</span>
                            </div>
                        </div>
                        <div id="TradeDiv3" className="TradeDiv">
                            <button className="buttons" id="btn_win">
                                Win
                                <span className="green_dot" />
                                <span className="scale_borders" />
                            </button>
                            <div className="options" id="options3">
                                <span className="opt_kids">Trading Competition</span>
                                <span className="opt_kids">Prediction(BETA)</span>
                                <span className="opt_kids">Lottery</span>
                                <span className="opt_kids" id="potteryDiv">
              Pottery (BETA) <span className="pottery">POT OPEN</span>
            </span>
                            </div>
                        </div>
                        <div id="TradeDiv4" className="TradeDiv">
                            <button className="buttons" id="btn_nft">
                                NFT <span className="scale_borders" />
                            </button>
                            <div className="options" id="options4">
                                <span className="opt_kids">Overview</span>
                                <span className="opt_kids">Collections</span>
                                <span className="opt_kids">Activity</span>
                            </div>
                        </div>
                        <div id="TradeDiv5" className="TradeDiv">
                            <button className="buttons" id="btn_(... .)">
                                <span className="scale_borders" />
                                <span className="div_cir_dot" id="div_cir_dot">
              <span className="cir_dot" />
              <span className="cir_dot" />
              <span className="cir_dot" />
                                    &nbsp;
            </span>
                            </button>
                            <div className="options" id="options5">
                                <span className="opt_kids">Info</span>
                                <a id="ifo" href="IFO.html">
                                    <span className="opt_kids">IFO</span>
                                </a>
                                <span className="opt_kids">Voting</span>
                                <a id="o" href="affiliates-program.html">
                                    <span className="opt_kids">Affiliate Program</span>
                                </a>
                                <a id="ooo" href="leaderboard.html">
                                    <span className="opt_kids">Leaderboard</span>
                                </a>
                                <span className="opt_kids" id="blog">
              Blog <img src="images/l-arrow.svg" />
            </span>
                                <span className="opt_kids" id="docs">
              Docs <img src="images/l-arrow.svg" />{" "}
            </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sep2" className="sep2">
                    <div className="sec_3" id="sec_3">
                        <img className="imgs" id="img_deer2" src="images/7186.png" />
                        <span className="api-price">$1.234</span>
                    </div>
                    <div id="sec4" className="sec_4">
                        <div id="TradeDiv6" className="TradeDiv2">
                            <img className="imgs" id="img_globe" src="images/globe.svg" />
                            <div className="options" id="options7">
                                <ul className="list">
                                    <li>العربية</li>
                                    <li>বাংলা</li>
                                    <li>English</li>
                                    <li>Deutsch</li>
                                    <li>Ελληνικά</li>
                                    <li>Español</li>
                                    <li>Suomalainen</li>
                                    <li>Filipino</li>
                                    <li>Français</li>
                                    <li>हिंदी</li>
                                    <li>Magyar</li>
                                    <li>Bahasa Indonesia</li>
                                    <li>Italiano</li>
                                    <li>日本語</li>
                                    <li>한국어</li>
                                    <li>Nederlands</li>
                                    <li>Polski</li>
                                    <li>Português (Brazil)</li>
                                    <li>Português</li>
                                    <li>Română</li>
                                    <li>Русский</li>
                                    <li>Svenska</li>
                                    <li>தமிழ்</li>
                                    <li>Türkçe</li>
                                    <li>Українська</li>
                                    <li>Tiếng Việt</li>
                                    <li>简体中文</li>
                                    <li>繁體中文</li>
                                </ul>
                            </div>
                        </div>
                        <img className="imgs" id="img_settings" src="images/settings.svg" />
                        <div id="TradeDiv7" className="TradeDiv3">
          <span id="div_bnb" className="div_bnb">
            <img className="imgs" id="img_bnb" src="images/56.png" />
            <p id="bnb_word" className="bnb_word">
              BNB Smart Chain
            </p>
            <img
                className="imgs"
                id="down_arrow"
                src="images/down arrow.svg"
                alt=""
            />
          </span>
                            <div id="options6">
                                <span className="opt_kids">Select a network</span>
                                <span className="opt_kids">BNB Smart Chain</span>
                                <span className="opt_kids">Ethereum</span>
                                <span className="opt_kids">Aptos</span>
                            </div>
                        </div>
                    </div>
                    <div className="btn_cwallect">Connect Wallet</div>
                </div>
            </div>
            <main>
                <div className="div2_div3">
                    <div className="carousel-parent1">
                        <div className="carousel-parent2">
                            <div className="carousel-parent3">
                                <div className="carousel-parent4">
                                    <div className="carousel-parent5">
                                        <div className="carousel">
                                            <input
                                                type="radio"
                                                id="img1"
                                                name="carousel-radio"
                                                defaultChecked=""
                                            />
                                            <input type="radio" id="img2" name="carousel-radio" />
                                            <input type="radio" id="img3" name="carousel-radio" />
                                            <input type="radio" id="img4" name="carousel-radio" />
                                            <input type="radio" id="img5" name="carousel-radio" />
                                            <div className="carousel-slides">
                                                <div className="wrapper_slides">
                                                    <div className="box_slides">
                                                        <div className="slide" id="slide1">
                                                            <div className="first-slide">
                                                                <div className="box_slide1">
                                                                    <div className="carousel-animation">
                                                                        <div className="flag_slide1">
                                                                            <img
                                                                                src="images/v3LaunchFlag.webp"
                                                                                alt="flag-image"
                                                                            />
                                                                        </div>
                                                                        <div className="rock_slide1">
                                                                            <img
                                                                                className="bigRock"
                                                                                src="images/v3LaunchBg.webp"
                                                                                alt="moon-image"
                                                                            />
                                                                            <img
                                                                                className="smallRock"
                                                                                src="images/v3LaunchBgMobile.webp"
                                                                                alt="moon-image"
                                                                            />
                                                                        </div>
                                                                        <div className="bunny_slide1">
                                                                            <img
                                                                                className="bigBunny"
                                                                                src="images/v3LaunchBunny.webp"
                                                                                alt="bunny-image"
                                                                            />
                                                                            <img
                                                                                className="smallBunny"
                                                                                src="images/v3LaunchBunnyMobile.png"
                                                                                alt="bunny-image"
                                                                            />
                                                                        </div>
                                                                        <div className="bnb_slide1">
                                                                            <img
                                                                                src="images/v3LaunchBnb.webp"
                                                                                alt="bnb-image"
                                                                            />
                                                                        </div>
                                                                        <div className="eth_slide1">
                                                                            <img
                                                                                src="images/v3LaunchEth.webp"
                                                                                alt="eth-image"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="wording_slide1">
                                                                        <div className="written_slide1">
                                                                            <div className="title_slide1">
                                                                                Ev3ryone's Favorite D3X
                                                                            </div>
                                                                            <div className="text_slide1">
                                    <span className="icon_slide1">
                                      <img
                                          src="images/bunny-icon-slides.svg"
                                          alt="bunny-icon"
                                      />
                                    </span>
                                                                                PancakeSwap v3 is live!
                                                                            </div>
                                                                        </div>
                                                                        <div className="discover_slide1">
                                                                            <div className="discover-carousel">
                                                                                <button
                                                                                    className="discover_slide1_button"
                                                                                    href="https://perp.pancakeswap.finance/en/futures/BTCUSDT?theme=dark&chain=bnbchain"
                                                                                >
                                                                                    Discover V3
                                                                                    <div>
                                                                                        <img
                                                                                            className="discover-icon"
                                                                                            src="images/discover-icon.svg"
                                                                                            alt="learn image"
                                                                                        />
                                                                                    </div>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="slide" id="slide2">
                                                            <img
                                                                className="images"
                                                                src="images/2-1200.png"
                                                                alt="Image 2"
                                                            />
                                                        </div>
                                                        <div className="slide" id="slide3">
                                                            <img
                                                                className="images"
                                                                src="images/3-1200.png"
                                                                alt="Image 3"
                                                            />
                                                        </div>
                                                        <div className="slide" id="slide4">
                                                            <img
                                                                className="images"
                                                                src="images/4-1200.png"
                                                                alt="Image 4"
                                                            />
                                                        </div>
                                                        <div className="slide" id="slide5">
                                                            <img
                                                                className="images"
                                                                src="images/5-1200.png"
                                                                alt="Image 5"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-options">
                                                <label htmlFor="img1" checked="" />
                                                <label htmlFor="img2" />
                                                <label htmlFor="img3" />
                                                <label htmlFor="img4" />
                                                <label htmlFor="img5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="astro_enclosure1" className="astro_enclosure1">
                        <div className="moon_is_made_of_pancakes" id="moon_is_made_of_pancakes">
                            <div className="astro_word_div" id="astro_word_div">
            <span className="astro_heading" id="astro_heading">
              The moon is made of pancakes.
              <p className="astro_pa">
                Trade, earn, and win crypto on the most popular decentralized
                platform in the galaxy.
              </p>
            </span>
                                <div className="btn_tc_div">
                                    <button className="btn_cwallect2">Connect Wallet</button>
                                    <span className="btn_trade_now">Trade Now</span>
                                </div>
                            </div>
                            <div className="animation_div" id="animation_div">
                                <img
                                    className="img_astronaut"
                                    id="img_astronaut"
                                    src="images/astronaut-bunny.png"
                                />
                                <img className="top_star" src="images/star-top-r@2x.webp" />
                                <img className="bottom_star" src="images/star-r@2x.webp" />
                                <img className="bottom_star" src="images/star-l@2x.webp" />
                            </div>
                        </div>
                    </div>
                    <svg
                        className="div3-div4-svg"
                        color="text"
                        id="wavy_line"
                        viewBox="0 0 1660 339"
                        width="100%"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id="gradient" x1={0} x2={1} y1={0} y2={0}>
                                <stop offset="85%" stopColor="#0a080e" />
                                <stop offset="100%" stopColor="#181227" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M0 304.5C267.5 290.522 520.5 167.023 804 167.023C1104 167.023 1358.83 0.5 1660 0.5V339H0V304.5Z"
                            fill="url(#gradient)"
                        />
                    </svg>
                </div>
                <div className="div4_parent_container">
                    <div className="div4_container">
                        <div className="div4">
                            <img className="div4_svg1" src="images/div4_1.svg" />
                            <h2 id="div4_text1">Used by millions.</h2>
                            <h2 id="div4_text2">Trusted with billions.</h2>
                            <div id="div4_text3">
                                PancakeSwap has the most users of any decentralized platform, ever.
                            </div>
                            <div id="div4_text4">
                                And those users are now entrusting the platform with over $3.2
                                billion in funds.
                            </div>
                            <div id="div4_text5">Will you join them?</div>
                            <div className="div4_box1">
                                <div className="div4_box2">
                                    <div className="div4_box3">
                                        <div className="div4_box4">
                                            <div className="div4_box5">
                                                <div className="div4_svg4">
                                                    <img src="images/div4_2a.svg" />
                                                </div>
                                                <h2 className="div4_box_a_text1">1.6 million</h2>
                                                <h2 id="div4_box_a_text1a">users</h2>
                                                <div id="div4_box_a_text1b">in the last 30 days</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="div4_box2">
                                    <div className="div4_box3">
                                        <div className="div4_box4">
                                            <div className="div4_box5">
                                                <div className="div4_svg4">
                                                    <img src="images/div4_2b.svg" />
                                                </div>
                                                <h2 className="div4_box_a_text1">21 million</h2>
                                                <h2 id="div4_box_a_text2a">trades</h2>
                                                <div id="div4_box_a_text1b">made in the last 30 days</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="div4_box2">
                                    <div className="div4_box3">
                                        <div className="div4_box4">
                                            <div className="div4_box5">
                                                <div className="div4_svg4">
                                                    <img src="images/div4_2c.svg" />
                                                </div>
                                                <h2 className="div4_box_a_text1">$3.2 billion</h2>
                                                <h2 id="div4_box_a_text3a">staked</h2>
                                                <div id="div4_box_a_text1b">Total Value Locked</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transition_div4_div5">
                    <img
                        alt="transition_div4_div5"
                        className="transition_div4_div5"
                        src="images/transition_div4_div5.png"
                    />
                </div>
                <div className="trade_anything">
                    <div className="bigger-box">
                        <div className="box">
                            <div className="writing_trade">
                                <h2 className="text_trade">
                                    <span className="trade">Trade</span> anything. No registration, no
                                    hassle.
                                </h2>
                                <div className="subtext_trade">
                                    Trade any token on BNB Smart Chain in seconds, just by connecting
                                    your wallet.
                                </div>
                                <div className="buttons_trade">
                                    <button className="Trade_Now_trade">Trade Now</button>
                                    <a
                                        className="Learn_trade"
                                        href="https://docs.pancakeswap.finance/products/yield-farming"
                                    >
                                        Learn
                                        <div className="Learn_trade_svg">
                                            <img
                                                alt="learn image"
                                                className="Learn_trade_svg"
                                                src="images/learn.svg"
                                            />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="trade-box1">
                                <div className="img_trade">
                                    <div className="animation_trade">
                                        <img
                                            alt="BNB token"
                                            id="trade_bnb_img"
                                            srcSet="images/BNB_trade_anything.jpg"
                                        />
                                        <img
                                            alt="BTC token"
                                            id="trade_btc_img"
                                            srcSet="images/BTC_trade_anything.jpg"
                                        />
                                        <img
                                            alt="CAKE token"
                                            id="trade_cake_img"
                                            srcSet="images/CAKE_trade_anything.jpg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transition_div5_div6">
                    <img
                        alt="transition_div5_div6"
                        className="transition_div5_div6"
                        src="images/transition_div5_div6.png"
                    />
                </div>
                <div className="div6earnpassive">
                    <section id="div6upperpart" className="div6upperpart">
                        <div id="div6images" className="div6images">
                            <img
                                src="images/pie@2x.webp"
                                id="div6pieimg"
                                className="div6pieimg"
                            />
                            <img
                                src="images/stonks@2x.webp"
                                id="div6stonksimg"
                                className="div6stonksimg"
                            />
                            <img
                                src="images/folder@2x.webp"
                                id="div6folderimg"
                                className="div6folderimg"
                            />
                        </div>
                        <div className="div6content">
                            <h2 id="div6text1" className="div6text1">
                                <span className="div6purple">Earn</span> passive income with crypto.
                            </h2>
                            <p className="div6text2">
                                PancakeSwap makes it easy to make your crypto work for you.
                            </p>
                            <div className="div6_content_bottom">
                                <button className="div8_buycake" id="div6_explore">
                                    <a
                                        href="https://pancakeswap.finance/farms"
                                        className="div8_buycake_anchor"
                                    >
                                        Explore
                                    </a>
                                </button>
                                <a
                                    href="https://docs.pancakeswap.finance/tokenomics/cake"
                                    className="div8_learn"
                                    id="div6_learn"
                                >
                                    Learn
                                    <img src="images/div8_1.svg" />
                                </a>
                            </div>
                        </div>
                    </section>
                    <div className="btmm">
                        <h1 className="div6topsyruppoolstext">
                            Top&nbsp;
                            <span className="div6purple">
            <span className="d6farms">Farms</span>
          </span>
                            <button name="arrows" className="div6_switch">
                                <img src="images/arrows.svg" />
                            </button>
                        </h1>
                        <div className="div6topsyruppools">
                            <div id="div6_visible" className="div6_visible">
                                <div className="div6firstc">
                                    <p className="div6line1">LVL-BNB LP</p>
                                    <p className="aprnumber">167.353%</p>
                                    <p className="aprtext">APR</p>
                                </div>
                                <div className="div6secondc">
                                    <p className="div6line1">ARV-BNB LP</p>
                                    <p className="aprnumber">78.037%</p>
                                    <p className="aprtext">APR</p>
                                </div>
                                <div id="div6thirdc" className="div6thirdc">
                                    <p className="div6line1">KRS-BUSD LP</p>
                                    <p className="aprnumber">73.954%</p>
                                    <p className="aprtext">APR</p>
                                </div>
                                <div id="div6forthc" className="div6forthc">
                                    <p className="div6line1">SQUAD-CAKE LP</p>
                                    <p className="aprnumber">72.121%</p>
                                    <p className="aprtext">APR</p>
                                </div>
                                <div id="div6fifthc" className="div6fifthc">
                                    <p className="div6line1">CEEK-BNB</p>
                                    <p className="aprnumber">63.986%</p>
                                    <p id="aprtext">APR</p>
                                </div>
                            </div>
                            <div id="div6_hidden" className="div6_hidden">
                                <div className="div6firstc">
                                    <p className="div6line1">Stake CAKE</p>
                                    <p className="aprnumber">42.862%</p>
                                    <p className="aprtext">APR</p>
                                </div>
                                <div className="div6secondc">
                                    <p className="div6line1">Stake CAKE - Earn LVL</p>
                                    <p className="aprnumber">69.329%</p>
                                    <p className="aprtext">APR</p>
                                </div>
                                <div id="div6thirdc" className="div6thirdc">
                                    <p className="div6line1">Stake CAKE - Earn SD</p>
                                    <p className="aprnumber">20.739%</p>
                                    <p className="aprtext">APR</p>
                                </div>
                                <div id="div6forthc" className="div6forthc">
                                    <p className="div6line1">Stake CAKE - Earn PSTAKE</p>
                                    <p className="aprnumber">20.683%</p>
                                    <p className="aprtext">APR</p>
                                </div>
                                <div id="div6fifthc" className="div6fifthc">
                                    <p className="div6line1">Stake CAKE - Earn axlUSDC</p>
                                    <p className="aprnumber">18.081%</p>
                                    <p className="aprtext">APR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div7_parent">
                    <div id="div7winmillions" className="div7winmillions">
                        <div id="div7frame" className="div7frame">
                            <div id="div7caption1">
                                <h1 id="div7h1">
                                    <span className="div6purple">Win&nbsp;</span>millions in prizes
                                </h1>
                                <p id="div7p1">
                                    Provably fair, on-chain games.
                                    <br />
                                    Win big with PancakeSwap.
                                </p>
                            </div>
                            <div id="div72cards" className="div72cards">
                                <div className="div7yellowcard" id="div7yellowcard">
                                    <img src="images/magicball.svg" id="div7magicball" />
                                    <div id="div7yctext">
                                        <p id="div7yctext1">Prediction</p>
                                        <h1 id="div7yctext2">$1.2 billion</h1>
                                        <p id="div7yctext3">in BNB + CAKE won so far</p>
                                        <p id="div7yctext4">
                                            Predict the price trend of BNB or CAKE to win
                                        </p>
                                    </div>
                                    <button className="div8_buycake" id="div7_play">
                                        <a
                                            href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56"
                                            className="div8_buycake_anchor"
                                        >
                                            Play{" "}
                                            <svg
                                                viewBox="0 0 24 24"
                                                color="invertedContrast"
                                                width="20px"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="sc-231a1e38-0 bmGvXN"
                                            >
                                                <path d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z" />
                                            </svg>
                                        </a>
                                    </button>
                                </div>
                                <div className="div7purplecard" id="div7purplecard">
                                    <img src="images/div7ticket.svg" id="div7ticket" />
                                    <p id="div7pctext1">Lottery</p>
                                    <p id="div7pctext2">$58,915</p>
                                    <p id="div7pctext3">in CAKE prizes this round</p>
                                    <p id="div7pctext4">
                                        Buy tickets with CAKE, win CAKE if your numbers match
                                    </p>
                                    <button className="div8_buycake" id="div7_buytickets">
                                        <a
                                            href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56"
                                            className="div8_buycake_anchor"
                                        >
                                            Buy Tickets{" "}
                                            <svg
                                                viewBox="0 0 24 24"
                                                color="invertedContrast"
                                                width="20px"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="sc-231a1e38-0 bmGvXN"
                                            >
                                                <path d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z" />
                                            </svg>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div id="div7images">
                            <img src="images/2@2x.webp" id="div7ball2" className="div7ball2" />
                            <img
                                src="images/bottom-left@2x.webp"
                                id="div7greenbottomcard"
                                className="div7greenbottomcard"
                            />
                            <img
                                src="images/card-top-right@2x.webp"
                                id="div7greencard"
                                className="div7greencard"
                            />
                            <img
                                src="images/green@2x.webp"
                                id="div7bluecard"
                                className="div7bluecard"
                            />
                            <img
                                src="images/red@2x.webp"
                                id="div7redcard"
                                className="div7redcard"
                            />
                            <img src="images/4@2x.webp" id="div7ball4" className="div7ball4" />
                            <img src="images/6@2x.webp" id="div7ball6" className="div7ball6" />
                            <img src="images/7@2x.webp" id="div7ball7" className="div7ball7" />
                            <img src="images/9@2x.webp" id="div7ball9" className="div7ball9" />
                        </div>
                    </div>
                </div>
                <div className="div8_parent_container">
                    <div className="div8_container">
                        <div className="div8_top">
                            <div className="div8_top_left">
                                <h2 id="div8_text1">
                                    <span>CAKE </span>makes the world go round.
                                </h2>
                                <div id="div8_text2">
                                    CAKE token is at the heart of the PancakeSwap ecosystem. Buy it,
                                    win it, farm it, spend it, stake it... heck, you can even vote
                                    with it!
                                </div>
                                <div className="div8_top_left_buttons">
                                    <button className="div8_buycake">
                                        <a
                                            href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56"
                                            className="div8_buycake_anchor"
                                        >
                                            Buy CAKE
                                        </a>
                                    </button>
                                    <a
                                        href="https://docs.pancakeswap.finance/tokenomics/cake"
                                        className="div8_learn"
                                    >
                                        Learn
                                        <img src="images/div8_1.svg" />
                                    </a>
                                </div>
                            </div>
                            <div className="div8_top_right">
                                <div className="div8_tr_top_right">
                                    <img src="images/div8_top-right@2x.webp" />
                                </div>
                                <div className="div8_tr_bottom_right">
                                    <img src="images/div8_bottom-right@2x.webp" />
                                </div>
                                <div className="div8_tr_middle">
                                    <img src="images/div8_coin@2x.webp" />
                                </div>
                                <div className="div8_tr_top_left">
                                    <img src="images/div8_top-left@2x.webp" />
                                </div>
                            </div>
                        </div>
                        <div className="div8_bottom">
                            <div className="div8_b_t1">
                                <div className="div8_grid_title">Circulating Supply</div>
                                <div className="div8_grid_text">187,327,376</div>
                            </div>
                            <div className="div8_b_t2">
                                <div className="div8_grid_title">Total Supply</div>
                                <div className="div8_grid_text">383,780,561</div>
                            </div>
                            <div className="div8_b_t3">
                                <div className="div8_grid_title">Max Supply</div>
                                <div className="div8_grid_text">750,000,000</div>
                            </div>
                            <div className="div8_b_b1">
                                <div className="div8_grid_title">Market Cap</div>
                                <div className="div8_grid_text">$680 million</div>
                            </div>
                            <div className="div8_b_b2">
                                <div className="div8_grid_title">Burned to Date</div>
                                <div className="div8_grid_text">780,090,834</div>
                            </div>
                            <div className="div8_b_b3">
                                <div className="div8_grid_title">Current Emissions</div>
                                <div className="div8_grid_text">9.9/block</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="div9">
                    <div className="ninthdiv">
                        <div className="b4content">
                            <div className="pageinfo">
                                <div className="pagebox">
                                    <img
                                        src="images/div9svgs/first.svg"
                                        alt="firstsvg"
                                        className="firstsvg"
                                    />
                                </div>
                            </div>
                            <div className="many1">
                                <div className="many2">
                                    <div className="many3">
                                        <img src="images/1-bottom@2x.webp" className="coin1" />
                                        <div className="many4">
                                            <img
                                                src="images/1-bottom@2x.webp"
                                                alt="Pancake flying on the bottom"
                                                className="coin2"
                                            />
                                        </div>
                                        <div className="many4">
                                            <img
                                                src="images/1-left@2x.webp"
                                                alt="Pancake flying on the left"
                                                className="coin2"
                                            />
                                        </div>
                                        <div className="many4">
                                            <img
                                                src="images/1-top@2x.webp"
                                                alt="Pancake flying on the top"
                                                className="coin2"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="many5">
                                    <div className="many3">
                                        <img src="images/2-bottom@2x.webp" className="coin1" />
                                        <div className="many4">
                                            <img
                                                src="images/2-bottom@2x.webp"
                                                alt="Pancake flying on the bottom"
                                                className="coin2"
                                            />
                                        </div>
                                        <div className="many4">
                                            <img
                                                src="images/2-top@2x.webp"
                                                alt="Pancake flying on the top"
                                                className="coin2"
                                            />
                                        </div>
                                        <div className="many4">
                                            <img
                                                src="images/2-right@2x.webp"
                                                alt="Pancake flying on the right"
                                                className="coin2"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="many6">
                                <h2 className="firstsent">Start in seconds.</h2>
                                <div className="secsent">
                                    Connect your crypto wallet to start using the app in seconds.
                                </div>
                                <div className="register">No registration needed.</div>
                                <a href="https://docs.pancakeswap.finance/" className="education">
                                    Learn how to start
                                    <img
                                        src="images/div9svgs/sec.svg"
                                        alt="secsvg"
                                        className="secsvg"
                                    />
                                </a>
                                <button className="buttonwallet">Connect Wallet</button>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="scale_border" />
            </main>
            <footer>
                <div id="div10">
                    <div className="tenthdiv">
                        <div className="firstpancklogo">
                            <img
                                src="images/div9svgs/pancklogo.svg"
                                alt="Pancake Logo"
                                className="pancklogo"
                            />
                        </div>
                        <div className="content">
                            <ul className="contentlist">
                                <li id="about">About</li>
                                <li className="about-info">
                                    <a
                                        href="https://docs.pancakeswap.finance/contact-us"
                                        className="contacted"
                                    >
                                        Contact
                                    </a>
                                </li>
                                <li className="about-info">
                                    <a
                                        href="https://docs.pancakeswap.finance/brand"
                                        className="frombrand"
                                    >
                                        Brand
                                    </a>
                                </li>
                                <li className="about-info">
                                    <a href="https://docs.pancakeswap.finance/" className="frombrand">
                                        Blog
                                    </a>
                                </li>
                                <li className="about-info">
                                    <a
                                        href="https://docs.pancakeswap.finance/contact-us/telegram"
                                        className="frombrand"
                                    >
                                        Community
                                    </a>
                                </li>
                                <li className="about-info">
                                    <a
                                        href="https://v2litepaper.pancakeswap.finance/"
                                        className="frombrand"
                                    >
                                        Litepaper
                                    </a>
                                </li>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </ul>
                            <ul className="contentlist">
                                <li id="about">Help</li>
                                <li className="about-info">
                                    <a
                                        href="https://docs.pancakeswap.finance/contact-us/customer-support"
                                        className="frombrand"
                                    >
                                        Customer Support
                                    </a>
                                </li>
                                <li className="about-info">
                                    <a
                                        href="https://docs.pancakeswap.finance/help/troubleshooting"
                                        className="frombrand"
                                    >
                                        Troubleshooting
                                    </a>
                                </li>
                                <li className="about-info">
                                    <a
                                        data-theme="dark"
                                        href="https://docs.pancakeswap.finance/get-started"
                                        className="frombrand"
                                    >
                                        Guides
                                    </a>
                                </li>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </ul>
                            <ul className="contentlist">
                                <li id="about">Developers</li>
                                <li className="about-info">
                                    <a href="https://github.com/pancakeswap" className="frombrand">
                                        Github
                                    </a>
                                </li>
                                <li className="about-info">
                                    <a href="https://docs.pancakeswap.finance" className="frombrand">
                                        Documentation
                                    </a>
                                </li>
                                <li className="about-info">
                                    <a
                                        href="https://github.com/pancakeswap/code/bug-bounty"
                                        className="frombrand"
                                    >
                                        Bug Bounty
                                    </a>
                                </li>
                                <li className="about-info">
                                    <a
                                        href="https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited"
                                        className="frombrand"
                                    >
                                        Audits
                                    </a>
                                </li>
                                <li className="about-info">
                                    <a
                                        href="https://docs.pancakeswap.finance/hiring/become-a-chef"
                                        className="frombrand"
                                    >
                                        Careers
                                    </a>
                                </li>
                            </ul>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div>
                                <img
                                    src="images/div9svgs/pancklogo.svg"
                                    alt="pancklogo"
                                    className="pancklogo"
                                />
                            </div>
                        </div>
                        <div id="iconpage">
                            <a
                                href="https://twitter.com/pancakeswap"
                                aria-label="Twitter"
                                color="primary"
                                fontSize="16px"
                                className="socials_icon"
                            >
                                <img
                                    src="images/div9svgs/twitter.svg"
                                    className="twitter-icon"
                                    alt="twitter"
                                />
                            </a>
                            <div id="announcements">
                                <img
                                    src="images/div9svgs/announcement.svg"
                                    alt="Languages"
                                    className="socials_icon"
                                />
                                <div className="langs">
                                    {/* <a href="https://t.me/pancakeswap" class="translation-lang">English</a> */}
                                </div>
                            </div>
                            <a
                                href="https://reddit.com/r/pancakeswap"
                                aria-label="Reddit"
                                color="primary"
                                fontSize="16px"
                                className="socials_icon"
                            >
                                <img
                                    src="images/div9svgs/reddit.svg"
                                    alt="Reddit icon"
                                    className="reddit-icon"
                                />
                            </a>
                            <a
                                href="https://instagram.com/pancakeswap_official"
                                aria-label="Instagram"
                                color="primary"
                                fontSize="16px"
                                className="socials_icon"
                            >
                                <img
                                    src="images/div9svgs/ig.svg"
                                    className="ig-svg"
                                    alt="Instagram"
                                />
                            </a>
                            <a
                                href="https://github.com/pancakeswap/"
                                aria-label="Github"
                                color="primary"
                                fontSize="16px"
                                className="socials_icon"
                            >
                                <img
                                    src="images/div9svgs/github.svg"
                                    className="github-svg"
                                    alt="github"
                                />
                            </a>
                            <a
                                href="https://discord.gg/pancakeswap"
                                aria-label="Discord"
                                color="primary"
                                fontSize="16px"
                                className="socials_icon"
                            >
                                <img
                                    src="images/div9svgs/discord.svg"
                                    alt="discord"
                                    className="discord-svg"
                                />
                            </a>
                            <a
                                href="https://www.youtube.com/@pancakeswap_official"
                                aria-label="Youtube"
                                color="primary"
                                fontSize="16px"
                                className="socials_icon"
                            >
                                <img
                                    src="images/div9svgs/youtube.svg"
                                    alt="youtube"
                                    className="youtube-svg"
                                />
                            </a>
                        </div>
                        <div className="theme">
                            <div className="theme2">
                                <div className="dark-theme">
                                    <div className="langs">
                                        <div className="dark-appearance">
                                            <input
                                                type="chechbox"
                                                className="checked"
                                                defaultChecked=""
                                            />
                                            <div className="mooncake">
                                                <div className="sunshine">
                                                    <img
                                                        src="images/div9svgs/sunshine.svg"
                                                        alt="Sun svg"
                                                        className="langs-svg"
                                                    />
                                                </div>
                                            </div>
                                            <div className="lang-button">
                                                <img
                                                    src="images/div9svgs/sunny.svg"
                                                    alt="Sun"
                                                    className="svgtenth"
                                                />
                                                <img
                                                    src="images/div9svgs/moon.svg"
                                                    alt="Moon"
                                                    className="svgtenth"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="race">
                                    <button className="worldlang">
                                        <img
                                            src="images/div9svgs/world.svg"
                                            alt="world"
                                            className="langexchange"
                                        />
                                        <div className="rep">EN</div>
                                    </button>
                                    <div className="abovelang" />
                                </div>
                            </div>
                            <div className="endlogo">
                                <div className="startFooter">
                                    <a
                                        href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56"
                                        className="standardPrice"
                                    >
                                        <img
                                            src="images/div9svgs/logo.svg"
                                            alt="logo"
                                            className="logosvg"
                                        />
                                        <div className="price">$1.870</div>
                                    </a>
                                </div>
                                <a
                                    className="buycake"
                                    href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56"
                                >
                                    Buy CAKE
                                    <img
                                        src="images/div9svgs/buycake.svg"
                                        className="buycakesvg"
                                        alt="Buy Cake"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="new0ptions" id="earn">
                <span className="opt_kids">Farms</span>
                <span className="opt_kids">Pools</span>
                <span className="opt_kids">Liquid Staking</span>
            </div>
            <div className="new0ptions" id="win">
                <span className="opt_kids">Trading Competition</span>
                <span className="opt_kids">Prediction(BETA)</span>
                <span className="opt_kids">Lottery</span>
                <span className="opt_kids" id="potteryDiv2">
      Pottery (BETA) <span className="pottery">POT OPEN</span>
    </span>
            </div>
            <div className="new0ptions" id="nft">
                <span className="opt_kids">Overview</span>
                <span className="opt_kids">Collections</span>
                <span className="opt_kids">Activity</span>
            </div>
            <div className="new0ptions" id="dots">
                <span className="opt_kids">Info</span>
                <span id="ifoPAGEBtn2" className="opt_kids">
      IFO
    </span>
                <span className="opt_kids">Voting</span>
                <span className="opt_kids">Leaderboard</span>
                <span className="opt_kids" id="blog2">
      Blog <img src="images/l-arrow.svg" />
    </span>
                <span className="opt_kids" id="docs2">
      Docs <img src="images/l-arrow.svg" />{" "}
    </span>
            </div>
            <div id="mbNavbar" className="mbNavbar">
                <div className="cover">
      <span className="mbBtns">
        <img className="mbImgs" src="images/1s.svg" />
        <span>Trade</span>
      </span>
                </div>
                <div id="earnBtn" className="mbBtns">
                    {" "}
                    <img className="mbImgs" src="images/2s.svg" />
                    <span>Earn</span>
                </div>
                <div id="winBtn" className="mbBtns">
                    {" "}
                    <img id="trophy" className="mbImgs" src="images/3strophy.svg" />
                    <span>Win</span>
                </div>
                <div id="nftBtn" className="mbBtns">
                    {" "}
                    <img className="mbImgs" src="images/4snft.svg" />
                    <span>NFT</span>
                </div>
                <div id="dotsBtn" className="mbBtns">
      <span>
        <span className="cir_dot" />
        <span className="cir_dot" />
        <span className="cir_dot" />
          &nbsp;
      </span>
                </div>
                .
            </div>
        </>
    )

}
// Fred Homepage Section ends