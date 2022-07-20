function Hero({ name }) {
  return (
    <div className="hero">
      <div className="hero-content text-center hidden">
        <div className="max-w-md">
          <div className="">
            <p className="pt-6">
              Memperingati HUT Kemerdekaan <br />
              Republik Indonesia
            </p>
            <h1 className="text-5xl font-bold mb-6">Ke 77</h1>

            <button className="btn bg-red-500 border-0 text-white">
              GKJ Eben-Haezer
            </button>
          </div>
        </div>
      </div>
      <div className="mb-8 mt-3">
        <img
          src="https://i.ibb.co/S5SCnjx/Kemerdekaan-yang-memulihkan-Bangsa-Yesaya-27-1-13-1-1.png"
          className="rounded-lg drop-shadow-lg"
        />
      </div>
    </div>
  );
}

export default Hero;
