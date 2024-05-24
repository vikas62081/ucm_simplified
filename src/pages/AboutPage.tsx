// const subjectDetails = [
//   {
//     current_subject: "string",
//     timing: [
//       {
//         day: "string",
//         time: "string",
//       },
//     ],
//     crn: 0,
//     professor: "Yousof",
//     deadline: "2024-05-07T01:25:00.051Z",
//     desired_subject: "string",
//   },
// ];

// interface labels {
//   label: string;
//   value: string;
// }

// const labels_list = [
//   { label: "Professor", value: "Mohammad Yousuf" },
//   { label: "Expected Subject", value: "Stat Found, Algo" },
//   { label: "CRN", value: "123" },
// ];

// const InformationItem = ({ item }: { item: labels }) => {
//   return (
//     <div className="mt-1 flex justify-between">
//       <div className="text-xs text-gray-400 sm:text-xs md:text-sm lg:text-sm">
//         {item.label}
//       </div>
//       <div className="text-custom-black text-xs sm:text-xs md:text-sm lg:text-sm">
//         {item.value}
//       </div>
//     </div>
//   );
// };

// const AboutPage = () => {
//   return (
//     <div>
//       <section className="h-screen items-center justify-center bg-white p-5 text-justify">
//         <p className="rounded-md bg-green-100 p-5 text-black ">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ducimus
//           dolorum quod laborum iure doloribus repellat sint assumenda neque
//           beatae dolor magni molestias quasi quas, porro aut provident sapiente
//           commodi.
//         </p>
//         <div className="card">
//           <div className="heading">Advance Algorithms</div>
//           <div className="flex items-center pt-0">
//             <svg
//               className="h-3 w-3 text-primary"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               stroke-width="2"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             >
//               {" "}
//               <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />{" "}
//               <line x1="16" y1="2" x2="16" y2="6" />{" "}
//               <line x1="8" y1="2" x2="8" y2="6" />{" "}
//               <line x1="3" y1="10" x2="21" y2="10" />
//             </svg>
//             <div className="ml-1 text-gray-400 sm:text-xs md:text-sm lg:text-sm ">
//               Timings:
//             </div>
//             <div className=" text-custom-black ml-1 sm:text-xs md:text-sm lg:text-sm ">
//               Monday
//             </div>
//           </div>
//           <div className="h-2"></div>

//           {labels_list.map((label: labels) => (
//             <InformationItem item={label} />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutPage;

const AboutPage = () => {
  return <div>AboutPage</div>;
};

export default AboutPage;
