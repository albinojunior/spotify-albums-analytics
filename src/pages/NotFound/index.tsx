import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const title = '404 - Página não encontrada :(';
const NotFound: React.FC = () => (
  <div className="not-found">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <h1>{title}</h1>
    <Link to="/">Voltar para home</Link>
  </div>
);

export default NotFound;
