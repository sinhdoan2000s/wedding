import React from "react";
import styles from "./Album.module.css";
import khoanhKhac1 from "../images/khoanh-khac-1.png";
import khoanhKhac2 from "../images/khoanh-khac-2.png";
import khoanhKhac3 from "../images/khoanh-khac-3.png";
import khoanhKhac4 from "../images/khoanh-khac-4.png";

export default function Album(){
    return (
        <div id="album" className={styles.album}>
  <div className={styles.albumInner}>
    <div className={styles.albumWrapper}>
      <div className="relative">
        <div
          contentEditable="false"
          id="album-title-album"
          className={styles.albumTitle}
        >
          Khoảnh khắc của chúng tôi
        </div>
      </div>{" "}
      <div className={styles.galleryGrid}>
        <div className={styles.galleryItem}>
          <a
            href="/assets/images/templates/general/picture5.webp"
            data-src="/assets/images/templates/general/picture5.webp"
            data-lg-id="c2c80717-d942-4603-ba31-64fd3efe8c97"
          >
            <img
                src={khoanhKhac1}
              alt=""
              className={styles.galleryImage}
            />
          </a>
        </div>
        <div className={styles.galleryItem}>
          <a
            href="/assets/images/templates/general/picture6.webp"
            data-src="/assets/images/templates/general/picture6.webp"
            data-lg-id="75def5ac-b9c9-450f-a86b-27d846976e50"
          >
            <img
              src={khoanhKhac2}
              alt=""
              className={styles.galleryImage}
            />
          </a>
        </div>
        <div className={styles.galleryItem}>
          <a
            href="/assets/images/templates/general/picture7.webp"
            data-src="/assets/images/templates/general/picture7.webp"
            data-lg-id="ec531d0c-f92b-4ef8-9a1e-656fddf0355f"
          >
            <img
              src={khoanhKhac3}
              alt=""
              className={styles.galleryImage}
            />
          </a>
        </div>
        <div className={styles.galleryItem}>
          <a
            href="/assets/images/templates/general/picture8.webp"
            data-src="/assets/images/templates/general/picture8.webp"
            data-lg-id="2280c963-6d76-46cf-b613-5dab600686e0"
          >
            <img
              src={khoanhKhac4}
              alt=""
              className={styles.galleryImage}
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}