import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './ComplexGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";


import page1 from "../../assets/ComplexGuide/ComplexGuide1/page1.webp";



const ComplexGuide1 = () => {
	const menuContents = [
		{ title: "단지 배치도", url: "/ComplexGuide/intro" },
		{ title: "호수 배치도", url: "/ComplexGuide/detailintro" },
		{ title: "커뮤니티", url: "/ComplexGuide/community" },
	];
	const [isScroll, setIsScroll] = useState(false);
	const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로딩 상태 추가
	const { pathname } = useLocation(); // 현재 경로를 가져옴

	// 이미지가 로드되면 호출되는 함수
	const handleImageLoad = () => {
		setIsImage2Loaded(true); // 이미지가 로드되면 상태 업데이트
	};

	useEffect(() => {
		window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
	}, [pathname]); // pathname이 변경될 때마다 실행

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScroll(true);
			} else {
				setIsScroll(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={styles.container}>
<Helmet>
  {/* 페이지별 메타 */}
  <title>대전 용전 마루힐 - 단지배치도</title>
  <meta
    name="description"
    content="대전 용전 마루힐 단지배치도 페이지입니다. 단지 구성과 동별 배치, 주요 시설 위치를 한눈에 확인하세요."
  />
  <meta name="robots" content="index,follow" />
  <link rel="canonical" href="https://www.theporest.co.kr/ComplexGuide/intro" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="대전 용전 마루힐" />
  <meta property="og:title" content="대전 용전 마루힐 - 단지배치도" />
  <meta
    property="og:description"
    content="대전 용전 마루힐의 단지 구성과 동별 배치, 주요 시설 위치를 확인하세요."
  />
  <meta property="og:url" content="https://www.theporest.co.kr/ComplexGuide/intro" />
  <meta property="og:image" content="https://www.theporest.co.kr/img/og/complex.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="대전 용전 마루힐 - 단지배치도" />
  <meta
    name="twitter:description"
    content="대전 용전 마루힐의 단지 구성과 주요 시설 위치를 한눈에 확인하세요."
  />
  <meta name="twitter:image" content="https://www.theporest.co.kr/img/og/complex.jpg" />
  <meta name="twitter:url" content="https://www.theporest.co.kr/ComplexGuide/intro" />

  {/* JSON-LD */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "대전 용전 마루힐 - 단지배치도",
      "url": "https://www.theporest.co.kr/ComplexGuide/intro",
      "description":
        "대전 용전 마루힐의 단지 구성과 동별 배치, 주요 시설 위치를 확인할 수 있는 페이지입니다.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "contentUrl": "https://www.theporest.co.kr/img/og/complex.jpg",
        "width": 1200,
        "height": 630
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "홈",
            "item": "https://www.theporest.co.kr/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "단지배치도",
            "item": "https://www.theporest.co.kr/ComplexGuide/intro"
          }
        ]
      }
    })}
  </script>
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />
<Bener title="단지안내" />
<MenuBar contents={menuContents} />

{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
<h1 className={styles.screenReaderOnly}>대전 용전 마루힐 - 단지배치도</h1>
<p className={styles.screenReaderOnly}>
  단지 배치도 페이지는 대전 용전 마루힐의 전체 단지 구성도를 제공합니다.
  동별 배치와 주요 시설 위치를 시각적으로 안내하여
  단지 구성을 쉽게 확인할 수 있도록 돕습니다.
</p>

<div className={styles.textBox}>
  <div>새로운 주거 프리미엄의 시작</div>
  <div>대전 용전 마루힐이 선보이는 단지 가치를 확인하세요.</div>
</div>



			{/* 이미지에 애니메이션 효과 추가 */}
			<img
				className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
				src={page1}
				alt="대전 용전 마루힐 단지배치도 이미지1"
				onLoad={handleImageLoad}  // 이미지 로드 후 애니메이션 실행
			/>

			



			<div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 상기 단지배치도 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 날 수 있습니다
				</div>
				<div className={styles.notice}>
					※ 단지 내 조경 및 세부 식재계획, 시설물의 위치는 실제 시공시 현장 상황에 따라 변경될 수 있습니다
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default ComplexGuide1;
