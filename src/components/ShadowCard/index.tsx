import React from 'react';

interface Props {
  title?: string;
  content: Function;
}

const ShadowCard = ({ title, content }: Props) => (
  <div className="shadow-card">
    {title && <div className="title">{title}</div>}
    <div className="content">{content()}</div>
  </div>
);

export default ShadowCard;
