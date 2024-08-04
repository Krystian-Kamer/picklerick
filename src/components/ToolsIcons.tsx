import {
  SiReact,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiReactrouter,
} from 'react-icons/si';
import { GiButterToast } from 'react-icons/gi';

const tools = [
  { Icon: SiReact, name: 'React', href: 'https://react.dev/' },
  {
    Icon: SiRedux,
    name: 'Redux Toolkit',
    href: 'https://redux-toolkit.js.org/',
  },
  {
    Icon: SiReactrouter,
    name: 'React Router',
    href: 'https://reactrouter.com/en/main',
  },
  {
    Icon: SiTypescript,
    name: 'Typescript',
    href: 'https://www.typescriptlang.org/',
  },
  {
    Icon: SiJavascript,
    name: 'Javascript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    Icon: GiButterToast,
    name: 'React Toastify',
    href: 'https://fkhadra.github.io/react-toastify/introduction',
  },
];

const ToolsIcons = () => {
  return (
    <div className='grid sm:grid-cols-2'>
      {tools.map((tool) => {
        const { Icon, name, href } = tool;
        return (
          <a
            rel='noreferrer'
            target='_blank'
            className='flex items-center py-2 px-4 sm:px-2 lg:px-4 w-fit gap-x-4 sm:gap-x-1 lg:gap-x-4 bg-slate-900 text-lime-200 mb-3 rounded-3xl sm:rounded-xl lg:rounded-3xl hover:scale-105 duration-500'
            href={href}
            title={`Go to ${name} page`}
            key={name}
          >
            <Icon className='w-14 h-14 sm:w-8 sm:h-8 lg:w-12 lg:h-12 ' />
            <span className='text-xl sm:text-sm lg:text-xl tracking-wider'>
              {name}
            </span>
          </a>
        );
      })}
    </div>
  );
};
export default ToolsIcons;
