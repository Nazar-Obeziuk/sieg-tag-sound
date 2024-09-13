import React, { useRef, useState } from "react";
import styles from "./AdminPortfolioTable.module.css";
import { IPortfolio } from "../../../../../../services/portfolio/portfolio.interface";

interface Props {
  handleEditPortfolio: (blog: IPortfolio) => void;
  handleDeletePortfolio: (_id: string) => void;
  adminPortfolio: IPortfolio[];
}

const AdminPortfolioTable: React.FC<Props> = ({
  handleDeletePortfolio,
  handleEditPortfolio,
  adminPortfolio,
}) => {
  const [audioPlayStates, setAudioPlayStates] = useState<{
    [key: number]: { before: boolean; after: boolean };
  }>({});
  const audioRefsBefore = useRef<{ [key: number]: HTMLAudioElement | null }>(
    {}
  );
  const audioRefsAfter = useRef<{ [key: number]: HTMLAudioElement | null }>({});
  const audioWrapper = useRef<any>(null);

  const playAudio = (
    audioElement: HTMLAudioElement | null,
    index: number,
    type: "before" | "after"
  ) => {
    if (audioWrapper.current) {
      const audios = audioWrapper.current.querySelectorAll("audio");

      // Зупиняємо всі аудіо та оновлюємо стани для всіх треків
      audios.forEach((audio: HTMLAudioElement, idx: number) => {
        audio.pause();
        setAudioPlayStates((prevState) => ({
          ...prevState,
          [idx]: { before: false, after: false },
        }));
      });

      if (audioElement) {
        audioElement.play();

        setAudioPlayStates((prevState) => ({
          ...prevState,
          [index]: {
            ...prevState[index],
            [type]: true,
          },
        }));
      }
    }
  };

  const pauseAudio = (
    audioElement: HTMLAudioElement | null,
    index: number,
    type: "before" | "after"
  ) => {
    if (audioElement) {
      audioElement.pause();

      setAudioPlayStates((prevState) => ({
        ...prevState,
        [index]: {
          ...prevState[index],
          [type]: false,
        },
      }));
    }
  };

  return (
    <div className={styles.admin__table_block}>
      {adminPortfolio.length > 0 ? (
        <table className={styles.admin__table_item} ref={audioWrapper}>
          <thead className={styles.admin__table_head}>
            <tr className={styles.admin__table_tr}>
              <th className={styles.admin__table_th}>Файл трека до</th>
              <th className={styles.admin__table_th}>Файл трека після</th>
              <th className={styles.admin__table_th}>Мова</th>
              <th className={styles.admin__table_th}>Назва трека</th>
              <th className={styles.admin__table_th}>Категорія</th>
              <th className={styles.admin__table_th}>Заголовок</th>
              <th className={styles.admin__table_th}>Текст</th>
              <th className={styles.admin__table_th}>Дії</th>
            </tr>
          </thead>
          <tbody className={styles.admin__table_body}>
            {adminPortfolio.map((item: IPortfolio, index) => {
              return (
                <tr key={index} className={styles.admin__table_tr}>
                  <td className={styles.admin__table_td}>
                    <div className={styles.portfolio__work_block}>
                      <p className={styles.portfolio__work_text}>Трек (До)</p>
                      {!audioPlayStates[index]?.before ? (
                        <img
                          src="../../images/play-icon.svg"
                          alt="play icon"
                          className={styles.portfolio__play_icon}
                          onClick={() =>
                            playAudio(
                              audioRefsBefore.current[index],
                              index,
                              "before"
                            )
                          }
                        />
                      ) : (
                        <img
                          src="../../images/pause-icon.svg"
                          alt="pause icon"
                          className={styles.portfolio__play_icon}
                          onClick={() =>
                            pauseAudio(
                              audioRefsBefore.current[index],
                              index,
                              "before"
                            )
                          }
                        />
                      )}
                      <audio
                        ref={(el) => (audioRefsBefore.current[index] = el)}
                        src={item.track_before}
                      />
                    </div>
                  </td>
                  <td className={styles.admin__table_td}>
                    <div className={styles.portfolio__work_block}>
                      <p className={styles.portfolio__work_text}>
                        Трек (Після)
                      </p>
                      {!audioPlayStates[index]?.after ? (
                        <img
                          src="../../images/play-icon.svg"
                          alt="play icon"
                          className={styles.portfolio__play_icon}
                          onClick={() =>
                            playAudio(
                              audioRefsAfter.current[index],
                              index,
                              "after"
                            )
                          }
                        />
                      ) : (
                        <img
                          src="../../images/pause-icon.svg"
                          alt="pause icon"
                          className={styles.portfolio__play_icon}
                          onClick={() =>
                            pauseAudio(
                              audioRefsAfter.current[index],
                              index,
                              "after"
                            )
                          }
                        />
                      )}
                      <audio
                        ref={(el) => (audioRefsAfter.current[index] = el)}
                        src={item.track_after}
                      />
                    </div>
                  </td>
                  <td className={styles.admin__table_td}>
                    {item.portfolio_language}
                  </td>
                  <td className={styles.admin__table_td}>{item.name}</td>
                  <td className={styles.admin__table_td}>{item.category}</td>
                  <td className={styles.admin__table_td}>{item.title}</td>
                  <td className={styles.admin__table_td}>{item.text}</td>
                  <td
                    className={`${styles.admin__table_td} ${styles.admin__td_actions}`}
                  >
                    <button
                      onClick={() => handleDeletePortfolio(item._id)}
                      className={styles.admin__td_action}
                      type="button"
                    >
                      Видалити
                    </button>
                    <button
                      onClick={() => handleEditPortfolio(item)}
                      className={styles.admin__td_action}
                      type="button"
                    >
                      Редагувати
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p className={styles.admin__table_empty}>
          Портфоліо ще немає, додайте одного щоб побачити його тут...
        </p>
      )}
    </div>
  );
};

export default AdminPortfolioTable;
