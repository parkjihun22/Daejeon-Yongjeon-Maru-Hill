import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";


const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
<Helmet>
  <title>대전 용전 마루힐 - 프리미엄</title>
  <meta
    name="description"
    content="대전 용전 마루힐의 프리미엄을 확인하세요. 복합터미널 중심 생활권, 풍부한 생활 인프라, 편리한 교통환경과 미래가치를 담은 핵심 가치를 안내합니다."
  />
  <link rel="canonical" href="https://www.theporest.co.kr/LocationEnvironment/primium" />
  <meta name="robots" content="index,follow" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="프리미엄" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  대전 용전 마루힐 - 프리미엄
</h1>
<p className={styles.screenReaderOnly}>
  대전 용전 마루힐만의 프리미엄을 만나보세요.
  복합터미널 중심 생활권과 다양한 생활 인프라, 편리한 교통환경,
  그리고 미래가치를 기대할 수 있는 새로운 주거 프리미엄을 제안합니다.
</p>

<div className={styles.textBox}>
  <div>복합터미널 중심 프리미엄</div>
  <div>대전 용전 마루힐의 가치를 누리세요.</div>
</div>



      <img
        src={page1}
        className={styles.image3}
        alt="대전 용전 마루힐 프리미엄 이미지1"
      />

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
