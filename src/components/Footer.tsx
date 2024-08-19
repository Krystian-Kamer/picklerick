import { FaLinkedinIn, FaGithub, FaPhoneAlt } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';

const contactInfo = [
  {
    Icon: FaLinkedinIn,
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/krystian-kamer-0aa148279/',
  },
  {
    Icon: FaGithub,
    name: 'Github',
    href: 'https://github.com/Krystian-Kamer',
  },
  {
    Icon: GoMail,
    name: 'texen24@gmail.com',
  },
  {
    Icon: FaPhoneAlt,
    name: '666 660 128',
  },
];

const Footer = () => {
  return (
    <div className='w-full bg-slate-900'>
      <div className='grid sm:grid-cols-2 max-w-7xl mx-auto justify-evenly py-3 text-white selection:text-lime-200 my-10 p-16 sm:px-6 md:px-10 gap-x-6 sm:gap-x-2 md:gap-x-6'>
        <div className='mb-6'>
          <h2 className='text-2xl mb-4'>About me</h2>
          <p>
            My name is <span className='font-semibold'>Krystian Kamer</span>. My
            hobby is programming. I want to constantly develop and get better at
            it. I want to eventually get a job as a Junior Frontend Developer.
          </p>
        </div>
        <div>
          <h2 className='text-2xl mb-4'>Contact</h2>
          <div className='grid md:grid-cols-2'> 
            {contactInfo.map((tool) => {
              const { Icon, name, href } = tool;
              return (
                <a
                  rel='noreferrer'
                  target='_blank'
                  className='flex items-center py-1 w-fit gap-x-4 sm:gap-x-3 lg:gap-x-4 text-lime-200 mb-3 rounded-3xl sm:rounded-xl lg:rounded-3xl hover:scale-105 duration-500'
                  href={href}
                  title={`Go to ${name} page`}
                  key={name}
                >
                  <Icon className='w-6 h-6 ' />
                  <span className='text-md sm:text-sm lg:text-lg tracking-wider'>
                    {name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
