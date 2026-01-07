import React from "react";
import styles from "./ImageWithText.module.css";

export default function ImageWithText(){
    return (
        <div id="invitation" className={styles.invitation}>
            <div className={styles.invitationInner}>
                <section className={styles.invitationSection}>
                <section className={styles.invitationContent}>
                    <div
                    className={styles.imageContainer}
                    >
                    <img
                        src="https://thiepcuoi.cloud/assets/images/templates/coba/stampInvite1.png"
                        className={styles.stampImage}
                    />
                    <div className={styles.textOverlay}>
                        <div className="relative">
                        <div
                            contentEditable="false"
                            id="invitation-time-invitation"
                            className={styles.timeField}
                        >
                            09:00
                        </div>
                        </div>
                        <div className="relative">
                        <div
                            contentEditable="false"
                            id="invitation-date-invitation"
                            className={styles.dateField}
                        >
                            25-01-2026
                        </div>
                        </div>
                        <div className={styles.locationSection}>
                        <p className={styles.locationLabel}>
                            Tại
                        </p>
                        <div className="relative">
                            <div
                            contentEditable="false"
                            id="invitation-location-invitation"
                            className={styles.locationField}
                            >
                            Vĩnh Bảo, Hải Phòng, Việt Nam
                            </div>
                        </div>
                        </div>
                        <div className={styles.iconContainer}>
                        <img
                            src="https://thiepcuoi.cloud/assets/images/templates/coba/iconInvite1.png"
                            className={styles.icon}
                        />
                        </div>
                    </div>
                    </div>
                    <div
                    className={styles.contentContainer}
                    >
                    <div className={styles.headerSection}>
                        <div className="relative">
                        <div
                            contentEditable="false"
                            id="invitation-title-invitation"
                            className={styles.titleField}
                        >
                            Trân trọng kính mời
                        </div>
                        </div>
                        <div className="relative">
                        <div
                            contentEditable="false"
                            id="invitation-subTitle-invitation"
                            className={styles.subtitleField}
                        >
                            tới dự hôn lễ của 2 vợ chồng chúng tôi
                        </div>
                        </div>
                        <div className={styles.divider} />
                    </div>
                    <div className={styles.coupleSection}>
                        <div className={styles.coupleGrid}>
                        <div className="flex-1">
                            <p className={styles.coupleLabel}>
                            Chú rể
                            </p>
                            <div className="relative">
                            <div
                                contentEditable="false"
                                id="invitation-groom-invitation"
                                className={styles.coupleNameField}
                            >
                                Xuân Sinh
                            </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className={styles.coupleLabel}>
                            Cô dâu
                            </p>
                            <div className="relative">
                            <div
                                contentEditable="false"
                                id="invitation-bridge-invitation"
                                className={styles.coupleNameField}
                            >
                                Bùi Quỳnh
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="relative">
                        <div
                            contentEditable="false"
                            id="invitation-description-invitation"
                            className={styles.descriptionField}
                        >
                            Trân trọng kính mời quý khách tới dự buổi lễ của chúng tôi.
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                </section>
            </div>
        </div>
    )
};