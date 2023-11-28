import React from 'react';
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
import { Row, Col } from "antd";
import uniLogo from '../../assets/images/uniLogo2.png';
import sushiLogo from '../../assets/images/sushiLogo.png';
import card1 from '../../assets/svg/1-icon.svg';
import card2 from '../../assets/svg/2-icon.svg';
import card3 from '../../assets/svg/3-icon.svg';
import sec4Icon1 from '../../assets/images/sec4Icon1.png';
import smallIcon1 from '../../assets/images/sec4SmallIcon1.png';
import sec4Icon2 from '../../assets/images/sec4Icon2.png';
import smallIcon2 from '../../assets/images/sec4SmallIcon2.png';
import sec4Icon3 from '../../assets/images/sec4Icon3.png';
import smallIcon3 from '../../assets/images/sec4SmallIcon3.png';
import sec5Icon from '../../assets/images/sec5Icon.png';
import 'antd/dist/antd.css';
import './Home.css';

export default function Home() {
  const { t } = useTranslation()

  return (
    <div className="Home">
      <div className="sec01">
        <Row>
          <Col span={15} offset={5} className="content">
            <h1>{t('your_dex_swaps')}</h1>
            <h2>{t('are_at_risk')}</h2>
            <Link to="/swap" className="Btn">{t('launch_app')}</Link>
            <div className="pc">
              <p className="textP"><span>{t('supported_dexs')}</span><span>{t('bloxroute_BDN_performance')}</span></p>
              <div className="bottomData">
                <div className="left">
                  <img src={uniLogo} alt="uni" />
                  <img src={sushiLogo} alt="sushi" />
                </div>
                <div className="right">
                  <p className="circular">
                    <h4>90%</h4>
                    <span>{t('private_Tx_hash_Power')}</span>
                  </p>
                  <p className="circular">
                    <h4>{t('7k')}</h4>
                    <span>{t('daily_private_Tx')}</span>
                  </p>
                  <p className="circular">
                    <h4>{t('1.5b')}</h4>
                    <span>{t('daily_BDN_volume')}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mobile">
              <p className="textP"><span>{t('supported_dexs')}</span></p>
              <div className="left">
                <img src={uniLogo} alt="uni" />
                <img src={sushiLogo} alt="sushi" />
              </div>
              <div className="bottomData">
                <p className="textP"><span>{t('bloxroute_BDN_performance')}</span></p>
                <div className="right">
                  <p className="circular">
                    <h4>90%</h4>
                    <span>{t('private_Tx_hash_Power')}</span>
                  </p>
                  <p className="circular">
                    <h4>{t('7k')}</h4>
                    <span>{t('daily_private_Tx')}</span>
                  </p>
                  <p className="circular">
                    <h4>{t('1.5b')}</h4>
                    <span>{t('daily_BDN_volume')}</span>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="sec02">
        <div className="bgDiv">
          <Row>
            <Col span={14} offset={5} className="content">
              <h2 className="title">{t('the_problem')}</h2>
              <span className="titleLine"></span>
              <div className="textDiv">
                <p>{t('the_problem_text_P1')}</p>
                <p>{t('the_problem_text_P2')}</p>
                <p>{t('the_problem_text_P3')}</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="sec03">
        <Row>
          <Col span={14} offset={5} className="content">
            <h2 className="title">{t('our_solution')}</h2>
            <span className="titleLine"></span>
            <div className="textDiv">
              <p className="pc">{t('our_solution_subtext_SEC1')}<br/> {t('our_solution_subtext_SEC2')}</p>
              <p className="mobile">{t('our_solution_subtext_SEC1')}{' '}{t('our_solution_subtext_SEC2')}</p>
            </div>
            <div className="cardDiv">
              <Row gutter={32}>
                <Col className="gutter-row card" span={8}>
                  <div>
                    <img src={card1} alt="icon" />
                    <p className="bigFont">{t('frontrun_protection')}</p>
                    <p className="subFont">{t('skip_the_mempool')}</p>
                    <p className="smallFont">{t('frontrun_protection_text_P')}</p>
                  </div>
                </Col>
                <Col className="gutter-row card" span={8}>
                  <div>
                    <img src={card2} alt="icon" />
                    <p className="bigFont">{t('arbitrage_extraction')}</p>
                    <p className="subFont">{t('stop_leaving_money_on_the_table')}</p>
                    <p className="smallFont">{t('arbitrage_extraction_text_P')}</p>
                  </div>
                </Col>
                <Col className="gutter-row card" span={8}>
                  <div>
                    <img src={card3} alt="icon" />
                    <p className="bigFont">{t('community_benefit')}</p>
                    <p className="subFont">{t('promote_network_efficiency')}</p>
                    <p className="smallFont">{t('community_benefit_text_P')}</p>
                  </div>
                </Col>
              </Row>      
            </div>
          </Col>
        </Row>
      </div>
      <div className="sec04">
        <Row>
          <Col span={14} offset={5} className="content">
            <h2 className="title">{t('how_it_works')}</h2>
            <span className="titleLine"></span>
            <Row gutter={32}>
              <Col className="gutter-row leftCard1" span={12}>
                <div>
                  <img src={sec4Icon1} alt="icon" />
                </div>
              </Col>
              <Col className="gutter-row rightCard1" span={12}>
                <div>
                  <h2><img src={smallIcon1} alt="icon" />{t('fast_protect_title')}</h2>
                  <p className="title">{t('skip_the_mempool_entirely')}</p>
                  <p>{t('fast_protect_text_P1')}</p>
                  <p>{t('fast_protect_text_P2')}</p>
                  <p>{t('fast_protect_text_P3')} <a href="https://portal.bloxroute.com/private-transaction/" target="_blank" rel="noreferrer">{t('fast_protect_here_link')}</a></p>
                </div>
              </Col>
            </Row> 
            <Row gutter={32} className="mobileRever">
              <Col className="gutter-row leftCard2" span={12}>
                <div>
                  <h2><img src={smallIcon2} alt="icon" />{t('BackRunMe_title')}</h2>
                  <p className="title">{t('paid_for_creating_arbitrage')}</p>
                  <p>{t('BackRunMe_text_P1')}</p>
                  <p>{t('BackRunMe_text_P2')}</p>
                  <p>{t('BackRunMe_text_P3')} <a href="https://docs.bloxroute.com/introduction/backrunme" target="_blank" rel="noreferrer">{t('BackRunMe_here_link')}</a></p>
                </div>
              </Col>
              <Col className="gutter-row rightCard2" span={12}>
                <div>
                  <img src={sec4Icon2} alt="icon" />
                </div>
              </Col>
            </Row> 
            <Row gutter={32}>
              <Col className="gutter-row leftCard3" span={12}>
                <div>
                  <img src={sec4Icon3} alt="icon" />
                </div>
              </Col>
              <Col className="gutter-row rightCard3" span={12}>
                <div>
                  <h2><img src={smallIcon3} alt="icon" />{t('community_benefit_title')}</h2>
                  <p className="title">{t('deter_malicious_bot_behavior')}</p>
                  <p>{t('community_benefit_text_P1_SEC1')} <a href="https://explore.flashbots.net/" target="_blank" rel="noreferrer">{t('475m')}</a> {t('community_benefit_text_P1_SEC2')}</p>
                  <p>{t('community_benefit_text_P2')}</p>
                  <p>{t('community_benefit_text_P3')}</p>
                </div>
              </Col>
            </Row> 
          </Col>
        </Row>
      </div>
      <div className="sec05 pc">
        <Row>
          <Col span={14} offset={5} className="content">
            <Row gutter={32}>
              <Col className="gutter-row leftCard" span={12}>
                <div>
                  <h2>{t('about_bloxroute')}</h2>
                  <span className="titleLine"></span>
                  <p>{t('about_bloxroute_text_P1')}</p>
                  <p>{t('about_bloxroute_text_P2')}</p>
                  <p>{t('about_bloxroute_text_P3')} <a href="https://bloxroute.com/" target="_blank" rel="noreferrer">www.bloxroute.com</a></p>
                </div>
              </Col>
              <Col className="gutter-row rightCard" span={12}>
                <div>
                  <a href="https://bloxroute.com/" target="_blank" rel="noreferrer"><img src={sec5Icon} alt="icon" /></a>
                </div>
              </Col>
            </Row> 
          </Col>
        </Row>
      </div>
      <div className="sec05 mobile">
        <Row>
          <Col span={14} offset={5} className="content">
            <Row gutter={32}>
              <Col className="gutter-row leftCard" span={12}>
                <div>
                  <h2>{t('about_bloxroute')}</h2>
                  <span className="titleLine"></span>
                  <a href="https://bloxroute.com/" target="_blank" rel="noreferrer"><img src={sec5Icon} alt="icon" /></a>
                  <p>{t('about_bloxroute_text_P1')}</p>
                  <p>{t('about_bloxroute_text_P2')}</p>
                  <p>{t('about_bloxroute_text_P3')} <a href="https://bloxroute.com/" target="_blank" rel="noreferrer">www.bloxroute.com</a></p>
                </div>
              </Col>
            </Row> 
          </Col>
        </Row>
      </div>
      <div className="sec06">
        <Row>
          <Col span={14} offset={5} className="content">
            <Row gutter={32}>
              <Col className="gutter-row left" span={6}></Col>
              <Col className="gutter-row left" span={6}>
                <div>
                  <a href="https://bloxroute.com/" target="_blank" rel="noreferrer">{t('footer_about_bloxroute')}</a>
                  <a href="mailto:support@bloxroute.com" rel="noreferrer">{t('footer_contact_us')}</a>
                  <a href="https://discord.com/invite/mB95H7s" target="_blank" rel="noreferrer">{t('footer_discord')}</a>
                </div>
              </Col>
              <Col className="gutter-row right" span={6}>
                <div>
                  <a href="https://bloxroute-tos.s3.amazonaws.com/BackRunMe_ToS_3-20-21.pdf" target="_blank" rel="noreferrer">{t('footer_terms_of_service')}</a>
                  <a href="https://bloxroute.com/wp-content/uploads/2021/12/bloXroute-Privacy-Policy-04-01-2019-Final.pdf" target="_blank" rel="noreferrer">{t('footer_privacy_policy')}</a>
                  <a href="https://s3.amazonaws.com/files.bloxroute.com/backrunme_files/BackRunMe_+a+step-by-step+tutorial+.pdf" target="_blank" rel="noreferrer">{t('footer_user_guide')}</a>
                </div>
              </Col>
              <Col className="gutter-row left" span={6}></Col>
            </Row> 
          </Col>
        </Row>
        <div className="footerBottom">
          <span className="footerLine"></span>
          <div className="copy"><span>{t('footer_backrunme_powered_by_bloxroute')}</span><span>{t('footer_all_rights_reserved_2022')}</span></div>
        </div>
      </div>
    </div>
  )
}