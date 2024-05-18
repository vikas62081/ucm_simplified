const data = [
    {
      name: "Advanced Algo",
      timing: "MON, 11:00 AM",
      professor: "Mohd. Yousouf",
      expectedsubject: "Stat Found, Prog Found",
      dropShadow: true,
    },
    {
      name: "Prog Found",
      timing: "MON, 01:00 AM",
      professor: "Mohd. Yousouf",
      expectedsubject: "Stat Found, Prog Found",
      dropShadow: true,
    },
    {
      name: "Advanced Database",
      timing: "MON, 11:00 AM",
      professor: "Mohd. Sharma",
      expectedsubject: "Stat Found, Prog Found",
      dropShadow: true,
    },
    {
      name: "Advanced Algo",
      timing: "MON, 11:00 AM",
      professor: "Mohd. Yousouf",
      expectedsubject: "Stat Found, Prog Found",
      dropShadow: true,
    },
    {
      name: "Advanced Algo",
      timing: "MON, 11:00 AM",
      professor: "Mohd. Yousouf",
      expectedsubject: "Stat Found, Prog Found",
    },
  ];

// const Welcome = (props: any) => {
//   return (
//     <div className="bg-white">
//       <div className="text-xl bg-green-700 text-center p-2">UNI Simp</div>
//     </div>
//   );
// };

<div className="bg-white">
    <div className="grid grid-cols-1">
        {data.map((sub) => (
        <SubjectCard name={sub.name} timing={sub.timing} professor={sub.professor} expectedsubject={sub.expectedsubject} dropShadow={sub.dropShadow} />
        ))}
        {/* <Counter  /> */}
    </div>
</div>

interface SubjectCardProps {
name: string;
timing: string;
professor: string;
expectedsubject : string;
dropShadow?: boolean;
}

const SubjectCard = (props: SubjectCardProps) => {
const { name, timing, professor, expectedsubject, dropShadow = false } = props;
return (
  <div className={`bg-white text-gray-900 p-3 rounded-lg border border-gray-300 mt-2 mb-1 ${dropShadow ? 'shadow-custom' : ''}`}
  >
    <p className=" text-xl font-bold py-1">{name}</p>
    <div className="flex items-center text-xs text-gray-400 py-1">
    <svg
            className="h-3 w-3 text-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />{" "}
            <line x1="16" y1="2" x2="16" y2="6" />{" "}
            <line x1="8" y1="2" x2="8" y2="6" />{" "}
            <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
      <div className="pl-1">Timing: <span className="text-gray-900">{timing}</span></div>
    </div>
    <p className="text-xs text-gray-600 flex justify-between pt-2 pb-1">
      Professor <span className="text-black">{professor}</span>
    </p>
    <p className="text-xs text-gray-600 flex justify-between py-1">
      Expected Subject <span className="text-black">{expectedsubject}</span>
    </p>
  </div>
);
};
export default SubjectCard;