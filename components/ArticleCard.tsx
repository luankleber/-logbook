import { Article } from 'utils/types';
import Image from 'next/image';
import slugify from 'slugify';
import getLocalizedDate from 'utils/getLocalizedDate';

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  const slug = slugify(article.title).toLowerCase();

  const formattedTime = getLocalizedDate(article.publishedDate);

  return (
    <a href={`/blog/${slug}`}>
      <div className="flex flex-col overflow-hidden cursor-pointer group">
        <div className="relative">
          {/* <div className="absolute">
            {article?.categories?.map(category => (
              <div
                key={category}
                className="relative shadow z-[2] inline-flex items-center px-3 py-1.5 mb-2 mr-2 text-xs font-bold text-black uppercase bg-gray-100 rounded left-3 top-3"
              >
                {category}
              </div>
            ))}
          </div> */}
          <div className=" filter contrast-[0.9]">
            <Image
              className="object-cover w-full h-48 transition rounded-md aspect-video group-hover:opacity-90 bg-gray-50"
              src={article.thumbnail}
              blurDataURL={article.thumbnail}
              objectFit="cover"
              placeholder="blur"
              layout="intrinsic"
              width={1000}
              height={400}
              alt={'article cover'}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between flex-1 py-4 bg-regal-blue">
          <div className="flex-1">
            <p className="text-xl font-semibold text-white">
              <span className="text-2xl">{article.emoji}</span> {article.title}
            </p>
            <p className="mt-2 text-base text-gray-400 line-clamp-2">{article.summary}</p>
          </div>
          <div className="flex items-center mt-4">
            <div className="flex mb-2 space-x-1 text-sm text-white">
              {article.categories.map(category => (
                <div key={category}>
                  {/* <span className="font-semibold text-white">{category} </span> */}
                  {/* <span aria-hidden="true">&middot;</span> */}
                </div>
              ))}
              {/* <time dateTime={formattedTime}>{formattedTime}</time> */}
            </div>
            {/* <p className="text-sm font-medium text-gray-900">{article?.author?.name}</p> */}
          </div>
        </div>
      </div>
    </a>
  );
}
