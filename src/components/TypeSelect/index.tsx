import React, {useState, useEffect} from 'react';
import {Select} from 'antd';
import {typeList} from '@/api';
import {IType} from '@/types';

interface IProps {
  value?:string[]
  onChange?:(value:string[])=>void
}

const Cpn:React.FC<IProps> = ({value, onChange}) => {
  const [data, setData] = useState<IType[]>([]);
  useEffect(() => {
    typeList().then((res)=>{
      setData(res.data.data);
    });
  }, []);
  return (
    <Select mode="multiple" value={value} onChange={onChange}>
      {
        data.map((i)=><Select.Option key={i._id} value={i._id}>{i.name}</Select.Option>)
      }
    </Select>
  );
};

export default Cpn;
