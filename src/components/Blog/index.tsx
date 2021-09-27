import React from 'react';
import {useHistory} from 'react-router-dom';
import {Button, Icon} from 'semantic-ui-react';
import {IBlog} from '@/types';
import './index.less';

const CardContent = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-gray-800">
        前言、版本冲突处理、gradle最新版本判断代码、结论
      </div>
      <div className="mt-10">
        <Button secondary>阅读全文 &gt;</Button>
      </div>
      <div className="mt-20 h-px w-20 bg-gray-400"></div>
    </div>
  );
};

const MainContent:React.FC<{content:string}> = ({content}) => {
  return (
    <div className="w-full">
      <div dangerouslySetInnerHTML={{__html: content}} className="markdown-body"></div>
    </div>
  );
};

const Cpn:React.FC<{blog:IBlog, card?:boolean}> = ({card = false, blog={}}) => {
  const history = useHistory();
  const toBlogPage = () => {
    history.push('/blog/1');
  };
  return (
    <div onClick={toBlogPage} className="py-10 flex flex-col items-center">
      <div className="text-center text-2xl text-gray-600 py-4">aapt2编译找不到文件的问题记录</div>
      <div className="text-center text-xs text-gray-400">
        <div>
          <span><Icon name="calendar alternate outline"/> 发表于 2020-11-07</span>
          <span className="mx-2">  |  </span>
          <span><Icon name="folder outline"/> 分类于 <a>android</a></span>
        </div>
        <div className="mt-2">
          <Icon name="file word outline"/> 字数统计：412字
        </div>
      </div>
      <div className="mt-10 w-full">
        {
          card ? <CardContent/> : <MainContent content={blog.content}></MainContent>
        }
      </div>
    </div>
  );
};

export default Cpn;
