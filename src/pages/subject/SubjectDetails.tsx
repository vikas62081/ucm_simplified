import { useLocation } from "react-router-dom";
import ListItem from "../../components/common/ListItem";
import SubjectCard from "../../components/subject/SubjectCard";
import { expectSubjectData } from "../../mockdata/subjectData";
import Gap from "../../components/common/Gap";
import TimingInfo from "../../components/common/TimingInfo";
import Divider from "../../components/common/Divider";

const List = [
  { label: "Professor", value: "Dr. Mohammad Yousf" },
  { label: "CRN", value: "#76745" },
  { label: "Deadline", value: "14 Feb 2024" },
];

const contactList = [
  { label: "Name", value: "Jitta Aravind Reddy" },
  { label: "Created on", value: "11 Feb 2024" },
  { label: "Contact", value: "+91", type: "contact" },
];

const SubjectDetails = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div className="font-inter flex  flex-col   bg-white ">
      {/* Main swap info */}
      <div className="heading mb-0 ">{state.subject}</div>
      <TimingInfo title="Timing" timing={state.timing} />
      <Gap gap={2} />
      {/* SUBJECT DETAILS */}
      <div className="flex flex-col gap-1.5">
        {List.map((item) => {
          return <ListItem label={item.label} value={item.value} />;
        })}
      </div>

      <Gap gap={4} />

      {/* EXPECTED SUBJECT */}
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

      <Divider />

      {/* Contact Details */}

      <div className="text-label">Contact Details </div>
      <div className="flex flex-col gap-1.5">
        {contactList.map((item) => {
          return (
            <ListItem label={item.label} value={item.value} type={item.type} />
          );
        })}
      </div>
      <Gap gap={4} />
    </div>
  );
};
export default SubjectDetails;
