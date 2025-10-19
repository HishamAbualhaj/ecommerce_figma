import Header from "../../components/Header";
import Footer from "../../components/Footer";
import login from "../../assets/login.jpg";
import Button from "../../components/ui/Button";
const Login = () => {
  return (
    <>
      <Header />
      <div className="pb-36 pt-16">
        <div className="flex items-center">
          <div className="max-xl:hidden">
            <img className="max-w-[900px]" src={login} alt="" />
          </div>

          <div className="flex flex-1 justify-center">
            <div className="flex-1 lg:px-10 px-5 max-w-[700px]">
              <div className="text-4xl font-medium">Log in to Exclusive</div>
              <div className="mt-3">Enter your details below</div>
              <div className="mt-5 flex flex-col gap-8">
                <input
                  className="bg-transparent border-b rounded-none px-0 border-gray-300"
                  type="text"
                  placeholder="Email or Phone Number"
                />
                <input
                  className="bg-transparent border-b rounded-none px-0 border-gray-300"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="mt-8 flex justify-between items-center">
                <Button className="md:!py-3 !px-8" text="Login" />
                <div className="text-primary">
                  <a href="/forgotpassword">Forgot Password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
