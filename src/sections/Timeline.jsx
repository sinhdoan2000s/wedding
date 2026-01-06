import React from "react";
import styles from "./Timeline.module.css";
import timeLine1 from "../images/time-line-1.png";
import timeLine2 from "../images/time-line-2.png";
import timeLine3 from "../images/time-line-3.png";

export default function Timeline(){
    return (
        <div id="timeline" className={styles.timeline}>
  <div className={styles.timelineInner}>
    <section className={styles.timelineSection}>
      <section className={styles.timelineContent}>
        <div className={`${styles.relative} ${styles.visible}`}>
          <div className={styles.relative}>
            <div
              contentEditable="false"
              id="timeline-mainTitle"
              className={styles.mainTitle}
            >
              Cột mốc
            </div>
          </div>
        </div>
        <div className={styles.timelineList}>
          <div className={`${styles.relative} ${styles.visible}`}>
            <div className={styles.dateBadge}>
              <div className={styles.relative}>
                <div
                  contentEditable="false"
                  id="timeline-date-0"
                  className={styles.dateText}
                >
                  11-11-2024
                </div>
              </div>
            </div>
            <div className={styles.eventRow}>
              <div className={`${styles.eventCard} ${styles.eventCardWithFrame}`}>
                <div className={styles.relative}>
                  <div
                    contentEditable="false"
                    id="timeline-title-0"
                    className={styles.eventTitle}
                  >
                    Lần đầu gặp nhau
                  </div>
                </div>
                <div className={styles.relative}>
                  <div
                    contentEditable="false"
                    id="timeline-content-0"
                    className={styles.eventContent}
                  >
                    Mỗi lời chúc phúc và sự hiện diện của bạn trong ngày đặc
                    biệt này chính là món quà vô giá với chúng tôi. Hãy cùng
                    chúng tôi tận hưởng niềm vui, tiếng cười và sự ấm áp trong
                    ngày hạnh phúc nhất này!
                  </div>
                </div>
                <div className={styles.eventDivider} />
              </div>
              <div className={styles.photoBlock}>
                <img
                  src="https://thiepcuoi.cloud/assets/images/templates/coba/stampBanner1.png"
                  alt="stamp"
                  loading="lazy"
                  className={styles.photoStamp}
                />
                <div className={styles.photoFrame}>
                  <img
                    alt="Wedding couple"
                    id="picture-timeline-0"
                    src={timeLine1}
                    loading="lazy"
                    draggable="false"
                  />
                </div>
              </div>
            </div>
          </div>
        <div className={`${styles.relative} ${styles.visible}`}>
            <div className={styles.dateBadge}>
              <div className={styles.relative}>
                <div
                  contentEditable="false"
                  id="timeline-date-2"
                  className={styles.dateText}
                >
                  09-03-2025
                </div>
              </div>
            </div>
            <div className={styles.eventRow}>
              <div className={`${styles.eventCard} ${styles.eventCardWithFrame}`}>
                <div className={styles.relative}>
                  <div
                    contentEditable="false"
                    id="timeline-title-2"
                    className={styles.eventTitle}
                  >
                    Chuyến đi đầu tiên
                  </div>
                </div>
                <div className={styles.relative}>
                  <div
                    contentEditable="false"
                    id="timeline-content-2"
                    className={styles.eventContent}
                  >
                    Mỗi lời chúc phúc và sự hiện diện của bạn trong ngày đặc
                    biệt này chính là món quà vô giá với chúng tôi. Hãy cùng
                    chúng tôi tận hưởng niềm vui, tiếng cười và sự ấm áp trong
                    ngày hạnh phúc nhất này!
                  </div>
                </div>
                <div className={styles.eventDivider} />
              </div>
              <div className={styles.photoBlock}>
                <img
                  src="https://thiepcuoi.cloud/assets/images/templates/coba/stampBanner1.png"
                  alt="stamp"
                  loading="lazy"
                  className={styles.photoStamp}
                />
                <div className={styles.photoFrame}>
                  <img
                    alt="Wedding couple"
                    id="picture-timeline-2"
                    src={timeLine2}
                    loading="lazy"
                    draggable="false"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.relative} ${styles.visible}`}>
            <div className={styles.dateBadge}>
              <div className={styles.relative}>
                <div
                  contentEditable="false"
                  id="timeline-date-2"
                  className={styles.dateText}
                >
                  25-01-2026
                </div>
              </div>
            </div>
            <div className={styles.eventRow}>
              <div className={`${styles.eventCard} ${styles.eventCardWithFrame}`}>
                <div className={styles.relative}>
                  <div
                    contentEditable="false"
                    id="timeline-title-2"
                    className={styles.eventTitle}
                  >
                    Hẹn ước trọn đời
                  </div>
                </div>
                <div className={styles.relative}>
                  <div
                    contentEditable="false"
                    id="timeline-content-2"
                    className={styles.eventContent}
                  >
                    Mỗi lời chúc phúc và sự hiện diện của bạn trong ngày đặc
                    biệt này chính là món quà vô giá với chúng tôi. Hãy cùng
                    chúng tôi tận hưởng niềm vui, tiếng cười và sự ấm áp trong
                    ngày hạnh phúc nhất này!
                  </div>
                </div>
                <div className={styles.eventDivider} />
              </div>
              <div className={styles.photoBlock}>
                <img
                  src="https://thiepcuoi.cloud/assets/images/templates/coba/stampBanner1.png"
                  alt="stamp"
                  loading="lazy"
                  className={styles.photoStamp}
                />
                <div className={styles.photoFrame}>
                  <img
                    alt="Wedding couple"
                    id="picture-timeline-2"
                    src={timeLine3}
                    loading="lazy"
                    draggable="false"
                  />
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