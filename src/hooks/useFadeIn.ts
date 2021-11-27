import {useState, useEffect} from 'react';

const baseClassName = ' transition-all duration-500 transform ';

const hook = (delay=1000):[string, ()=>void] => {
  const [className, setClassName] = useState(baseClassName + 'translate-y-10 opacity-0');
  const replay = () => {
    setClassName(baseClassName + 'translate-y-10 opacity-0');
    setTimeout(()=>{
      setClassName(baseClassName + 'translate-y-0 opacity-1');
    }, delay);
  };
  useEffect(()=>{
    setTimeout(()=>{
      setClassName(baseClassName + 'translate-y-0 opacity-1');
    }, delay);
  }, []);
  return [className, replay];
};

export default hook;
