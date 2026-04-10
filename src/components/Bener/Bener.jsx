import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="대전 용전 마루힐-benerimage"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  if (text === '마루힐' || text === '홍보영상' || text === '체크포인트' || text === '당첨자서류안내' || text === '대전 용전 마루힐') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          변화의 시작에서 먼저 만나는 프리미엄, 대전 용전 마루힐.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          복합터미널과 이마트 등 편리한 생활 인프라를 가까이 누리는 주거 프리미엄.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          새로운 주거타운의 시작을 알리는 대전 용전 마루힐.
        </div>
      </>
    );
  } else if (text === '사업개요' || text === '세대안내' || text === '인테리어' || text === '청약안내' || text === '모집공고안내' || text === '인지세납부안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          대전 복합터미널 생활권의 중심에서 만나는 새로운 주거 선택.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          교통과 생활, 미래가치를 함께 누릴 수 있는 용전동 핵심 입지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          트램 수혜 기대감과 풍부한 생활편의시설을 가까이 누리는 프리미엄.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          대전 용전 마루힐
        </div>
      </>
    );
  } else if (text === '입지환경'|| text === '프리미엄') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          복합터미널과 대형마트, 다양한 생활 인프라가 집중된 용전동 중심 입지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          교통과 쇼핑, 편의시설을 가까이 누리는 대전 용전 마루힐의 프리미엄을 경험하세요.
        </div>
      </>
    );
  } else if (text === '단지안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          새로운 주거타운의 시작을 알리는 대전 용전 마루힐의 특별한 가치.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          주거 만족도를 높이는 설계와 일상을 더 편리하게 만드는 다양한 공간 구성.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          대전 용전 마루힐, 기대 이상의 내일을 만나다.
        </div>
      </>
    );
  }
};
