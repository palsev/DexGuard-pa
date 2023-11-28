import React from 'react'
import { useTranslation } from 'react-i18next'
import { Row, Col } from 'antd'
import ErrorImage from '../../assets/images/404.png'
import './PageNotFound.css'

export default function PageNotFound() {
  const { t } = useTranslation();
  return (
    <div className="PageNotFound">
        <div className="sec01">
          <div className="content">
            <div>
              <h2>404.</h2>
              <h2>That’s an error.</h2>
              <p>The requested URL/badpage was</p>
              <p>not found on this server.</p>
              <p>That’s all we know.</p>
            </div>
          </div>
          <div className="content">
            <img src={ErrorImage} alt="page_not_found" className="error-image" />
          </div>
        </div>
      <div className="sec02">
        <Row>
          <Col span={14} offset={5} className="content">
            <Row gutter={32}>
              <Col className="gutter-row left" span={6}></Col>
              <Col className="gutter-row left" span={6}>
                <div>
                  <a href="https://bloxroute.com/" target="_blank" rel="noreferrer">
                  {t('footer_about_bloxroute')}
                  </a>
                  <a href="mailto:support@bloxroute.com" rel="noreferrer">
                  {t('footer_contact_us')}
                  </a>
                  <a href="https://discord.com/invite/mB95H7s" target="_blank" rel="noreferrer">
                  {t('footer_discord')}
                  </a>
                </div>
              </Col>
              <Col className="gutter-row right" span={6}>
                <div>
                  <a
                    href="https://bloxroute-tos.s3.amazonaws.com/BackRunMe_ToS_3-20-21.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t('footer_terms_of_service')}
                  </a>
                  <a
                    href="https://bloxroute.com/wp-content/uploads/2021/12/bloXroute-Privacy-Policy-04-01-2019-Final.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t('footer_privacy_policy')}
                  </a>
                  <a href="https://s3.amazonaws.com/files.bloxroute.com/backrunme_files/BackRunMe_+a+step-by-step+tutorial+.pdf" 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    {t('footer_user_guide')}
                  </a>
                </div>
              </Col>
              <Col className="gutter-row left" span={6}></Col>
            </Row>
          </Col>
        </Row>
        <div className="footerBottom">
          <span className="footerLine"></span>
          <div className="copy">
          <span>{t('footer_backrunme_powered_by_bloxroute')}</span>
            <span>{t('footer_all_rights_reserved_2022')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
