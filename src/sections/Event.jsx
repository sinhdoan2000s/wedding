import styles from "./Event.module.css";

export default function Event(){
    return (
        <div id="event" className={styles.root}>
  <div className={styles.root}>
    <section className={styles.sectionBg}>
      <img
        src="https://thiepcuoi.cloud/assets/images/templates/coba/frameEventLeft1.png"
        className={styles.frameLeft}
      />
      <img
        src="https://thiepcuoi.cloud/assets/images/templates/coba/frameEventRight1.png"
        className={styles.frameRight}
      />
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.mainTitleWrapper}>
            <div className={styles.root}>
              <div
                contentEditable="false"
                id="event-eventTitle-event"
                className={styles.eventTitle}
              >
                Sự kiện
              </div>
            </div>
          </div>
          <div className={styles.centerBlock}>
            <div className={styles.eventBlocksWrapper}>
              <div className={styles.eventBlock}>
                <div className={styles.root}>
                  <div className={styles.root}>
                    <div className={styles.root}>
                      <img
                        src="https://thiepcuoi.cloud/assets/images/templates/coba/IconEvent1_1.png"
                        className={styles.iconImage}
                      />
                      <p className={styles.iconNumber}>
                        01
                      </p>
                    </div>
                    <div className={styles.detailsWrapper}>
                      <div className={styles.badge}>
                        <h3 className={styles.badgeTitle}>
                          Nhà gái
                        </h3>
                        <h3 className={styles.badgeSub}>
                          09:00, Ngày 25-01-2026
                        </h3>
                      </div>
                      <div className={`${styles.locationText} ${styles.locationTextPrimary}`}>
                        Ngõ nhà thờ, xóm 5 làng Cổ Am, xã Vĩnh Am Hải Phòng
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.dividerBar} />
              </div>
              <div className={styles.eventBlock}>
                <div className={styles.root}>
                  <div className={styles.root}>
                    <div className={styles.root}>
                      <img
                        src="https://thiepcuoi.cloud/assets/images/templates/coba/IconEvent1_2.png"
                        className={styles.iconImage}
                      />
                      <p className={styles.iconNumber}>
                        02
                      </p>
                    </div>
                    <div className={styles.detailsWrapper}>
                      <div className={`${styles.badge} ${styles.badgePrimary}`}>
                        <h3 className={styles.badgeTitle}>
                          Nhà trai
                        </h3>
                        <h3 className={styles.badgeSub}>
                          09:30, Ngày 25-01-2026
                        </h3>
                      </div>
                      <div className={`${styles.locationText} ${styles.locationTextSecondary}`}>
                        Thôn Duyên Lão, xã Tiên Lãng, thành phố Hải Phòng
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</div>

    )
}