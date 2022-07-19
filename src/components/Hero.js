function Hero({ name }) {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-md">
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
  );
}

export default Hero;
