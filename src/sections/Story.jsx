import React from "react";
import styles from "./Story.module.css";
import intro from "../images/intro-1.jpg";

export default function Story(){
    return (
        <div id="story" className={styles.story}>
  <div className={styles.storyInner}>
    <section className={styles.storySection}>
      <section className={styles.storyContent}>
        <div className={styles.storyWrapper}>
          <div className={styles.textContainer}>
            <div className="relative">
              <div
                contentEditable="false"
                id="story-title-story"
                className={styles.storyTitle}
              >
                Chuyện chúng mình
              </div>
            </div>
            <div className="relative">
              <div
                contentEditable="false"
                id="story-description-story"
                className={styles.storyDescription}
              >
                Chúng tôi rất vui mừng được chia sẻ khoảnh khắc quan trọng nhất
                của cuộc đời mình với gia đình, bạn bè và những người thân yêu.
                Ngày cưới không chỉ là sự khởi đầu của hành trình mới mà còn là
                dịp để chúng tôi cùng các bạn tạo nên những kỷ niệm đáng nhớ.
              </div>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <img
                className={styles.storyImage}
                alt="Picture 3"
                id="imageStory-story"
                src={intro}
                loading="lazy"
                draggable="false"
                style={{
                  objectPosition: "50% 90%",
                  transform: "scale(1)",
                  transformOrigin: "center center",
                  opacity: 1,
                  transition: "opacity 0.15s ease-in-out"
                }}
              />
              <img
                src="https://thiepcuoi.cloud/assets/images/templates/coba/iconStory.png"
                className={styles.storyImageIcon}
                alt="Icon"
              />
            </div>
            <img
              src="https://thiepcuoi.cloud/assets/images/templates/coba/stampStory.png"
              className={styles.storyStamp}
              alt="Stamp Story"
            />
          </div>
        </div>
      </section>
      <img
        src="https://thiepcuoi.cloud/assets/images/templates/coba/frameStory1.png"
        className={styles.bottomFrame}
        alt="Bottom Frame"
      />
    </section>
  </div>
</div>

    )
}