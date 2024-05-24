import { useLocation } from "react-router-dom";
import { CalenderIcon, WhatsAppIcon } from "../../assets/svg_icons";
import ListItem from "../../components/common/ListItem";
import SubjectCard from "../../components/subject/SubjectCard";
import { expectSubjectData } from "../../mockdata/subjectData";

const List = [
  { label: "Professor", value: "Dr. Mohammad Yousf" },
  { label: "CRN", value: "#76745" },
  { label: "Deadline", value: "14 Feb 2024" },
];

const contactList = [
  { label: "Name", value: "Jitta Aravind Reddy" },
  { label: "Created on", value: "11 Feb 2024" },
];

const SubjectDetails = () => {
  const location = useLocation();
  const { state } = location;
  console.log("state", state);

  return (
    <div className="font-inter flex  h-screen flex-col  space-y-2 bg-white ">
      {/* Main swap info */}
      <div className="heading mb-0 ">{state.name}</div>
      <div className="flex items-center ">
        <CalenderIcon />
        <div className="flex-div pl-1 text-xs text-gray-400 ">
          Timings: <span className="text-gray-800 ">{state.timing}</span>
        </div>
      </div>

      {/* SUBJECT DETAILS */}
      {List.map((item) => {
        return <ListItem label={item.label} value={item.value} />;
      })}

      {/* EXPECTED SUBJECT */}
      <div className="pt-4"></div>
      <div className="text-label">Expected Subjects</div>
      <div className="flex flex-col gap-3.5">
        {expectSubjectData.map((item) => {
          return (
            <SubjectCard
              subject={item.subject}
              timing={item.timing}
              professorName={item.professorName}
              crn={item.crn}
              type={"expectedCard"}
              dropShadow={item.dropShadow}
            />
          );
        })}
      </div>

      {/* Contact Details */}
      <div className="pt-4"></div>
      <div className="text-label">Contact Details </div>
      {contactList.map((item) => {
        return <ListItem label={item.label} value={item.value} />;
      })}
      <div className="flex-div flex justify-between pb-3 text-xs text-gray-400">
        Contact{" "}
        <div className="flex items-center">
          <WhatsAppIcon />
          <span className=" pl-1 text-teal-600 underline ">
            +1 976-475-6788{" "}
          </span>
        </div>
      </div>
    </div>
  );
};
export default SubjectDetails;
