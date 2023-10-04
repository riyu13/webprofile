import { useState, useEffect} from 'react'
import me from "../../assets/images/me.jpg";
const Head = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString("default", { month: "long" }); // Menggunakan nama bulan
    const year = currentDate.getFullYear();

    
     const [currentTime, setCurrentTime] = useState(new Date());

     useEffect(() => {
       // Fungsi untuk memperbarui waktu setiap detik
       const interval = setInterval(() => {
         setCurrentTime(new Date());
       }, 1000);

       // Membersihkan interval setelah komponen di-unmount
       return () => clearInterval(interval);
     }, []);

  return (
    <div className="flex flex-col items-center justify-center object-center">
      <div className="text-center">
        <img
          className="mx-auto w-32 h-32 rounded-full"
          src={me}
          alt="Profile"
        />
        <h4 className="flex flex-row mt-2 text-xl">Fullstack Developer</h4>
        <p>{currentTime.toLocaleTimeString()}</p>
        <p>
          {day} {month} {year}
        </p>
      </div>
    </div>
  );
};

export default Head;
