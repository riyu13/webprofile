import { MdSchool } from "react-icons/md";


const Pendidikan = () => {
  return (
    <div className="card shadow shadow-white py-2 px-2">
      <div className="space-x-3">
        <h2 className="flex items-center space-x-3">
          <span className="text-2xl">
            <MdSchool />
          </span>
          <span className="text-xl">Pendidikan</span>
        </h2>
      </div>
      <div className="card-body">
        <ul className="list-inside list-disc mt-2">
          <div>
            <strong>Politeknik Elektronika Negeri Surabaya</strong> - Diploma
            III di Fakultas Teknik Informatika
            <br />
            <span className="date">2021 - 2023</span>
          </div>
          <div>
            <strong>Akademi Komunitas Negeri Putra Sang Fajar</strong> - Diploma
            II di Fakultas Teknologi Informasi
            <br />
            <span className="date">2014 - 2016</span>
          </div>
          <div>
            <strong>SMK N 1 Negara</strong> - Jurusan Akuntansi
            <br />
            <span className="date">2011 - 2014</span>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Pendidikan