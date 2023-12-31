import { FunctionComponent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const AddBook: FunctionComponent = () => {
  const navigate = useNavigate();
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    description: '',
    published: '',
    publisher: '',
    pages: '',
    website: ''
  });

  const onRectangleClick = useCallback(() => {
    navigate("/login");
   }, [navigate]);

  const onFrameButtonClick = useCallback(async () => {
    try {
      // Lakukan permintaan POST ke endpoint API
      const response = await axios.post(
        'https://example.com/api/books', // Ganti URL API
        bookData
      );

      console.log('Book added successfully:', response.data);

      // Redirect atau lakukan tindakan lain setelah buku ditambahkan
      navigate("/index");
    } catch (error) {
      console.error('Failed to add book:', error);
      // Handle error, show error message, etc.
    }
  }, [bookData, navigate]);

  const onBackIconClick = useCallback(() => {
    navigate("/home");
  }, [navigate])

  const onInstagram1IconClick = useCallback(() => {
    window.location.href = "https://www.instagram.com/indah_kharomi/";
  }, []);

  const onWhatsapp1IconClick = useCallback(() => {
    window.location.href = "https://wa.me/6281913206707";
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setBookData((prevData) => ({
      ...prevData,
      [field]: value,
    }));

  };

  return (
    <div className="relative bg-gray-200 w-full h-[840px] overflow-hidden flex flex-col items-center justify-start gap-[30px]">
      <header className="self-stretch overflow-hidden flex flex-row items-center justify-center py-[29px] px-[30px] text-left text-31xl text-white font-limelight">
        <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-center gap-[850px]">
          <h1 className="m-0 relative text-inherit font-normal font-inherit">
            Books
          </h1>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[158px] h-[69px] overflow-hidden shrink-0"
            onClick={onRectangleClick}
          >
            <div
              className="absolute top-[6px] left-[6px] rounded-2xl bg-crimson w-[146px] h-[45px] cursor-pointer"/>
            <div className="absolute top-[17px] left-[43px] text-xl font-extrabold font-roboto text-white text-left">
              Log Out
            </div>
          </button>
        </div>
      </header>
      <main className="self-stretch flex-1 overflow-hidden flex flex-col items-center justify-start py-0 px-[50px]">
        <section className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-center">
          <main className="self-stretch flex-1 rounded-mini bg-whitesmoke overflow-hidden flex flex-col items-end justify-end pt-[15px] pb-3.5 pr-7 pl-[37px] gap-[14px] text-left text-11xl text-black font-roboto">
          <div className="self-stretch h-[63px] overflow-hidden shrink-0 flex flex-row items-start justify-start p-2.5 box-border">
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-start gap-[750px]">
                <div className="overflow-hidden flex flex-row items-center justify-center gap-[10px]">
                  <button
                    className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[29px] h-[29px] bg-cover bg-no-repeat bg-[top]"
                    onClick={onBackIconClick} 
                    >
                    <img
                      className="relative w-[29px] h-[29px] object-cover"
                      alt=""
                      src="/backicon@3x.png">
                    </img>
                  </button>
                  <h2 className="m-0 relative text-inherit font-semibold font-inherit inline-block w-[185px] shrink-0">
                    Tambah Buku
                  </h2>
                </div>
                <button
                  className="cursor-pointer [border:none] py-0 px-9 bg-deepskyblue rounded-2xl w-[108px] h-[34px] flex flex-col items-start justify-center box-border"
                  onClick={onFrameButtonClick}
                >
                  <div className="relative text-xl font-semibold font-roboto text-white text-left">
                    Save
                  </div>
                </button>
              </div>
            </div>
            <section className="self-stretch flex-1 relative overflow-hidden text-left text-xl text-black font-roboto">
              {/* Judul */}
              <div className="absolute top-[0px] left-[5px] font-semibold">
                Judul
              </div>
              <input
                className="[border:none] [outline:none] font-semibold font-roboto text-xl bg-white absolute top-[28px] left-[5px] w-[1326px] h-[27px] overflow-hidden flex flex-col items-start justify-center py-0.5 px-2.5 box-border text-dimgray-100"
                placeholder="Judul"
                type="text"
                value={bookData.title}
                onChange={(event) => handleInputChange('title', event.target.value)}
              />
              {/* Penulis */}
              <div className="absolute top-[67px] left-[5px] font-semibold">
                Penulis
              </div>
              <input
                className="[border:none] [outline:none] font-semibold font-roboto text-xl bg-white absolute top-[95px] left-[5px] w-[1326px] h-[27px] overflow-hidden flex flex-col items-start justify-center py-0.5 px-2.5 box-border text-dimgray-100"
                placeholder="Penulis"
                type="text"
                value={bookData.author}
                onChange={(event) => handleInputChange('author', event.target.value)}
              />
              {/* Deskripsi */}
              <div className="absolute top-[134px] left-[5px] font-semibold">
                Deskripsi
              </div>
              <input
                className="[border:none] [outline:none] font-semibold font-roboto text-xl bg-white absolute top-[162px] left-[5px] w-[1326px] h-[27px] overflow-hidden flex flex-col items-start justify-center py-0.5 px-2.5 box-border text-dimgray-100"
                placeholder="Deskripsi"
                type="text"
                value={bookData.description}
                onChange={(event) => handleInputChange('description', event.target.value)}
              />
              {/* Diterbitkan */}
              <div className="absolute top-[201px] left-[5px] font-semibold">
                Diterbitkan
              </div>
              <input
                className="[border:none] [outline:none] font-semibold font-roboto text-xl bg-white absolute top-[229px] left-[5px] w-[1326px] h-[27px] overflow-hidden flex flex-col items-start justify-center py-0.5 px-2.5 box-border text-dimgray-100"
                placeholder="Diterbitkan"
                type="text"
                value={bookData.published}
                onChange={(event) => handleInputChange('published', event.target.value)}
              />
              {/* Penerbit */}
              <div className="absolute top-[268px] left-[5px] font-semibold">
                Penerbit
              </div>
              <input
                className="[border:none] [outline:none] font-semibold font-roboto text-xl bg-white absolute top-[296px] left-[5px] w-[1326px] h-[27px] overflow-hidden flex flex-col items-start justify-center py-0.5 px-2.5 box-border text-dimgray-100"
                placeholder="Penerbit"
                type="text"
                value={bookData.publisher}
                onChange={(event) => handleInputChange('publisher', event.target.value)}
              />
              {/* Halaman */}
              <div className="absolute top-[335px] left-[5px] font-semibold">
                Halaman
              </div>
              <input
                className="[border:none] [outline:none] font-semibold font-roboto text-xl bg-white absolute top-[363px] left-[5px] w-[1326px] h-[27px] overflow-hidden flex flex-col items-start justify-center py-0.5 px-2.5 box-border text-dimgray-100"
                placeholder="Jumlah Halaman"
                type="text"
                value={bookData.pages}
                onChange={(event) => handleInputChange('pages', event.target.value)}
              />
              {/* Website */}
              <div className="absolute top-[402px] left-[5px] font-semibold">
                Website
              </div>
              <input
                className="[border:none] [outline:none] font-semibold font-roboto text-xl bg-white absolute top-[430px] left-[5px] w-[1326px] h-[27px] overflow-hidden flex flex-col items-start justify-center py-0.5 px-2.5 box-border text-dimgray-100"
                placeholder="Website"
                type="text"
                value={bookData.website}
                onChange={(event) => handleInputChange('website', event.target.value)}
              />
            </section>
          </main>
        </section>
      </main>
      <footer className="self-stretch bg-gainsboro h-[86px] overflow-hidden shrink-0 flex flex-row items-center justify-start pt-px px-[15px] pb-0 box-border gap-[777px] text-left text-6xl text-gray-200 font-roboto">
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-start py-0 px-2.5">
          <div className="flex-1 w-[210px] overflow-hidden flex flex-col items-start justify-center">
            <h1 className="m-0 relative text-inherit font-extrabold font-inherit">
              Get In Touch
            </h1>
            <div className="w-[85px] h-7 overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 pr-[9px] pl-0 box-border gap-[15px]">
              <img
                className="relative w-[29px] h-[27px] object-cover cursor-pointer"
                alt=""
                src="/instagram-1@2x.png"
                onClick={onInstagram1IconClick}
              />
              <img
                className="relative w-[29px] h-7 object-cover cursor-pointer"
                alt=""
                src="/whatsapp-1@2x.png"
                onClick={onWhatsapp1IconClick}
              />
            </div>
          </div>
        </div>
        <div className="w-[199px] overflow-hidden shrink-0 flex flex-col items-end justify-start text-mini text-black">
          <div className="relative">December 2023</div>
          <h2 className="m-0 relative text-xl font-normal font-inherit whitespace-pre-wrap">{`Powered by © Next JS  `}</h2>
        </div>
      </footer>
    </div>
  );
};

export default AddBook;
