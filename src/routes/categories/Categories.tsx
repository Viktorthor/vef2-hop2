import React, { Fragment } from 'react';
import './Categories.scss';

export default function CategoriesRoute(props: any) {
  const { category } = props;

  return (
    <div className="categories">
      <div className="categories__box">
        <p className="category__title">{category.title}</p>
    </div>
  </div>
  );
}
