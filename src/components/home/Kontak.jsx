import { MdOutlinePermContactCalendar } from "react-icons/md";


const Kontak = () => {
  return (
    <div className="card shadow shadow-neutral-100">
      <div className="contact-list">
        <div className="flex flex-row items-center justify-center">
          <MdOutlinePermContactCalendar /> Kontak
        </div>
        <ul className="text-center">
          <div>
            <strong>Email:</strong> gifiri14@gmail.com
          </div>
          <div>
            <strong>Phone:</strong> (+62) 851-5669-8423
          </div>
          <div>
            <strong>Location:</strong> Blitar, Jawa Timur
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Kontak