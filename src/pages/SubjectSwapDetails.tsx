const SubjectSwapDetails = () => {
    return <div className="bg-white flex  h-screen p-3  flex-col space-y-2 font-inter" >
    {/* Main swap info */}
    <div className="text-gray-700 font-extrabold text-lg ">Advance Algorithms</div>
    <div className="flex items-center "><svg
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
    <div className="text-gray-400 flex-div text-10px pl-1 ">Timings: <span className="text-gray-800 ">MON,11:00 AM</span></div>
    </div>
    <div className="text-gray-400 flex-div text-xs ml-2 flex justify-between">Professor <span className="text-gray-800">Dr. Mohammad Yousf</span></div>
    <div className="text-gray-400 flex-div text-xs ml-2 flex justify-between">CRN<span className="text-gray-800">#76745</span></div>
    <div className="text-gray-400 flex-div text-xs ml-2 flex justify-between pb-3">Deadline <span className="text-gray-800"> 14 Feb 2024 </span></div>
    
    <div className=" text-gray-500 font-bold text-sm ">Expected Subjects </div>
    {/* card 1 */}
    <div className="shadow-custom rounded-lg border pl-2">
    
    <div className=" text-gray-800 font-bold border-r-2 mt-4 ml-2 text-xs text-">STAT FOUND</div>
    <div className="flex items-center ml-2"><svg
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
    <div className="text-gray-400 flex-div text-10px pl-1 pt-1 ">Timings: <span className="text-gray-800 ">MON,11:00 AM</span></div>
    </div>
    <div className="text-gray-400 flex-div text-xs m-2 flex justify-between">Professor <span className="text-gray-800">Dr. Mohammad Yousf</span></div>
    <div className="text-gray-400 flex-div text-xs m-2 flex justify-between">CRN <span className="text-gray-800"> #13456 </span></div>
    </div>
    {/* card 2 */}
    <div className="shadow-custom rounded-lg border pl-2">
    
    <div className=" text-gray-800 font-bold border-r-2 mt-4 ml-2 text-xs text-">STAT FOUND</div>
    <div className="flex items-center ml-2"><svg
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
    <div className="text-gray-400 flex-div text-10px pl-1 pt-1 ">Timings: <span className="text-gray-800 ">MON,11:00 AM</span></div>
    </div>
    <div className="text-gray-400 flex-div text-xs m-2 flex justify-between">Professor <span className="text-gray-800">Dr. Mohammad Yousf</span></div>
    <div className="text-gray-400 flex-div text-xs m-2 flex justify-between">CRN <span className="text-gray-800"> #13456 </span></div>
    </div>
    {/* Contact Details */}
    <div className="pt-8"></div>
    <div className=" text-gray-500 font-bold text-sm ">Contact Details </div>
    <div className="text-gray-400 flex-div text-xs ml-2 flex justify-between">Name <span className="text-gray-800 ">Jitta Aravind Reddy</span></div>
    <div className="text-gray-400 flex-div text-xs ml-2 flex justify-between">Created on <span className="text-gray-800">11 Feb 2024</span></div>
    <div className="flex items-center">
    <div className="text-gray-400 flex-div text-xs ml-2 flex justify-between pb-3">Contact <span className="underline text-teal-600 ">+1 976-475-6788 </span></div>
    </div>
    </div>    
}
export default SubjectSwapDetails

