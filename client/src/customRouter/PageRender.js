import React from 'react';
import { useParams } from 'react-router-dom';
import Notfound from '../components/Notfound';
import { useSelector } from 'react-redux';

const generatePage = (pageName) => {
  const component = () => require(`../pages/${pageName}`).default;

  try {
    return React.createElement(component());
  } catch (err) {
    return <Notfound />;
  }
};

const PageRender = () => {
  const { page, id } = useParams();
  const { auth } = useSelector((state) => state);

  let pageName = '';

  if (auth.token) {
    if (id) {
      pageName = `${page}/[id]`;
    } else {
      pageName = `${page}`;
    }
  }

  // console.log(pageName);
  return generatePage(pageName);
};

export default PageRender;
