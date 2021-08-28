import React from 'react';

type Card = {
  title: string;
  imgUrl: string;
  onFavoriteClick: Function;
  onDetailsClick: Function;
};

export const Card: React.FC<Card> = ({ title, imgUrl, onFavoriteClick, onDetailsClick }) => {
  return (
    <>
      <div className='w-1/4 rounded overflow-hidden mr-10 mt-5 relative'>
        <footer
          className='bg-black w-full p-5 absolute z-50 bottom-0 text-white text-center'
          style={{ minHeight: 100 }}>
          <h3 className='capitalize mb-2 font-normal'>{title}</h3>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8 mr-5 inline-block cursor-pointer hover:text-pink-600'
            viewBox='0 0 20 20'
            onClick={(e: React.MouseEvent) => onFavoriteClick()}
            fill='currentColor'>
            <path
              fillRule='evenodd'
              d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
              clipRule='evenodd'
            />
          </svg>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8 inline-block cursor-pointer hover:text-indigo-700'
            fill='none'
            viewBox='0 0 24 24'
            onClick={(e: React.MouseEvent) => onDetailsClick()}
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
            />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
            />
          </svg>
        </footer>
        <img className='bg-cover z-10' src={imgUrl} alt='pic' />
      </div>
    </>
  );
};
