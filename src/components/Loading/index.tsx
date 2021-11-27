import React from 'react';
import './index.less';

const Cpn = () => {
  return (
    <div>
      <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
      <div className="text-center text-xs text-gray-900">资源载入中...</div>
    </div>
  );
};

export default Cpn;
