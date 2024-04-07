import Container from 'components/Container';
import Socials from 'components/Socials';
import siteData from 'siteData';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="fixed z-50 w-full bg-regal-blue">
      {/* <Container> */}
        <div className="flex px-10 justify-between items-center w-full py-6">
          <Link href="/" passHref>
            <div className="text-3xl font-extrabold cursor-pointer text-white">{siteData?.author}</div>
          </Link>
          <Socials />
        </div>
      {/* </Container> */}
    </div>
  );
}
