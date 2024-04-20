import { Button, Input } from "antd";
import footerBackgroundImage from "../assets/footer-bg.png";
import footerBottomBackgroundImage from "../assets/footer-bottom-bg.png";
import footerLogo from "../assets/footer-logo.png";
const { TextArea } = Input;
export default function Footer() {
  return (
    <div>
      <div
        className="h-[400px] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${footerBackgroundImage})` }}
      >
        <div className="grid grid-cols-12 max-w-6xl mx-auto">
          <div className="col-span-6 pt-14">
            <div>
              <div>
                <img className="w-48" src={footerLogo} alt="" />
              </div>
              <p className="font-raleway mt-4">
                Always ready to be your friend. Come & Contact with us to share
                your memorable moments, to share with your best companion.
              </p>
            </div>
          </div>
          <div className="col-span-6 pt-14">
            <h2 className="font-rancho text-2xl ">Connect with us</h2>
            <form className="space-y-3 mt-4">
              <Input type="text" size="large" placeholder="Name" />
              <Input type="email" size="large" placeholder="Email" />
              <TextArea rows={4} />
              <Button>Send Message</Button>
            </form>
          </div>
        </div>
      </div>
      <div
        className="h-14 bg-center bg-cover bg-no-repeat flex justify-center items-center"
        style={{ backgroundImage: `url(${footerBottomBackgroundImage})` }}
      >
        <h1 className="text-xl font-rancho text-center text-white">
          Copyright Espresso Emporium ! All Rights Reserved
        </h1>
      </div>
    </div>
  );
}
