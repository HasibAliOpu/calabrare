import React from "react";
import Clock from "../../assets/icon/clock.png";
import TextEditing from "../../assets/icon/text-Editing.png";
import Purchase from "../../assets/icon/Purchase.png";

const Features = () => {
  return (
    <div className="my-10 text-center">
      <h1 className="text-5xl lg:text-7xl font-semibold pt-28 lg:pt-0 pb-12">
        Features
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-20 mx-10 lg:mx-36 rounded-full shadow-2xl border-2 text-2xl font-bold">
        <div className="">
          <img src={Clock} alt="clock" className="w-1/6 mx-auto" />
          <h1>
            Create Your Card <br /> in just 5 mins
          </h1>
        </div>
        <div className="">
          <img src={TextEditing} alt="textEditing" className="w-1/6 mx-auto" />
          <h1>
            Customize the Text <br /> with "Edit this Page" Option
          </h1>
        </div>
        <div className="">
          <img src={Purchase} alt="purchase" className="w-1/6 mx-auto" />
          <h1>
            Editing is available <br />
            after purchase also
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Features;
