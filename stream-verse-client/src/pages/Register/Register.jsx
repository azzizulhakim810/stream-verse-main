import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Typography from "../../utilities/Typography/Typography";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoUrl.value;
    const password = form.password.value;
    const user = {
      name,
      email,
      photoURL,
      badge: "Bronze",
      postCount: 0,
      role: "user",
    };
    console.log(user);

    /*    // Password Validation 
    if(!/([?=.*?[A-Z])/.test(password)) {
      // setErrorMessage('Password Should have at least 1 uppercase');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password Should have at least 1 uppercase',
      })
      return;
    }

    else if(!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      // setErrorMessage('Password Should have at least 1 uppercase');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password Should have at least 1 special character',
      })
      return;
    }

    else if(password.length < 6) {
      // setErrorMessage('Password Should be at least 6 character or longer');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password Should be at least 6 character or longer',
      })
      return;
    } */
    form.reset();

    // Create User
    /* createUser(email, password)
    .then(res => {
      console.log(res.user);
      Swal.fire(
        'Great!',
        "Your Account is Registered",
        'success'
      );

      fetch('https://opiniox-server.vercel.app/user', {
        method:'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res =>{ res.json()})
      .then(data => {
        console.log(data)
      })

      axiosSecure.post('/addUser', user)
      .then(res => console.log(res.data))
      // Update Profile 
      manageProfile(name, photoURL)
      .then()
      .catch()
      navigate('/')
    }) */
    /* .catch(error=> {
      const errorMessageFromFirebase = error.message;
      // console.error(error.message)
      // setErrorMessage(errorMessageFromFirebase)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${errorMessageFromFirebase}`,
      })
    }) */
  };
  return (
    <div>
      {/* Register Button  */}
      <button
        onClick={() => document.getElementById("RegisterModal").showModal()}
        className="hover:scale-105 transition-all duration-300 ease-in-out bg-primary hover:bg-light  text-light hover:text-primary rounded-lg border-none px-6 py-[8px]"
      >
        <Typography variant="T_Medium_H6">Register </Typography>
      </button>

      {/* Modal Body  */}
      <dialog id="RegisterModal" className="modal bg-dark/40">
        <div className="modal-box bg-dark">
          <form method="dialog">
            <button className="btn btn-sm btn-circle border-0 text-light bg-primary absolute right-4 top-4 hover:text-primary">
              ✕
            </button>
          </form>

          <div className=" bg-dark  ">
            {/* Form  */}
            <div className="border-[1px] border-dark/20 rounded-lg p-8">
              <Typography variant="T_Bold_H4">
                <span className="flex justify-center text-light">Register</span>
              </Typography>

              {/* <Google Button  */}
              <div className="flex justify-center w-full py-4">
                <button
                  // onClick={handleGoogleSignin}
                  className="flex select-none items-center gap-3 rounded-lg border border-blue-gray-500 py-3.5 w-full justify-center align-middle font-sans text-sm font-bold uppercase text-light transition-all hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-dark="true"
                >
                  <FcGoogle></FcGoogle>
                  Continue with Google
                </button>
              </div>

              <div className="flex flex-col w-full border-opacity-80 -my-3 ">
                <div className="divider divider-info text-light">OR</div>
              </div>

              <form
                onSubmit={handleRegister}
                className="mt-5 mb-2 md:w-full sm:w-96"
              >
                <div className="mb-4 flex flex-col gap-6">
                  <div className="md:flex md:flex-row flex-col gap-4">
                    {/* Name Field  */}
                    <div className="relative h-11 w-full">
                      <input
                        name="name"
                        className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-1 outline-gray-300 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-primary focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        required
                        placeholder=" "
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-light/50 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-primary peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-primary peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Name
                      </label>
                    </div>

                    {/* Email Field  */}
                    <div className="relative h-11 w-full">
                      <input
                        name="email"
                        className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-1 outline-gray-300 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-primary focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        required
                        placeholder=" "
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-light/50 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-primary peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-primary peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Email
                      </label>
                    </div>
                  </div>

                  {/* Photo Url Field  */}
                  <div className="relative h-11 w-full">
                    <input
                      name="photoUrl"
                      className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-1 outline-gray-300 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-primary focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      required
                      placeholder=" "
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-light/50 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-primary peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-primary peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Photo Url
                    </label>
                  </div>

                  {/* Password Field  */}
                  <div className="relative h-11 w-full ">
                    <input
                      name="password"
                      type="password"
                      className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-1 outline-gray-300 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-primary focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      required
                      placeholder=" "
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-light/50 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-primary peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-primary peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Password
                    </label>
                  </div>
                </div>
                {/* Checkbox Field  */}
                <div className="inline-flex items-center">
                  <label
                    className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
                    htmlFor="checkbox"
                    data-ripple-dark="true"
                  >
                    <input
                      type="checkbox"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary checked:bg-primary checked:before:bg-cyan-500 hover:before:opacity-10"
                      id="checkbox"
                      required
                    />
                    <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                  <label
                    className="mt-px cursor-pointer select-none font-light text-gray-700"
                    htmlFor="checkbox"
                  >
                    <p className="flex items-center font-sans text-sm font-normal leading-normal text-light/40 antialiased">
                      I agree the
                      <a
                        className="font-medium transition-colors hover:text-primary"
                        href="#"
                      >
                        &nbsp;Terms and Conditions
                      </a>
                    </p>
                  </label>
                </div>
                <button
                  className="mt-4 block w-full select-none rounded-lg bg-primary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  required
                  type="submit"
                  data-ripple-light="true"
                >
                  Register
                </button>
                <p className="mt-4 block text-left  text-light/40 antialiased">
                  <Typography variant="T_Regular_H6">
                    Already have a account?
                  </Typography>

                  <Link
                    className=" text-primary  hover:tracking-wider duration-150 transition-all ease-in-out"
                    to="/signin"
                  >
                    <Typography variant="T_SemiBold_H6">
                      &nbsp; Sign In
                    </Typography>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Register;
