import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText: "복합터미널 생활권 중심<br />대전 도심의 새로운 가치",
    contentText:
      "대전복합터미널 중심 생활 인프라<br />상업시설·생활편의시설 이용 편리",
  },
  {
    img: section2Image2,
    titleText: "편리한 생활 인프라<br />도심 생활 프리미엄",
    contentText:
      "대형마트·상업시설 등 생활 편의시설 인접<br />다양한 생활 인프라를 가까이 누리는 입지",
  },
  {
    img: section2Image3,
    titleText: "대전 교통 중심 입지<br />광역 이동 편리",
    contentText:
      "대전IC 및 주요 도로망 인접<br />대전 주요 지역 이동 편리한 교통 환경",
  },
  {
    img: section2Image4,
    titleText: "풍부한 생활 인프라<br />편리한 도심 라이프",
    contentText:
      "상업시설·생활편의시설 이용 편리<br />도심 생활권을 갖춘 주거 환경",
  },
  {
    img: section2Image5,
    titleText: "약 2,140세대 주거타운 기대<br />새로운 주거 중심",
    contentText:
      "용전동 일대 주거 환경 변화 기대<br />대규모 주거타운 형성 예정",
  },
  {
    img: section2Image6,
    titleText: "도심 속 주거 가치<br />미래가치 기대",
    contentText:
      "생활·교통·인프라가 어우러진 입지<br />대전 동구의 새로운 주거 선택",
  },
];




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
  {/* 페이지별 메타: title/description/og/canonical 만 관리 */}
  <title>대전 용전 마루힐 - 입지환경</title>
  <meta
    name="description"
    content="대전 용전 마루힐의 입지환경을 확인하세요. 복합터미널 중심 생활권과 풍부한 생활 인프라, 편리한 교통환경과 미래가치를 함께 누리는 주거 입지입니다."
  />
  <meta name="robots" content="index,follow" />
  <link rel="canonical" href="https://www.lotte-castl.co.kr/LocationEnvironment/intro" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="대전 용전 마루힐" />
  <meta property="og:title" content="대전 용전 마루힐 - 입지환경" />
  <meta
    property="og:description"
    content="복합터미널 중심 생활권, 다양한 생활 인프라와 편리한 교통환경을 갖춘 대전 용전 마루힐의 입지환경을 확인하세요."
  />
  <meta property="og:url" content="https://www.lotte-castl.co.kr/LocationEnvironment/intro" />
  <meta property="og:image" content="https://www.lotte-castl.co.kr/img/og/location.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="대전 용전 마루힐 - 입지환경" />
  <meta
    name="twitter:description"
    content="복합터미널 중심 생활권과 교통·생활 인프라를 두루 갖춘 대전 용전 마루힐의 입지환경을 확인하세요."
  />
  <meta name="twitter:image" content="https://www.lotte-castl.co.kr/img/og/location.jpg" />
  <meta name="twitter:url" content="https://www.lotte-castl.co.kr/LocationEnvironment/intro" />

  {/* JSON-LD (대표 이미지/브레드크럼 포함) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "대전 용전 마루힐 - 입지환경",
      "url": "https://www.lotte-castl.co.kr/LocationEnvironment/intro",
      "description":
        "복합터미널 중심 생활권과 풍부한 생활 인프라, 편리한 교통환경을 갖춘 대전 용전 마루힐의 입지환경을 안내합니다.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "contentUrl": "https://www.lotte-castl.co.kr/img/og/location.jpg",
        "width": 1200,
        "height": 630
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.lotte-castl.co.kr/" },
          { "@type": "ListItem", "position": 2, "name": "입지환경", "item": "https://www.lotte-castl.co.kr/LocationEnvironment/intro" }
        ]
      }
    })}
  </script>
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="입지환경" />

<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  대전 용전 마루힐 - 입지안내
</h1>
<p className={styles.screenReaderOnly}>
  대전 용전 마루힐의 입지 정보를 확인하세요.
  복합터미널 중심 생활권과 다양한 생활 인프라, 편리한 교통환경을 갖춘 주거 입지로
  미래가치를 기대할 수 있는 새로운 주거 선택입니다.
</p>

<div className={styles.textBox}>
  <div>복합터미널 중심에서</div>
  <div>삶의 가치가 높아지는 곳</div>
  <div>대전 용전 마루힐이 새로운 프리미엄을 제안합니다.</div>
</div>



      <img
        src={page1}
        className={styles.image2}
        alt="대전 용전 마루힐입지환경-image1"
      />

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 대전 용전 마루힐사업주체 및 시공사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
