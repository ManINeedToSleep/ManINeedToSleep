import React from 'react';

// This component renders decorative elements that float in the background
const FloatingElements = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Colorful shapes */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-fubuki-light-blue/30 animate-float-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-12 h-12 rounded-full bg-blue-200/40 animate-float"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 rounded-full bg-blue-100/20 animate-float-slow"></div>
      
      {/* Fox-themed elements (placeholders for now) */}
      <div className="absolute top-1/3 right-1/3 w-24 h-8 bg-fubuki-primary-blue/10 rounded-full rotate-45 animate-float"></div>
      <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-yellow-200/30 rounded-full animate-float-slow"></div>
      
      {/* "Code" elements */}
      <div className="absolute top-1/5 right-1/5 text-4xl text-fubuki-primary-blue/10 font-mono animate-float-slow">&lt;/&gt;</div>
      <div className="absolute bottom-1/3 right-1/5 text-3xl text-fubuki-primary-blue/10 font-mono animate-float">{ }</div>
      
      {/* More subtle elements */}
      <div className="absolute top-3/5 left-1/5 w-16 h-2 bg-fubuki-primary-blue/10 rounded-full rotate-12 animate-float"></div>
      <div className="absolute top-1/6 right-1/4 w-2 h-16 bg-fubuki-primary-blue/10 rounded-full animate-float-slow"></div>
    </div>
  );
};

export default FloatingElements; 