import React from "react";
import { subjectData } from "../../mockdata/subjectData";
import SubjectCard from "../../components/subject/SubjectCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const SubjectList: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-3 ">
      {subjectData.map((item, index) => (
        <SubjectCard
          key={index} // Assuming each item has a unique 'id'
          name={item.name}
          timing={item.timing}
          professor={item.professor}
          expectedsubject={item.expectedsubject}
          dropShadow={item.dropShadow}
          extraInfo={item}
        />
      ))}
      <div className="fixed bottom-16 my-4 flex self-end ">
        <div
          //   style={{ backgroundColor: "#ffc400" }}
          className="flex cursor-pointer items-center justify-center rounded-full border  bg-primary px-4 py-4 text-white drop-shadow-lg"
          onClick={() => navigate("/subjects/request")}
        >
          <FontAwesomeIcon icon={faPlus} />
          <span className="pl-2">New Request</span>
        </div>
      </div>
    </div>
  );
};

export default SubjectList;