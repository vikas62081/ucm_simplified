
import { Formik, Form } from "formik";

const OtpScreen = () => {
  return <div className="bg-white flex  h-screen p-3  flex-col space-y-2 font-inter" >
 <div className="text-2xl font-bold pt-5 pl-2 text-gray-800">OTP Verification</div>
 <div className="text-sm pl-2 text-gray-500">Enter the verification code we just sent <br></br>on your email address.</div>
 

<div className="px-6 pt-24 pb-9  mx-auto w-full ">
  <div className="mx-auto flex w-full max-w-md flex-col ">
    
    <div>
      <form action="" method="post">
        <div className="flex flex-col space-y-16">
          <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
            <div className="w-16 h-16 ">
              <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>

            </div>
            <div className="w-16 h-16 ">
              <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
            </div>
            <div className="w-16 h-16 ">
              <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
            </div>
            <div className="w-16 h-16 ">
              <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
            </div>
          </div>

          <div className="flex flex-col space-y-5">
            <div>
              <button className="shadow-custom h-12 w-full mt-10 bg-primary rounded-lg text-white text-base">
                Verify
              </button>
            </div>

            <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
              <p>Didn't recieve code?</p> <a className="flex flex-row items-center text-blue-600" href="http://" target="_blank" rel="noopener noreferrer">Resend</a>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>


 

 {/* <div className="text-sm  mt-10 text-gray-500 text-xs font-bold flex justify-center">Resend OTP in 23s</div>
 <div className="text-sm  mt-5 text-gray-400 text-xs font-bold flex justify-center">Resend OTP</div>
 <button className="shadow-custom h-12 w-full mt-16 bg-primary rounded-lg text-white text-base ">Verify</button>   */}
 </div>

     
}
export default OtpScreen 

