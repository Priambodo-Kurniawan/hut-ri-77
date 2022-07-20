import { useState, useEffect } from 'react';

function RegisterForm({ data }) {
  const [dataParticipant, setDataParticipant] = useState({
    nama: '',
    hp: '',
    wilayah: '',
    lomba: data.nama,
    idLomba: data._id,
    subKategori: data.subKategori || '',
  });
  const [isLoading, setIsloading] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [registered, setRegistered] = useState([]);

  useEffect(() => {
    setDataParticipant({
      nama: '',
      hp: '',
      wilayah: '',
      lomba: data.nama,
      idLomba: data._id,
      subKategori: data.subKategori || '',
    });
    setRegistered([]);
    setSubmited(false);

    let dataRegistered = localStorage.getItem('registered');
    console.log(dataRegistered);
    if (dataRegistered) {
      dataRegistered = JSON.parse(dataRegistered);
      if (dataRegistered[data._id]) {
        setRegistered(dataRegistered[data._id]);
      }
    }
  }, [data]);

  const handleOnChange = function (e) {
    setDataParticipant({
      ...dataParticipant,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    setIsloading(true);
    fetch('https://hut-ri.glitch.me/participants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataParticipant),
    })
      .then((res) => res.json())
      .then((data) => {
        setSubmited(true);
        let dataRegistered = localStorage.getItem('registered') || '{}';
        dataRegistered = JSON.parse(dataRegistered);
        if (!dataRegistered[dataParticipant.idLomba]) {
          dataRegistered[dataParticipant.idLomba] = [];
        }
        dataRegistered[dataParticipant.idLomba].push(dataParticipant.nama);
        localStorage.setItem('registered', JSON.stringify(dataRegistered));
      })
      .finally((_) => {
        setIsloading(false);
      });
  };

  return (
    <div>
      {registered.length !== 0 && (
        <div className="alert shadow-lg mb-3">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-info flex-shrink-0 w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <div>
              <h5 className="font-bold">Kamu sudah mendaftar, sebagai:</h5>
              <div className="text-xs">{registered.join(', ')}</div>
            </div>
          </div>
        </div>
      )}

      <form id="upload-form" onSubmit={handleSubmit}>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">Data Diri</div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Nama</span>
          </label>
          <input
            id="nama"
            name="nama"
            value={dataParticipant.nama}
            onChange={handleOnChange}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Nomer Telepon</span>
          </label>
          <input
            id="hp"
            name="hp"
            value={dataParticipant.hp}
            onChange={handleOnChange}
            type="tel"
            placeholder="Nomer telepon"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Wilayah</span>
          </label>
          <select
            id="wilayah"
            name="wilayah"
            value={dataParticipant.wilayah}
            onChange={handleOnChange}
            required
            className="select select-bordered w-full"
          >
            <option value="" disabled defaultValue>
              Pilih Wilayah
            </option>
            <option value="paseltan">Paseltan</option>
            <option value="pandur">Pandur</option>
            <option value="paragulan">Paragulan</option>
            <option value="destara">Destara</option>
            <option value="teruri">Teruri</option>
            <option value="pasutra">Pasutra</option>
            <option value="lolitas">Lolitas</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex flex-col w-full border-opacity-50 mt-6">
          <div className="divider">Lomba</div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Nama Lomba</span>
          </label>
          <input
            id="lomba"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            value={data.nama}
            disabled
          />
        </div>
        {data.subKategori && (
          <div className="form-control">
            <label className="label">
              <span className="label-text">Kategori</span>
            </label>
            <select
              id="sub-kategori"
              name="subKategori"
              value={dataParticipant.subKategori}
              onChange={handleOnChange}
              required
              className="select select-bordered w-full"
            >
              <option disabled defaultValue>
                Pilih Kategori
              </option>
              {data.subKategori &&
                data.subKategori.split(', ').map((el) => {
                  return <option value={el}>{el}</option>;
                })}
            </select>
          </div>
        )}

        <div className="form-control mt-6">
          <button
            className={
              'btn border-0 bg-red-500 text-white' +
              `${isLoading ? ' loading' : ''}`
            }
            disabled={isLoading ? true : false}
            id="uploadBtn"
            name="uploadbtn"
          >
            Daftar
          </button>
        </div>
        {submited && (
          <div className="alert alert-success shadow-md mt-3 text-white">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Terima kasih sudah mendaftar!</span>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default RegisterForm;
