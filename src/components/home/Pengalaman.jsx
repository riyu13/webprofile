Ki import { MdWorkHistory } from "react-icons/md";


const Pengalaman = () => {
  return (
    <div className="card shadow shadow-white py-2 px-2">
      <h2 className="flex items-center space-x-3">
        <span className="text-2xl">
          <MdWorkHistory />
        </span>
        <span className="text-xl">Pengalaman</span>
      </h2>
      <div className="card-body">
        <ul className="list-inside list-disc mt-2">
          <div>
            <strong>PT. Yamaha Electronics Manufacturing Indonesia Pasuruan, Indonesia</strong> -
            Staf Q-HSE, Standardization Department
            <br />
            <span className="date">Maret 2024 - Novemver 2024</span>
          </div>
          <div>
            <strong>PT. Yamaha Electronics Manufacturing Indonesia Pasuruan, Indonesia</strong> -
            Staf IT Programmer, Production Department
            <br />
            <span className="date">Desember 2023 - Februari 2024</span>
          </div>
           <div>
            <strong>PT. Yamaha Motor Co, LTD. cabang Fukuroi, Jepang</strong> -
            Line Worker Assembling, Production Department
            <br />
            <span className="date">November 2017 - Oktober 2020</span>
          </div>
          <div>
            <strong>
              PT. Bank Pembangunan Daerah Bali cabang Negara, Bali
            </strong>{" "}
            - Intership
            <br />
            <span className="date">Juli 2012 - Desember 2012</span>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Pengalaman
