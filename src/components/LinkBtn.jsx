import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LinkBtn({ text, link, className }) {
  const navigate = useNavigate();
  const openLink = (link) => {
    navigate(link, { replace: true });
  };
  return (
    <div onClick={() => openLink(link)} className={className}>
      {text}
    </div>
  );
}
