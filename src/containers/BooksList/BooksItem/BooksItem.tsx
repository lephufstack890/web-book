/* eslint-disable no-underscore-dangle */
import React from 'react';

import { TBooksItemProps } from './BooksItem.types';
import booksItem from '@/assets/images/booksItem.png';
import './BooksItem.scss';

const BooksItem: React.FC<TBooksItemProps> = ({ data = [] }) => {
  return (
    <>
      {data?.map((item) => (
        <div className="BooksItem">
          <div className="BooksItem-image">
            <img src={booksItem} alt="" />
          </div>
          <div className="BooksItem-title">Lợi thế của hạnh phúc</div>
        </div>
      ))}
    </>
  );
};

export default BooksItem;
