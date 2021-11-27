import React from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import highlight from 'highlight.js';
import upload from '@/cos';
import 'react-markdown-editor-lite/lib/index.css';

const MdParser = new MarkdownIt({breaks: true, highlight: function(str, lang) {
  if (lang && highlight.getLanguage(lang)) {
    try {
      return '<pre class="hljs"><code>' +
      highlight.highlight(lang, str, true).value +
             '</code></pre>';
    } catch (__) {}
  }
  return '<pre class="hljs"><code>' + MdParser.utils.escapeHtml(str) + '</code></pre>';
}});

interface MdEditorProps {
  value?:string
  onChange?:(value:string)=>void
}


const Cpn:React.FC<MdEditorProps> = (props) => {
  const {value, onChange} = props;
  const handleEditorChange = ({text}:{text:string}) => {
    onChange && onChange(text);
  };

  const onImageUpload = (file:File) => {
    return new Promise((resolve) => {
      upload(file).then((res)=>{
        resolve(res.path);
      });
    });
  };
  return (
    <MdEditor style={{height: '500px'}} onImageUpload={onImageUpload} value={value} renderHTML={(text) => MdParser.render(text)} onChange={handleEditorChange} />
  );
};

export default Cpn;
