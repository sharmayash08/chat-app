import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox"
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {

    const [inputs , setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
    });

    const {loading, signup} = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs,gender});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
            Sign Up 
            <span className="text-blue-500"> ChatApp</span>
        </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Full Name</span>
                    </label>
                    <input type="text" placeholder="Enter Full Name" className="w-full input input-bordered h-12" 
                        value={inputs.fullName}
                        onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                    />
                </div>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Username</span>
                    </label>
                    <input type="text" placeholder="Enter username" className="w-full input input-bordered h-12" 
                        value={inputs.username}
                        onChange={(e) => setInputs({...inputs, username: e.target.value})}
                    />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-12" 
                        value={inputs.password}
                        onChange={(e) => setInputs({...inputs, password: e.target.value})}
                    />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-12" 
                        value={inputs.confirmPassword}
                        onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                    />
                </div>
                {/* Gender CheckBox Component */}
                <GenderCheckBox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender}/>

                <Link to='/login' className="text-sm hover:underline hover:text-blue-600  inline-block">
                    Already have an account?
                </Link>

                <div>
                    <button className="btn btn-block mt-2 text-md bg-blue-500 text-gray-300"
                    disabled={loading}>
                        {loading ? <span className="loading loading-spinner"></span> : "Create an account"}
                    </button>
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