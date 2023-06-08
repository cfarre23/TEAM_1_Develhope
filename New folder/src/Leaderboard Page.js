import './Leaderboard.css'
import './styles.css'
import {useEffect} from "react";
import {Navbar} from "./Hompage";
export function LeaderboardPage(){
    useEffect(function (){

    })
    return(
        <>
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
                    <button className="buttons" id="btn_trade">
                        Trade <span className="scale_borders" />
                    </button>
                    <div className="sec_2">
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
                        <button className="buttons" id="btn_earn">
                            Earn <span className="scale_borders" />
                        </button>
                        <div className="options" id="options2">
                            <span className="opt_kids">Farms</span>
                            <span className="opt_kids">Pools</span>
                        </div>
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
                        <button className="buttons" id="btn_nft">
                            NFT <span className="scale_borders" />
                        </button>
                        <button className="buttons" id="btn_(... .)">
                            <span className="scale_borders" />
                            <span className="div_cir_dot" id="div_cir_dot">
            <span className="cir_dot" />
            <span className="cir_dot" />
            <span className="cir_dot" />
                                &nbsp;
          </span>
                        </button>
                        <div className="options" id="options4">
                            <span className="opt_kids">Overview</span>
                            <span className="opt_kids">Collections</span>
                            <span className="opt_kids">Activity</span>
                        </div>
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
                <div id="sep2" className="sep2">
                    <div className="sec_3" id="sec_3">
                        <img className="imgs" id="img_deer2" src="images/7186.png" />
                        <span className="api-price">$1.234</span>
                    </div>
                    <div id="sec4" className="sec_4">
                        <img className="imgs" id="img_globe" src="images/globe.svg" />
                        <img className="imgs" id="img_settings" src="images/settings.svg" />
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
                    </div>
                    <div className="btn_cwallect">Connect Wallet</div>
                    <div id="options6">
                        <span className="opt_kids">Select a network</span>
                        <span className="opt_kids">BNB Smart Chain</span>
                        <span className="opt_kids">Ethereum</span>
                        <span className="opt_kids">Aptos</span>
                    </div>
                </div>
            </div>
            <div className="options" id="options7">
                <ul className="list">
                    <li>Country 1</li>
                    <li>Country 2</li>
                    <li>Country 3</li>
                    <li>Country 4</li>
                    <li>Country 5</li>
                    <li>Country 6</li>
                    <li>Country 7</li>
                    <li>Country 8</li>
                    <li>Country 9</li>
                    <li>Country 10</li>
                    <li>Country 11</li>
                    <li>Country 12</li>
                    <li>Country 13</li>
                    <li>Country 14</li>
                    <li>Country 15</li>
                    <li>Country 16</li>
                    <li>Country 17</li>
                    <li>Country 18</li>
                    <li>Country 19</li>
                    <li>Country 20</li>
                    <li>Country 1</li>
                    <li>Country 2</li>
                    <li>Country 3</li>
                    <li>Country 4</li>
                    <li>Country 5</li>
                    <li>Country 6</li>
                    <li>Country 7</li>
                    <li>Country 8</li>
                    <li>Country 9</li>
                    <li>Country 10</li>
                    <li>Country 11</li>
                    <li>Country 12</li>
                    <li>Country 13</li>
                    <li>Country 14</li>
                    <li>Country 15</li>
                    <li>Country 16</li>
                    <li>Country 17</li>
                    <li>Country 18</li>
                    <li>Country 19</li>
                    <li>Country 20</li>
                </ul>
            </div>
            <div id="leaderboard_div1">
                <div className="leaderboard_div2">
                    <div className="inner_board">
                        <div className="board_content">
                            <h1 className="main_topic">Teams &amp; Profiles</h1>
                            <div className="contenth1">
                                Show of your stats and collectibles with your unique profile. Team
                                features will be revealed soon!
                            </div>
                        </div>
                        <div className="second_part">
                            <h2 className="sub_topic">Teams</h2>
                        </div>
                        <div id="team_1">
                            <div className="team_content">
                                <div className="boxcard">
                                    <div className="sidebar">
                                        <div className="side-content">1</div>
                                    </div>
                                    <div className="card-content">
                                        <div className="box-content">
                                            <div className="card-box">
                                                <div className="main-topic">
                                                    <img
                                                        src="images/syrup-storm-md.png"
                                                        alt="Syrup Storm"
                                                        className="side-images"
                                                    />
                                                </div>
                                                <h3 className="contenth3">Syrup Storm</h3>
                                            </div>
                                            <p className="teams-text">
                                                The storm's a-comin! Watch out! These bulls are stampeding
                                                in a syrupy surge!
                                            </p>
                                            <div className="csoon">
                                                <div className="comingsn">
                                                    <img
                                                        src="leadersvgs/trophy.svg"
                                                        alt="Trophy img"
                                                        className="cupsvg"
                                                    />
                                                    <div className="cupsoon">Coming Soon</div>
                                                </div>
                                                <div className="totalnumbers">
                                                    <img
                                                        src="leadersvgs/people.svg"
                                                        alt="People img"
                                                        className="many-people"
                                                    />
                                                    <div className="numbers1">190,345</div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="/teams/1" className="team-links">
                                            <button className="see-more">See More</button>
                                        </a>
                                        <div className="sideimg">
                                            <img
                                                src="images/syrup-storm-md.png"
                                                alt="team avatar"
                                                className="team-avatar"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="team-2">
                            <div className="team_content">
                                <div className="boxcard">
                                    <div className="sidebar">
                                        <div className="side-content">2</div>
                                    </div>
                                    <div className="card-content">
                                        <div className="box-content">
                                            <div className="card-box">
                                                <div className="main-topic">
                                                    <img
                                                        src="images/fearsome-flippers-md.png"
                                                        alt="Fearsome Flippers"
                                                        className="side-images"
                                                    />
                                                </div>
                                                <h3 className="contenth3">Fearsome Flippers</h3>
                                            </div>
                                            <p className="teams-text">
                                                The flippening is coming. Don't get in these bunnies' way,
                                                or you'll get flipped, too!
                                            </p>
                                            <div className="csoon">
                                                <div className="comingsn">
                                                    <img
                                                        src="leadersvgs/trophy.svg"
                                                        alt="Trophy img"
                                                        className="cupsvg"
                                                    />
                                                    <div className="cupsoon">Coming Soon</div>
                                                </div>
                                                <div className="totalnumbers">
                                                    <img
                                                        src="leadersvgs/people.svg"
                                                        className="many-people"
                                                        alt="People img"
                                                    />
                                                    <div className="numbers1">170,840</div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="/teams/2" className="team-links">
                                            <button className="see-more">See More</button>
                                        </a>
                                        <div className="sideimg">
                                            <img
                                                src="images/fearsome-flippers-md.png"
                                                className="team-avatar"
                                                alt="Fearsome Flippers"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="team-3">
                            <div className="team_content">
                                <div className="boxcard">
                                    <div className="sidebar">
                                        <div className="side-content">3</div>
                                    </div>
                                    <div className="card-content">
                                        <div className="box-content">
                                            <div className="card-box">
                                                <div className="main-topic">
                                                    <img
                                                        src="images/chaotic-cakers-md.png"
                                                        className="side-images"
                                                        alt="Chaotic Cakers"
                                                    />
                                                </div>
                                                <h3 className="contenth3">Chaotic Cakers</h3>
                                            </div>
                                            <p className="teams-text">
                                                Can you stand the heat? Stay out of the kitchen or you might
                                                get burned to a crisp!
                                            </p>
                                            <div className="csoon">
                                                <div className="comingsn">
                                                    <img
                                                        src="leadersvgs/trophy.svg"
                                                        className="cupsvg"
                                                        alt="Trophy img"
                                                    />
                                                    <div className="cupsoon">Coming Soon</div>
                                                </div>
                                                <div className="totalnumbers">
                                                    <img
                                                        src="leadersvgs/people.svg"
                                                        alt="People img"
                                                        className="many-people"
                                                    />
                                                    <div className="numbers1">343,840</div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="/teams/3" className="team-links">
                                            <button className="see-more">See More</button>
                                        </a>
                                        <div className="sideimg">
                                            <img
                                                src="images/chaotic-cakers-md.png"
                                                alt="Chaotic Cakers"
                                                className="team-avatar"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer>
                            <div id="div10">
                                <div className="tenthdiv">
                                    <div className="firstpancklogo">
                                        <img
                                            src="div9svgs/pancklogo.svg"
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
                                                <a
                                                    href="https://docs.pancakeswap.finance/"
                                                    className="frombrand"
                                                >
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
                                                <a
                                                    href="https://github.com/pancakeswap"
                                                    className="frombrand"
                                                >
                                                    Github
                                                </a>
                                            </li>
                                            <li className="about-info">
                                                <a
                                                    href="https://docs.pancakeswap.finance"
                                                    className="frombrand"
                                                >
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
                                                src="div9svgs/pancklogo.svg"
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
                                                src="div9svgs/twitter.svg"
                                                className="twitter-icon"
                                                alt="twitter"
                                            />
                                        </a>
                                        <div id="announcements">
                                            <img
                                                src="div9svgs/announcement.svg"
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
                                                src="div9svgs/reddit.svg"
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
                                                src="div9svgs/ig.svg"
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
                                                src="div9svgs/github.svg"
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
                                                src="div9svgs/discord.svg"
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
                                                src="div9svgs/youtube.svg"
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
                                                                    src="div9svgs/sunshine.svg"
                                                                    alt="Sun svg"
                                                                    className="langs-svg"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="lang-button">
                                                            <img
                                                                src="div9svgs/sunny.svg"
                                                                alt="Sun"
                                                                className="svgtenth"
                                                            />
                                                            <img
                                                                src="div9svgs/moon.svg"
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
                                                        src="div9svgs/world.svg"
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
                                                        src="div9svgs/logo.svg"
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
                                                    src="div9svgs/buycake.svg"
                                                    className="buycakesvg"
                                                    alt="Buy Cake"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </>

    )
}