import React from 'react';
import styles from './Introduction.module.css';
import anhCuoiBanner from "../images/anh-cuoi-banner.png";

export default function Introduction(){
    return (
        <div id="introduction" className={styles.introduction}>
  <div className={styles.introductionInner}>
    <section className={styles.introductionSection}>
      <div className={styles.brideContainer}>
        <div className={styles.bridgeImageWrapper}>
          <img
            className={styles.bridgeImage}
            alt="Wedding couple"
            id="introduction-imageBridge"
            src={anhCuoiBanner}
            loading="lazy"
            draggable="false"
            style={{
              objectPosition: "50% 50%",
              transform: "scale(1)",
              transformOrigin: "center center",
              opacity: 1,
              transition: "opacity 0.15s ease-in-out"
            }}
          />
        </div>
        <div className={styles.brideCardContainer}>
          <h1 className={styles.brideTitle}>
            Cô dâu
          </h1>
          <div className={styles.brideContent}>
            <div className={styles.brideText}>
              <div className="relative">
                <div
                  contentEditable="false"
                  id="introduction-contentBridge"
                  className={styles.brideContentField}
                >
                  Chúng tôi rất vui mừng được chia sẻ khoảnh khắc quan trọng nhất
                  của cuộc đời mình với gia đình, bạn bè và những người thân yêu.
                  Ngày cưới không chỉ là sự khởi đầu của hành trình mới mà còn là
                  dịp để chúng tôi cùng các bạn tạo nên những kỷ niệm đáng nhớ.
                </div>
              </div>
              <div className={styles.brideDivider} />
            </div>
          </div>
          <div className={styles.brideIconContainer}>
            <img
              src="https://thiepcuoi.cloud/assets/images/templates/coba/iconIntroRight1.png"
              className={styles.brideIcon}
            />
          </div>
        </div>
      </div>
      <div className={styles.groomContainer}>
        <div className={styles.groomCardContainer}>
          <h1 className={styles.groomTitle}>
            Chú rể
          </h1>
          <div className={styles.groomContent}>
            <div className={styles.groomText}>
              <div className="relative">
                <div
                  contentEditable="false"
                  id="introduction-contentGroom"
                  className={styles.groomContentField}
                >
                  Mỗi lời chúc phúc và sự hiện diện của bạn trong ngày đặc biệt
                  này chính là món quà vô giá với chúng tôi. Hãy cùng chúng tôi
                  tận hưởng niềm vui, tiếng cười và sự ấm áp trong ngày hạnh phúc
                  nhất này!
                </div>
              </div>
              <div className={styles.groomDivider} />
            </div>
          </div>
          <div className={styles.groomIconContainer}>
            <img
              src="https://thiepcuoi.cloud/assets/images/templates/coba/iconIntroLeft1.png"
              className={styles.groomIcon}
            />
          </div>
        </div>
        <div className={styles.groomImageWrapper}>
          <img
            className={styles.groomImage}
            alt="Wedding couple"
            id="introduction-imageGroom"
            src={anhCuoiBanner}
            loading="lazy"
            draggable="false"
            style={{
              objectPosition: "50% 50%",
              transform: "scale(1)",
              transformOrigin: "center center",
              opacity: 1,
              transition: "opacity 0.15s ease-in-out"
            }}
          />
        </div>
      </div>
    </section>
  </div>
</div>

    )
}