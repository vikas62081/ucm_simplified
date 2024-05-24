import { useNavigate } from "react-router-dom";
import { CalenderIcon } from "../../assets/svg_icons";
import ListItem from "../common/ListItem";

export interface SubjectCardTypes {
  subject: string;
  timing: string;
  professorName: string;
  expectedsubject?: string;
  dropShadow?: boolean;
  crn?: string;
  type?: "normalCard" | "expectedCard"; //1.default is default card 2. expected shows design of expected card
  extraInfo?: object;
}

const SubjectCard = (props: SubjectCardTypes) => {
  const navigate = useNavigate();
  const {
    subject,
    timing,
    professorName,
    expectedsubject,
    dropShadow = false,
    crn,
    type = "normalCard",
    extraInfo,
  } = props;

  const goToSubjectDetail = () => {
    if (type === "normalCard") {
      navigate("/subjects/detail", { state: extraInfo });
    }
  };

  return (
    <div>
      <div
        className={`rounded-lg border border-gray-300 bg-white p-3 text-gray-900 ${dropShadow ? "shadow-custom" : ""}`}
        onClick={() => {
          goToSubjectDetail();
        }}
      >
        {/* TITLE */}
        {type === "normalCard" ? (
          <p className=" py-1 pb-2 text-xl font-bold">{subject}</p>
        ) : (
          <p className="text-label mb-1">{subject?.toUpperCase()}</p>
        )}
        {/* SUB TITLE */}
        <div className="flex items-center pb-2 text-xs text-gray-400">
          <CalenderIcon />
          <div className="pl-1">
            Timing: <span className="text-gray-900">{timing}</span>
          </div>
        </div>

        {/* DETAILS */}
        <ListItem label="Professor" value={professorName} />
        {/* conditionally rendering crn and expected subject based on type */}
        {type === "normalCard" ? (
          <ListItem label="Expected Subject" value={expectedsubject} />
        ) : (
          <ListItem label="CRN" value={`#${crn}`} />
        )}
      </div>
    </div>
  );
};
export default SubjectCard;
