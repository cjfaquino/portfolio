import React from 'react';

function TypingText({ children }: { children: React.ReactNode }) {
  return (
    <span className='typing-container'>
      <span className='typing-animation flex'>{children}</span>
    </span>
  );
}

export default TypingText;
