function Action({ data }) {
  const location = window.location.href;

  const closeModal = function () {
    document.getElementById('detail').checked = false;
  };

  const linkWa = function () {
    let message =
      `https://wa.me/?text=` +
      data.deskripsi +
      `\n\n ${data.shortLink || location}`;

    message = message.replace(/\n/g, '%0a');
    console.log(message);
    return message;
  };
  return (
    <div>
      <a
        target="_blank"
        href={linkWa()}
        class="btn gap-2 bg-green-600 border-0 mr-3 mb-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
        Bagikan ke Whatsapp
      </a>
      <button
        onClick={closeModal}
        htmlFor="detail"
        class="btn gap-2 bg-red-600 border-0 mr-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        Lomba lainnya
      </button>
    </div>
  );
}

export default Action;
