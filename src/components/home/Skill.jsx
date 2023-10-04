import { MdOutlineHandyman } from "react-icons/md";


const Skill = () => {
  return (
    <div className="card shadow shadow-neutral-100 py-2 px-2">
      <ul>
        <div className="flex flex-row items-center justify-center">
          <MdOutlineHandyman /> Skills
        </div>
        <div className="list-inside list-disc mt-2">
          <div>
            <strong>Framework</strong>
          </div>
          <div>
            ReactJS
            <progress
              className="progress progress-info"
              value={90}
              max="100"
            ></progress>
          </div>
          <div>
            Laravel PHP
            <progress
              className="progress progress-info"
              value={60}
              max="100"
            ></progress>
          </div>
          <div>
            React Native
            <progress
              className="progress progress-info"
              value={50}
              max="100"
            ></progress>
          </div>
          <div>
            NodeJS
            <progress
              className="progress progress-info"
              value={60}
              max="100"
            ></progress>
          </div>
          <div>
            ExpressJS
            <progress
              className="progress progress-info"
              value={70}
              max="100"
            ></progress>
          </div>
          <br />
          <div>
            <strong>Office Apps</strong>
          </div>
          <div>
            Word
            <progress
              className="progress progress-info"
              value={100}
              max="100"
            ></progress>
          </div>
          <div>
            Excel
            <progress
              className="progress progress-info"
              value={90}
              max="100"
            ></progress>
          </div>
          <div>
            PowerPoint
            <progress
              className="progress progress-info"
              value={90}
              max="100"
            ></progress>
          </div>
          <div>
            Canva
            <progress
              className="progress progress-info"
              value={80}
              max="100"
            ></progress>
          </div>
        </div>
        <br />
        <div>
          <strong>Language</strong>
        </div>
        <div>
          Bahasa Indonesia
          <progress
            className="progress progress-info"
            value={90}
            max="100"
          ></progress>
          日本語 (Japan Language)
          <progress
            className="progress progress-info"
            value={60}
            max="100"
          ></progress>
        </div>
      </ul>
    </div>
  );
}

export default Skill