import { useState } from "react";

function Login() {
  let [email, setEamil] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "example@example.com",
    password: "D434r3343049",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // {
  //   "name": "testuser",
  //   "email": "testuser@example.com",
  //   "password": "Securepassword5",
  // "confirmPassword": "Securepassword5"
  // }

  function checkValidation(auth) {
    localStorage.setItem("Auth", auth);
    console.log(auth);
    window.location.replace("/");
  }

  function signup() {
    window.location.replace("/register");
  }
  // async function handelReg(e){

  //   let res = await data(e);
  //   console.log(res);
  //   window.location.replace("/");
  // }
  // console.log(data())
  async function signinFun(e) {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://cors-anywhere.herokuapp.com/https://social-media-production-206a.up.railway.app/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Origin": "http://localhost:3001", // Include your frontend's origin
            "X-Requested-With": "XMLHttpRequest",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log("Response from API:", res);

      if (!res.ok) {
        throw new Error(`HTTP error! status errrrrr: ${res.status}`);
      }

      const result = await res.json();
      checkValidation(result.data.token);
      console.log("Response fcccrom API:", result.data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto  sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={(e) => {
              checkValidation(e);
            }}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={(e) => signinFun(e)}
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="flex justify-between mt-3 align-middle pt-2">
            <p className=" text-center self-center text-sm/6 text-gray-500 align-middle">
              Not a member?
            </p>
            <button
              type="submit"
              onClick={signup}
              className="flex flex-grow justify-center ml-2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
