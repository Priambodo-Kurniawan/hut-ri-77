import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Card from './Card.js';
import Modal from './Modal.js';

function List({ title }) {
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();
  const [selectedData, setSelectedData] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetch('https://hut-ri2.glitch.me/events')
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      })
      .finally((_) => {
        setIsloading(false);
      });
  }, []);

  useEffect(() => {
    let detailParam = searchParams.get('detail');
    if (detailParam) {
      let detailData = data.filter((el) => el.slug == detailParam);
      setSelectedData(detailData[0]);
    }
  }, [searchParams, data]);

  useEffect(() => {
    if (!isLoading) {
      let detailParam = searchParams.get('detail');
      if (detailParam) {
        document.getElementById('detail').checked = true;
      }
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <button className="btn loading text-slate-400 bg-transparent border-0">
          loading
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 mb-4">
        <div className="flex items-center space-x-2 text-base">
          <h4 className="font-semibold ml-3">Daftar Perlombaan</h4>
          <span className="rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-slate-50">
            {data.length}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-x-8 gap-y-5 p-2">
        {data.map((el, idx) => (
          <Card data={el} key={idx} />
        ))}
      </div>
      <Modal idModal="detail" data={selectedData} />
    </div>
  );
}

export default List;
