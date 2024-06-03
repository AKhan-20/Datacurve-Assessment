import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import Button from './Button';

type CodeEditorProps = {
  onExecute: (userCode: string) => void;
  onSubmit: (userCode: string) => void;
};

const CodeEditor: React.FC<CodeEditorProps> = ({ onExecute, onSubmit }) => {
  const [userCode, setUserCode] = useState('');

  const handleEditorChange = (e: string) => {
    setUserCode(e);
  };

  return (
    <div>
      <CodeMirror
        value={userCode}
        height="50vh"
        extensions={[python()]}
        theme="dark"
        onChange={handleEditorChange}
      />

      <div className="mt-2">
        <Button label="Execute Code" onClick={() => onExecute(userCode)} />
        <Button
          className="ml-2"
          label="Submit Code"
          onClick={() => onSubmit(userCode)}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
