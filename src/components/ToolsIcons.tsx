import {
  SiReact,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiReactrouter,
} from 'react-icons/si';
import { GiButterToast } from 'react-icons/gi';

const ToolsIcons = () => {
  return (
    <div>
      <a className='flex items-center' href=''>
        <SiReact className='w-12 h-12' /> react
      </a>
      <a className='flex items-center' href=''>
        <SiRedux className='w-12 h-12' /> redux toolkit
      </a>
      <a className='flex items-center' href=''>
        <SiReactrouter className='w-12 h-12' /> react router
      </a>
      <a className='flex items-center' href=''>
        <SiTypescript className='w-12 h-12' /> typescript
      </a>
      <a className='flex items-center' href=''>
        <SiJavascript className='w-12 h-12' /> typescript
      </a>
      <a className='flex items-center' href=''>
        <GiButterToast className='w-12 h-12' /> react toastify
      </a>
    </div>
  );
};
export default ToolsIcons;
