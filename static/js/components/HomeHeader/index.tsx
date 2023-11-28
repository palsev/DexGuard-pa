import React from 'react';
import {LANGUAGES} from '../../constants/index';
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
import { Row, Col, Select } from "antd";
import logo from "../../assets/svg/backrunme-logo.svg";
import lang from "../../assets/images/lang.png";
import 'antd/dist/antd.css';
import './HomeHeader.css';


export default function HomeHeader() {
  const { Option } = Select;
  const { t } = useTranslation()

  function ChangeLanguage(value: string) {
    i18next.changeLanguage(value)
  }
  return (
    <div className="HomeHeader">
      <Row>
        <Col span="20" offset={2}>
          <a href="/">
            <img src={logo} alt="logo"/>
          </a>
          <Link to="/swap" className="LaunchAppBtn">{t('launch_app')}</Link>
          <div className="rightNav">
            <img src={lang} alt="language"/>
            <Select defaultValue={LANGUAGES[0].name} onChange={ChangeLanguage}>
              {LANGUAGES.map(({ code, name }) => (<Option key={code} value={code}>{name}</Option>))}
            </Select>
          </div>
        </Col>
      </Row>
    </div>
  );
}
