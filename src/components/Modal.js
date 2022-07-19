import formatDate from '../helpers/date.js';
import colorLabel from '../helpers/color.js';
import RegisterForm from './RegisterForm.js';

function Modal({ idModal, data }) {
  return (
    <div>
      <input type="checkbox" id={idModal} className="modal-toggle" />
      <label htmlFor={idModal} className="modal cursor-pointer">
        <label
          htmlFor={idModal}
          className="btn btn-sm btn-circle absolute right-2 top-2 bg-transparent text-gray-700 border-0 hover:text-white"
        >
          ✕
        </label>
        {data && (
          <div className="modal-box" style={{ padding: 0 }}>
            {data?.posterAcara && <img src={data?.posterAcara} />}
            <div className="p-8">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg mb-3">{data?.nama}</h3>
                <div
                  className={
                    'badge border-0 text-gray-50 justify-end bg-' +
                    `${colorLabel(data.kategori)}`
                  }
                >
                  {data.kategori}
                </div>
              </div>
              <div className="flex items-center">
                <button className="py-2 px-3 bg-gray-300 border-0 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div className="divider divider-horizontal mx-2"></div>
                <div className="text-gray-500">
                  <span className="font-bold text-sm">Lokasi</span>
                  <br />
                  <span className="text-gray-400">{data.lokasi}</span>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <button className="py-2 px-3 bg-gray-300 border-0 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div className="divider divider-horizontal mx-2"></div>
                <div className="text-gray-500">
                  <span className="font-bold text-sm">Waktu & Tanggal</span>
                  <br />
                  <span className="text-gray-400">
                    {formatDate(data.tanggalMulai)}
                  </span>
                </div>
              </div>
              <p
                className="py-4 text-gray-400"
                style={{ 'white-space': 'pre-line' }}
              >
                {data?.deskripsi}
              </p>
              <div className="modal-action hidden">
                <button className="btn btn-block bg-red-500 text-white border-0">
                  Daftar
                </button>
              </div>
            </div>
            <div className="p-8">
              <RegisterForm data={data} />
            </div>
          </div>
        )}
      </label>
    </div>
  );
}

export default Modal;
