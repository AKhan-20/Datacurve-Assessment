'use client';
import { useState } from 'react';
import CodeEditor from './CodeEditor';

const CodeEditorContainer: React.FC = () => {
  const [output, setOutput] = useState('');
  const [error, setError] = useState('test');

  const handleExecute = async (userCode: string) => {
    const response = await fetch('http://127.0.0.1:8000/execute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code: userCode }),
    });

    const resJson = await response.json();
    setOutput(resJson.output);
    setError(resJson.error);
  };

  const handleSubmit = (userCode: string) => {
    console.log('submit');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Code Execution Website</h1>
      <div className="w-full h-full">
        <h2>Code Editor</h2>
        <CodeEditor onExecute={handleExecute} onSubmit={handleSubmit} />

        <h2>Output</h2>
        <p>{output}</p>

        {error && (
          <>
            <h2>Error</h2>
            <p>{error}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default CodeEditorContainer;
