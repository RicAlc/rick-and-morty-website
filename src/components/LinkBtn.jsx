import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LinkBtn({ text, link, newTab, className }) {
  const navigate = useNavigate();
  const openLink = (link) => {
    newTab ? window.open(link, '_blank') : navigate(link);
  };
  return (
    <div onClick={() => openLink(link)} className={className}>
      {text}
    </div>
  );
}
