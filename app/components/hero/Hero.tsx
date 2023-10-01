import ArticleCard from '../articleCard/ArticleCard';
import SmallArticleCard from '../smallArticleCard/SmallArticleCard';
import { newsType } from '@/app/types/Types';
import { getTopNews } from '@/app/lib/api';
// styles
import styles from './hero.module.scss';

const Hero: React.FC = async () => {
  const news = await getTopNews();

  return (
    <div className={styles.hero}>
      <section className={styles.grid_wrap}>
        <div className={styles.grid}>
          {news &&
            news.articles.filter(
              (article: newsType) => article.source.id !== null
            ).slice(0, 1).map((article: newsType) => (
              <div key={article.url}>
                <ArticleCard
                  title={article?.title}
                  description={article?.description}
                  urlToImage={article?.urlToImage}
                  source={article?.source}
                />
              </div>
            ))}
          {/* small cards on the side */}
          <div className={`${styles.grid_wrap} ${styles.grid_group}`}>
            <div className={styles.grid}>
              {news &&
                news.articles.filter(
                  (article: newsType) => article.source.id !== null
                ).slice(1, 5).map((article: newsType) => (
                  <div key={article.url}>
                    <SmallArticleCard
                      title={article?.title}
                      source={article?.source}
                      urlToImage={article?.urlToImage}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.grid_wrap}>
        <div className={styles.grid}>
          {news &&
            news.articles.filter(
              (article: newsType) => article.source.id !== null
            ).slice(-3).map((article: newsType) => (
              <div key={article.url}>
                <ArticleCard
                  title={article?.title}
                  description={article?.description}
                  urlToImage={article?.urlToImage}
                  source={article?.source}
                />
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
