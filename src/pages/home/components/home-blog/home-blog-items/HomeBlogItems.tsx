import React from "react";
import styles from "./HomeBlogItems.module.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Button from "../../../../../components/UI/button/Button";
import { useTranslation } from "react-i18next";
import { IBlog } from "../../../../../services/blog/blog.interface";
import { useNavigate } from "react-router-dom";

interface Props {
  blogs: IBlog[];
}

const HomeBlogItems: React.FC<Props> = ({ blogs }) => {
  const swiper = useSwiper();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigate = (_id: string) => {
    navigate(`/blog/${_id}`);
  };

  return (
    <>
      <div className={styles.home__blog_content}>
        <Swiper
          key={"uniq1"}
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            nextEl: ".arrow-right-blog",
            prevEl: ".arrow-left-blog",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Navigation]}
          className="blogSwiper"
        >
          {blogs.map((blog: IBlog, index: number) => (
            <SwiperSlide key={index}>
              <div className={styles.home__blog_item}>
                <img
                  src={blog.image_url}
                  alt="portfolio img"
                  className={styles.home__blog_image}
                />
                <div className={styles.home__blog_info}>
                  <h3 className={styles.home__blog_name}>{blog.title}</h3>
                  <p className={styles.home__blog_description}>{blog.text}</p>
                  <div className={styles.home__info_action}>
                    <Button
                      type={"button"}
                      handleClick={() => handleNavigate(blog.langID)}
                    >
                      {t("home.homeBlog.homeBlogButtonText")}
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <span
        onClick={() => swiper && swiper.slidePrev()}
        className={`arrow-left-blog ${styles.arrow__slide_left} arrow-blog`}
      >
        <svg
          width="20"
          height="35"
          viewBox="0 0 17 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.4438 31.9999L0.887695 16.4433L16.4438 0.887207"
            stroke="#EE701F"
            strokeWidth="2"
          />
        </svg>
      </span>
      <span
        onClick={() => swiper && swiper.slideNext()}
        className={`arrow-right-blog ${styles.arrow__slide_right} arrow-blog`}
      >
        <svg
          width="20"
          height="35"
          viewBox="0 0 18 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.999515 1.00009L16.5557 16.5567L0.999515 32.1128"
            stroke="#EE701F"
            strokeWidth="2"
          />
        </svg>
      </span>
    </>
  );
};

export default HomeBlogItems;
