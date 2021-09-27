import {useEffect, useState} from 'react';
import markDownIt from 'markdown-it';
import highlight from 'highlight.js';
import markDownItAnchor from 'markdown-it-anchor';
import uslug from 'uslug';
import {IBlogHeader} from '@/types';
import Token from 'markdown-it/lib/token';

interface IOpt {
  content:string
}

const hook = ({content}:IOpt) => {
  const [headers, setHeaders] = useState<IBlogHeader[]>([]);
  const [html, setHtml] = useState('');
  useEffect(()=>{
    const md = markDownIt({
      highlight: function(str, lang) {
        if (lang && highlight.getLanguage(lang)) {
          try {
            return '<pre class="hljs"><code>' +
            highlight.highlight(lang, str, true).value +
                   '</code></pre>';
          } catch (__) {}
        }
        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
      },
    });

    md.use(markDownItAnchor, {
      slugify: (id:string) => {
        return uslug(id);
      },
      callback: (token:Token)=>{
        setHeaders((state)=>[
          ...state,
          {
            id: token.attrs?.[0]?.[1] || '',
            level: Number(token.tag[1]),
          },
        ]);
      },
    });
    setHtml(md.render(content));
  }, []);
  return {
    html,
    headers,
  };
};

export default hook;
