import Pill from "./common/Pill";
import Alert from "./common/Alert";
import { text } from "@fortawesome/fontawesome-svg-core";
const AccommodationDetails = () => {
    const data = {
        id: "664822747f8f7b13625b83d2",
        community_name: "Whispering Hills",
        address: "124st",
        type: "temporary",
        move_in_date: "2024-05-20T03:34:04.076000",
        move_out_date: "2024-07-20T03:34:04.076000",
        floor_plan: "2B2B",
        rent_amount_per_person: 193,
        utilities_included: false,
        current_occupancies: 6,
        available_occupancies: {
          boys: 2,
          girls: 2,
          any: 0
        },
        aminities: [
            "Parking", "Wifi", "Swimming", "Gym", "Tennis", "Basketball", "TV", "Sofa", "Washing Machine"],
        status: "active",
        additional_info: "Cricket can be played at tennis court",
        created_at: "2024-05-17T22:37:24.562000",
        updated_at: "2024-05-17T22:37:24.562000"
    }
    return (
        
      <div className={`bg-white text-gray-900 px-4 py-5 rounded-lg border border-gray-300 grid grid-cols-1`}>
        <div className=" text-xl font-bold flex justify-between">
            <div>{data.available_occupancies.boys} BOYS {data.available_occupancies.girls} GIRLS</div> 
            <div>${data.rent_amount_per_person}</div>
        </div>
        <div className="flex justify-between">
            <div className="flex items-center text-sm text-gray-400 py-1 pt-2">
                <svg
                    className="h-3 w-3 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />{" "}
                    <line x1="16" y1="2" x2="16" y2="6" />{" "}
                    <line x1="8" y1="2" x2="8" y2="6" />{" "}
                    <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <div className="pl-1 flex justify-between text-custom-gray-text-contact">Move in: 
                    <span className="text-gray-800 pl-1" style={{color: '#303030'}}>MON, 11:00 AM</span>
                </div>
            </div>
            <div className={`text-custom-gray-text-contact text-sm`}>{data.utilities_included? '(utilities included)': '(utilities not included)'}</div>
        </div>
        <Alert heading={"Message from Owner"} message={"Near Walmart, Costco, and KC Mart, we are very friendly, and you'll get a homely feel!"} color="#F5F5F5"/>
        <div className="flex justify-between px-4 pt-5 pb-1">
            <div className="text-gray-500">Community</div>
            <div  style={{color: '#1C0C0C'}}>{data.community_name}</div>
        </div>
        <div className="flex justify-between px-4 py-1">
            <div className="text-gray-500">Rooms</div>
            <div  style={{color: '#1C0C0C'}}>{data.floor_plan}</div>
        </div>
        <div className="flex justify-between px-4 py-1">
            <div className="text-gray-500">Created on</div>
            <div  style={{color: '#1C0C0C'}}>{data.created_at}</div>
        </div>
        <div className="flex justify-between px-4 py-1">
            <div className="text-gray-500">Individual Rent</div>
            <div style={{color: '#1C0C0C'}}>${data.rent_amount_per_person}</div>
        </div>
        <div className="flex justify-between px-4 py-1">
            <div className="text-gray-500">Current Occupancy</div>
            <div  style={{color: '#1C0C0C'}}>{data.current_occupancies} members</div>
        </div>
        <div className="flex justify-between px-4 py-1">
            <div className="text-gray-500">Future Occupants</div>
            <div  style={{color: '#1C0C0C'}}>{data.available_occupancies.boys+data.available_occupancies.girls+data.available_occupancies.any} members</div>
        </div>
        <div className="flex justify-between px-3 py-1">
            <div className="text-gray-500">Type</div>
            <div className="bg-custom-yellow-background border-2 border-custom-yellow-border rounded-full px-3">
                <div className="text-center text-sm capitalize" style={{color: '#1C0C0C'}}>{data.type}</div>
            </div>
        </div>
        <div className="pt-8">
            <hr />
        </div>
        <div className="py-5 px-4 text-custom-gray font-semibold">
            Amenities
        </div>
        <div className="flex justify-left flex-wrap">
        {data.aminities.map((text) => (
            <Pill key={text} title={text} disabled={true}/>
        ))}
        </div>
        <div className="px-4 pt-20 text-custom-gray-text-contact font-bold">
            Contact Details
        </div>
        <div className="flex justify-between px-4 pt-4">
            <div className="text-custom-gray-text-contact">Name</div>
            <div className="font-medium" style={{color: '#1C0C0C'}}>Jitta Aravind Reddy</div>
        </div>
        <div className="flex justify-between px-4 pt-1">
            <div className="text-custom-gray-text-contact">Contact</div>
            <div className="flex items-center">
                <svg
                    className="h-3 w-3 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />{" "}
                    <line x1="16" y1="2" x2="16" y2="6" />{" "}
                    <line x1="8" y1="2" x2="8" y2="6" />{" "}
                    <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <div className="pl-2 underline underline-offset-4" style={{ color: '#00796B'}}>+1 976-475-6788</div>
            </div>
        </div>
      </div>
    );
  };

export default AccommodationDetails;
