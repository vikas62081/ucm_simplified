const AccommodationDetails = () => {
    return (
        
      <div className={`bg-white text-gray-900 p-3 rounded-lg border border-gray-300 mt-2 mb-1 grid grid-cols-1`}>
        <p className=" text-xl font-bold py-1">2 BOYS 2 GIRLS</p>
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
          <div className="pl-1">Move in: <span className="text-gray-800">MON, 11:00 AM</span></div>
        </div>
        <p className="text-xs text-gray-600 flex justify-between pt-2 pb-1">
          Professor</p>
        <p className="text-xs text-gray-600 flex justify-between py-1">
          Expected Subject</p>
      </div>
    );
  };

export default AccommodationDetails;
