import siteData from 'siteData';
import Image from 'next/image';

export default function Socials() {
  const socials = [
    {
      name: 'Twitter',
      href: siteData?.twitter,
      icon: '/socials/twitter.svg'
    },
    {
      name: 'GitHub',
      href: siteData?.github,
      icon: '/socials/github.svg'
    },
    {
      name: 'LinkedIn',
      href: siteData?.linkedin,
      icon: '/socials/linkedin.svg'
    }
  ];

  return (
    <div className="flex items-center justify-center space-x-6 md:order-2">
      {socials.map(item => (
        <a
          key={item.name}
          href={item.href}
          className="text-gray-400 transform hover:text-gray-500 filter hover:contrast-0"
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only">{item.name}</span>
          <div className="flex items-center align-middle">
            <Image
              src={item.icon}
              alt="social-icon"
              width={24}
              height={24}
              objectFit="cover"
            />
          </div>
        </a>
      ))}
    </div>
  );
}
