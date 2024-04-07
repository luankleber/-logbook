import Image from 'next/image';
import SubscribeInput from './SubscribeInput';
import siteData from 'siteData';
import Container from './Container';

export default function HeroHeader({ blog }: any) {
  return (
      <div className="justify-center py-24 flex items-center">
        <div className="mr-40">
            {siteData?.profileUrl && (
              <Image
                src={siteData.profileUrl}
                className="mx-auto rounded-full"
                width={150}
                height={150}
                alt="profile"
              />
            )}
        </div>
        <div className="text-center">
          <div className="mt-4 text-3xl font-bold text-white">
            {siteData?.headerTitle} 
          </div>
          <div className="max-w-md mx-auto mt-2 text-lg  text-gray-300">
            {siteData?.headerDescription}
          </div>
          {/* <div className="mt-12">
            <SubscribeInput />
          </div> */}
        </div>
      </div>
  );
}
