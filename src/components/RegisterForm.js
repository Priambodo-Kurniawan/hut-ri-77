function RegisterForm({ data }) {
  return (
    <form id="upload-form">
      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider">Data Diri</div>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Nama</span>
        </label>
        <input
          id="nama"
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Nomer Telepon</span>
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="Nomer telepon"
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Wilayah</span>
        </label>
        <select id="wilayah" required className="select select-bordered w-full">
          <option disabled selected>
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
          readonly
        />
      </div>
      {data.subKategori && (
        <div className="form-control">
          <label className="label">
            <span className="label-text">Kategori</span>
          </label>
          <select
            id="sub-kategori"
            required
            className="select select-bordered w-full"
          >
            <option disabled selected>
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
          className="btn btn-primary"
          id="uploadBtn"
          name="uploadbtn"
          disabled
        >
          Daftar
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
