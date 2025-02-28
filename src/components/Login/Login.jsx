// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-hot-toast";

// const Login = ({ setCurrentUser }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Simulate login logic (replace with actual API call)
//     if (email === "user@example.com" && password === "password") {
//       setCurrentUser({ email, role: "donor" }); // Set user role dynamically
//       toast.success("Login successful!");
//       navigate("/");
//     } else {
//       toast.error("Invalid email or password. Please register if you don't have an account.");
//       navigate("/role-selection"); // Redirect to role selection for registration
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gradient-to-b from-sky-100 via-orange-100 to-amber-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border rounded-lg"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-2 border rounded-lg"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-all"
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-center text-gray-600">
//           Don't have an account?{" "}
//           <span
//             className="text-blue-500 cursor-pointer hover:underline"
//             onClick={() => navigate("/role-selection")}
//           >
//             Register here
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++==




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-hot-toast";
// import API1 from "../path-to-your-axios-setup-file"; // Import the axios instance

// const Login = ({ setCurrentUser }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       // Send login request to the backend
//       const response = await API1.post("/login", { email, password });

//       // Extract token and role from the response
//       const { token, role } = response.data;

//       // Store token and role in localStorage
//       localStorage.setItem("token", token);
//       localStorage.setItem("role", role);

//       // Set the current user in state (if needed)
//       setCurrentUser({ email, role });

//       // Redirect based on role
//       switch (role) {
//         case "donor":
//           navigate("/donor-dashboard");
//           break;
//         case "supplier":
//           navigate("/supplier-dashboard");
//           break;
//         case "institution":
//           navigate("/institution-dashboard");
//           break;
//         default:
//           toast.error("Invalid role. Please contact support.");
//           break;
//       }

//       toast.success("Login successful!");
//     } catch (error) {
//       console.error("Login error:", error);
//       toast.error("Invalid email or password. Please try again.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gradient-to-b from-sky-100 via-orange-100 to-amber-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border rounded-lg"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-2 border rounded-lg"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-all"
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-center text-gray-600">
//           Don't have an account?{" "}
//           <span
//             className="text-blue-500 cursor-pointer hover:underline"
//             onClick={() => navigate("/role-selection")}
//           >
//             Register here
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-hot-toast";

// const Login = ({ setCurrentUser }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Simulate login logic (replace with actual API call)
//     if (email === "donor@example.com" && password === "password") {
//       setCurrentUser({ email, role: "donor" });
//       toast.success("Login successful!");
//       navigate("/donor-dashboard");
//     } else if (email === "institution@example.com" && password === "password") {
//       setCurrentUser({ email, role: "institution" });
//       toast.success("Login successful!");
//       navigate("/institution-dashboard");
//     } else if (email === "supplier@example.com" && password === "password") {
//       setCurrentUser({ email, role: "supplier" });
//       toast.success("Login successful!");
//       navigate("/supplier-dashboard");
//     } else {
//       toast.error("Invalid email or password. Please register if you don't have an account.");
//       navigate("/role-selection");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gradient-to-b from-sky-100 via-orange-100 to-amber-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border rounded-lg"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-2 border rounded-lg"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-all"
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-center text-gray-600">
//           Don't have an account?{" "}
//           <span
//             className="text-blue-500 cursor-pointer hover:underline"
//             onClick={() => navigate("/role-selection")}
//           >
//             Register here
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-hot-toast";

// const Login = ({ setCurrentUser }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("donor"); // Default role is "donor"
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Simulate login logic (replace with actual API call)
//     if (email === "donor@example.com" && password === "password" && role === "donor") {
//       setCurrentUser({ email, role: "donor" });
//       toast.success("Login successful!");
//       navigate("/donor-dashboard");
//     } else if (email === "institution@example.com" && password === "password" && role === "institution") {
//       setCurrentUser({ email, role: "institution" });
//       toast.success("Login successful!");
//       navigate("/institution-dashboard");
//     } else if (email === "supplier@example.com" && password === "password" && role === "supplier") {
//       setCurrentUser({ email, role: "supplier" });
//       toast.success("Login successful!");
//       navigate("/supplier-dashboard");
//     } else {
//       toast.error("Invalid email, password, or role. Please try again.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gradient-to-b from-sky-100 via-orange-100 to-amber-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
//         <form onSubmit={handleLogin} className="space-y-4">
//           {/* Email Input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border rounded-lg"
//               required
//             />
//           </div>

//           {/* Password Input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-2 border rounded-lg"
//               required
//             />
//           </div>

//           {/* Role Selection (Radio Buttons) */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Role</label>
//             <div className="mt-2 space-y-2">
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="role"
//                   value="donor"
//                   checked={role === "donor"}
//                   onChange={(e) => setRole(e.target.value)}
//                   className="form-radio h-4 w-4 text-orange-500"
//                 />
//                 <span className="ml-2">Donor</span>
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="role"
//                   value="institution"
//                   checked={role === "institution"}
//                   onChange={(e) => setRole(e.target.value)}
//                   className="form-radio h-4 w-4 text-orange-500"
//                 />
//                 <span className="ml-2">Needy Institution</span>
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="role"
//                   value="supplier"
//                   checked={role === "supplier"}
//                   onChange={(e) => setRole(e.target.value)}
//                   className="form-radio h-4 w-4 text-orange-500"
//                 />
//                 <span className="ml-2">Supplier</span>
//               </label>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-all"
//           >
//             Login
//           </button>
//         </form>

//         {/* Registration Link */}
//         <p className="mt-4 text-center text-gray-600">
//           Don't have an account?{" "}
//           <span
//             className="text-blue-500 cursor-pointer hover:underline"
//             onClick={() => navigate("/role-selection")}
//           >
//             Register here
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios"; // Import axios for making API calls

const Login = ({ setCurrentUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donor"); // Default role is "donor"
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send login request to the backend
      const response = await axios.post("/login", {
        email,
        password,
        role,
      });

      // If login is successful
      if (response.data.success) {
        const { email, role } = response.data.user;
        setCurrentUser({ email, role }); // Set the current user in state
        toast.success("Login successful!");

        // Redirect based on role
        switch (role) {
          case "donor":
            navigate("/donor-dashboard");
            break;
          case "institution":
            navigate("/institution-dashboard");
            break;
          case "supplier":
            navigate("/supplier-dashboard");
            break;
          default:
            toast.error("Invalid role. Please contact support.");
            break;
        }
      } else {
        toast.error("Invalid email, password, or role. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-sky-100 via-orange-100 to-amber-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          {/* Role Selection (Radio Buttons) */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <div className="mt-2 space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="donor"
                  checked={role === "donor"}
                  onChange={(e) => setRole(e.target.value)}
                  className="form-radio h-4 w-4 text-orange-500"
                />
                <span className="ml-2">Donor</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="institution"
                  checked={role === "institution"}
                  onChange={(e) => setRole(e.target.value)}
                  className="form-radio h-4 w-4 text-orange-500"
                />
                <span className="ml-2">Needy Institution</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="supplier"
                  checked={role === "supplier"}
                  onChange={(e) => setRole(e.target.value)}
                  className="form-radio h-4 w-4 text-orange-500"
                />
                <span className="ml-2">Supplier</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-all"
          >
            Login
          </button>
        </form>

        {/* Registration Link */}
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => navigate("/role-selection")}
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;