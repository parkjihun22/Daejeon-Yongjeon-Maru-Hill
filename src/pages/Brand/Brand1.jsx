import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/page1.jpg";

const Brand1 = () => {
    const menuContents = [{ title: "브랜드 소개", url: "/brand/intro" }, { title: "홍보 영상", url: "/brand/video" }];
    const [isScroll, setIsScroll] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
    const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
            // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
            if (window.scrollY > 200) {
                setIsImageVisible(true); // 이미지가 보이도록
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
        }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
<Helmet>
  <title>대전 용전 마루힐 - 브랜드 소개</title>
  <meta
    name="description"
    content="대전 용전 마루힐의 브랜드 가치와 주거 비전을 소개합니다. 복합터미널 중심 생활권, 편리한 인프라, 미래가치를 담은 새로운 주거 프리미엄을 만나보세요."
  />
  <link rel="canonical" href="https://www.lotte-castl.co.kr/Brand/intro" />
  <meta name="robots" content="index,follow" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="대전 용전 마루힐" />
  <meta property="og:title" content="대전 용전 마루힐 - 브랜드 소개" />
  <meta
    property="og:description"
    content="복합터미널 중심 생활권과 풍부한 인프라, 새로운 주거타운의 기대가치를 담은 대전 용전 마루힐의 브랜드 비전을 소개합니다."
  />
  <meta property="og:url" content="https://www.lotte-castl.co.kr/Brand/intro" />
  <meta property="og:image" content="https://www.lotte-castl.co.kr/images/og/main.jpg" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="브랜드 소개" />
<MenuBar contents={menuContents} />

{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
<h1 className={styles.screenReaderOnly}>대전 용전 마루힐 - 브랜드 소개</h1>
<p className={styles.screenReaderOnly}>
  대전 용전 마루힐은 복합터미널 중심 생활권과 편리한 인프라를 갖춘 주거 단지입니다.
  교통과 생활, 미래가치를 함께 누릴 수 있는 입지로 새로운 주거 프리미엄을 제안합니다.
  용전동의 변화와 함께 기대되는 주거 가치를 담은 대전 용전 마루힐을 소개합니다.
</p>

<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
  <div>복합터미널 중심 프리미엄을 가까이</div>
  <div>대전 용전 마루힐, 새로운 주거의 시작</div>
</div>

            <img className={`${styles.image} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="대전 용전 마루힐brand-Image1" />

            <Footer />
        </div>
    );
}

export default Brand1;
