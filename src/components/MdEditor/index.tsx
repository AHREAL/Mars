import React, {FunctionComponent} from 'react';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

interface MdEditorProps {
  value?:string
  onChange?:(value:string)=>void
}

const Cpn:FunctionComponent<MdEditorProps> = (props) => {
  const {value, onChange} = props;

  const MDEOptions = {
    sideBySideFullscreen: false,
  };
  return (
    <SimpleMDE options={MDEOptions} value={value} onChange={onChange}/>
  );
};

export default Cpn;
