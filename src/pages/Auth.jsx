import React, { useState } from 'react'
import { Button } from 'flowbite-react';
import { HiUser } from 'react-icons/hi';
import { GoogleloginUserAPI, loginUserAPI, registerUserAPI } from '../services/allAPIs';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'

function Auth({ register }) {
  console.log(register);

  //create a state to hold userdata
  const [userData, setUserData] = useState({ 'username': '', 'email': '', 'password': '' })
  console.log(userData);
  

  const navigate = useNavigate()

  //rgister
 const handleRegister = async () => {
    console.log(userData);
    if (!userData.username || !userData.email || !userData.password) {
      toast.warning("please fill the all fields", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      //call register user api
      try {
        const response = await registerUserAPI(userData);
        console.log(response);
        if (response.status == 201) {
          toast.success("Registration successfully", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          // set empty state values after registation done
          setUserData({ username: "", email: "", password: "" });

          setTimeout(() => {
            navigate("/login");
          }, 4000);
        } else {
          toast.error("User already existing...", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          console.log(response.response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  //login
 const handleLogin = async () => {
    if (!userData.email || !userData.password) {
      toast.warning("please fill the all fields", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      try {
        const response = await loginUserAPI(userData);
        console.log(response);
        if (response.status == 201) {
          sessionStorage.setItem(
            "userDetails",
            JSON.stringify(response.data.user));
           sessionStorage.setItem(
            "token",
            JSON.stringify(response.data.token));
          
          toast.success("Login successfully", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          if (response.data?.user?.role == "BookStoreAdmin") {
            setTimeout(() => {
              navigate("/adminhome");
            }, 4000);
          } else {
            setTimeout(() => {
              navigate("/");
            }, 4000);
          }

          // set empty state values after registation done
          setUserData({ 'email': "", 'password': "" });
        } else {
          toast.error("Invalid user details", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          console.log(response.response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  //google login
 const handleGoogleLogin = async (credentialResponse) => {
    console.log("google login", credentialResponse);
    const decode = jwtDecode(credentialResponse.credential);
    console.log(decode);

    const response = await GoogleloginUserAPI({
      email: decode.email,
      password: "google",
      username: decode.name,
      profile: decode.picture,
    });
    console.log(response);
    if (response.status == 200) {
      sessionStorage.setItem("userDetails", JSON.stringify(response.data.user));
           sessionStorage.setItem(
            "token",
            JSON.stringify(response.data.token));
      toast.success("Login successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(() => {
        navigate("/");
      }, 4000);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1920')`,
      }}>

      <div className="relative  w-full max-w-md px-4">

        <h1 className="text-4xl font-serif text-center mb-8 text-gray-800 tracking-wide">
          BOOK STORE
        </h1>

        <div className="bg-[#1e293b] rounded-lg shadow-2xl p-8">

          <div className="flex justify-center mb-6">
            <div className="w-18 h-18 rounded-full border-2 border-white flex items-center justify-center">
              <HiUser className="w-8 h-8 text-white" />
            </div>
          </div>

          {
            register ? <h2 className="text-2xl font-light text-white text-center mb-6">
              Register
            </h2> : <h2 className="text-2xl font-light text-white text-center mb-6">
              Login
            </h2>
          }


          <form className="space-y-4">


            {
              register && <div className='flex items-center justify-center' style={{ marginTop: '30px' }}>


                <input onChange={(e) => setUserData({ ...userData, username: e.target.value })} type="text" style={{ backgroundColor: 'white', width: '340px', height: '30px' }} placeholder='Username' />

              </div>
            }

            <div className='flex items-center justify-center' style={{ marginTop: '40px' }}>

              <input onChange={(e) => setUserData({ ...userData, email: e.target.value })} type="text" style={{ backgroundColor: 'white', width: '340px', height: '30px' }} placeholder='Email Id' />

            </div>

            <div className='flex items-center justify-center' style={{ marginTop: '40px' }}>

              <input onChange={(e) => setUserData({ ...userData, password: e.target.value })} type="text" style={{ backgroundColor: 'white', width: '340px', height: '30px' }} placeholder='Password' />

            </div>

            {

              register ? <Button onClick={handleRegister}

                type="button"

                className="w-full bg-green-700! hover:bg-green-800 ! "

                size="lg"

              >

                Register

              </Button> : <Button onClick={handleLogin}

                type="button"

                className="w-full bg-green-700! hover:bg-green-800 ! "

                size="lg"

              >

                Login

              </Button>

            }

           {/* google sign */}
            <div>
              <GoogleLogin 
              onClick={()=>handleGoogleLogin(credentialResponse)}
                onSuccess={credentialResponse => {
                  console.log(credentialResponse);
                  handleGoogleLogin(credentialResponse)
                  // credentialResponce decode => JWT DECODE
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </div>

            {/* Login Link */}
            <div className="text-center mt-4">
              {
                register ? <div className="text-center mt-5">
                  <p className="text-white text-sm">
                    Already have an account?{" "}
                    <a
                      href="/login"
                      className="text-cyan-400 hover:text-cyan-300  font-medium"
                    >
                      Login
                    </a>
                  </p>
                </div> : <div className="text-center mt-5">
                  <p className="text-white text-sm">
                    Don't have an account?{" "}
                    <a
                      href="/register"
                      className="text-cyan-400 hover:text-cyan-300  font-medium"
                    >
                      Register
                    </a>
                  </p>
                </div>
              }
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" />
    </div>
  )
}

export default Auth