import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import formatDate from '../helpers/date.js';
import colorLabel from '../helpers/color.js';

function Card({ data }) {
  const navigate = useNavigate();

  const showModal = (e, dt) => {
    // e.preventDefault();
    navigate('/?detail=' + dt.slug, { replace: true });
  };

  return (
    <div>
      <label
        className="cursor-pointer"
        htmlFor="detail"
        onClick={(e) => showModal(e, data)}
      >
        <div
          className="card flex card-side card-compact shadow-xl mb-5 text-primary-content"
          style={{ backgroundColor: 'white' }}
        >
          <figure className="w-1/3 px-2 py-2">
            {data.posterAcara && (
              <img
                src={data.thumbnail || data.posterAcara}
                alt="Movie"
                className="rounded-xl"
              />
            )}
          </figure>
          <div className="w-2/3 card-body">
            <span className="text-red-400">
              {formatDate(data.tanggalMulai)}
            </span>
            <h2 className="text-base font-bold leading-5 text-stone-700">
              {data.nama}
            </h2>
            <p className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>{' '}
              <span className="text-xs">{data.lokasi}</span>
            </p>
            <div
              className={
                'badge border-0 text-gray-50 bg-' +
                `${colorLabel(data.kategori)}`
              }
            >
              {data.kategori}
            </div>
            <div className="card-actions justify-end"></div>
            <div className="bg-yellow-500 bg-blue-500 bg-teal-600 bg-violet-500"></div>
          </div>
        </div>
      </label>
    </div>
  );
}

export default Card;
