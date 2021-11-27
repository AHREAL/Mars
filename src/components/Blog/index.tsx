import React from 'react';
import {useHistory} from 'react-router-dom';
import {Button, Icon} from 'semantic-ui-react';
import {IBlog} from '@/types';
import moment from 'moment';
import './index.less';

const CardContent:React.FC<{blog:IBlog}> = ({blog={}}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-gray-700">
        {blog.desc}
      </div>
      <div className="mt-10">
        <Button secondary size="small" className="rounded-none">阅读全文 &gt;</Button>
      </div>
      <div className="mt-20 h-px w-20 bg-gray-400"></div>
    </div>
  );
};

const MainContent:React.FC<{content:string}> = ({content}) => {
  return (
    <div className="w-full mt-24">
      <div dangerouslySetInnerHTML={{__html: content}} className="markdown-body text-gray-700"></div>
    </div>
  );
};

const Cpn:React.FC<{blog:IBlog, card?:boolean}> = ({card = false, blog}) => {
  const history = useHistory();
  const toBlogPage = () => {
    history.push(`/blog/${blog._id}`);
  };
  return (
    <div onClick={toBlogPage} className="py-10 flex flex-col items-center">
      <div className="text-center text-2xl text-gray-700 py-4">{blog.title}</div>
      <div className="text-center text-xs text-gray-400">
        <div>
          <span><Icon name="calendar alternate outline"/> 发表于 {moment(blog.created).format('YYYY年MM月DD日')}</span>
          <span className="mx-2">  |  </span>
          <span><Icon name="folder outline"/> 分类于 { blog?.typeInfo?.map((i)=> <a key={i.id}>{i.name}</a>)}</span>
        </div>
        <div className="mt-2">
          <Icon name="file word outline"/> 字数统计：{blog?.content?.length}字
        </div>
      </div>
      <div className="mt-10 w-full">
        {
          card ? <CardContent blog={blog}/> : <MainContent content={blog.content}></MainContent>
        }
      </div>
    </div>
  );
};

export default Cpn;
