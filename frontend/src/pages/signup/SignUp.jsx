import GenderCheckBox from "./GenderCheckBox"

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
            Sign Up 
            <span className="text-blue-500"> ChatApp</span>
        </h1>
            <form>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Full Name</span>
                    </label>
                    <input type="text" placeholder="Enter Full Name" className="w-full input input-bordered h-12" />
                </div>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Username</span>
                    </label>
                    <input type="text" placeholder="Enter username" className="w-full input input-bordered h-12" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-12" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-12" />
                </div>
                {/* Gender CheckBox Component */}
                <GenderCheckBox />

                <a href="#" className="text-sm hover:underline hover:text-blue-600  inline-block">
                    Already have an account?
                </a>

                <div>
                    <button className="btn btn-block mt-2 text-md bg-blue-500 text-gray-300">Create an account</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp;

// Starter Code for this Component
// const SignUp = () => {
//     return (
//       <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//           <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5">
//           <h1 className="text-3xl font-semibold text-center text-gray-300">
//               Sign Up 
//               <span className="text-blue-500"> ChatApp</span>
//           </h1>
//               <form>
//                   <div>
//                       <label className="label p-2">
//                           <span className="text-base label-text">Full Name</span>
//                       </label>
//                       <input type="text" placeholder="Enter Full Name" className="w-full input input-bordered h-12" />
//                   </div>
//                   <div>
//                       <label className="label p-2">
//                           <span className="text-base label-text">Username</span>
//                       </label>
//                       <input type="text" placeholder="Enter username" className="w-full input input-bordered h-12" />
//                   </div>
//                   <div>
//                       <label className="label">
//                           <span className="text-base label-text">Password</span>
//                       </label>
//                       <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-12" />
//                   </div>
//                   <div>
//                       <label className="label">
//                           <span className="text-base label-text">Password</span>
//                       </label>
//                       <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-12" />
//                   </div>
//                   {/* Gender CheckBox Component */}
//                   <GenderCheckBox />
  
//                   <a href="#" className="text-sm hover:underline hover:text-blue-600  inline-block">
//                       Already have an account?
//                   </a>
  
//                   <div>
//                       <button className="btn btn-block mt-2 text-md bg-blue-500 text-gray-300">Create an account</button>
//                   </div>
//               </form>
//           </div>
//       </div>
//     )
//   }
  
//   export default SignUp;