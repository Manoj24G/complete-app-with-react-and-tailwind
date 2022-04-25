import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  return (
    <div id="Features" className="w-full my-10">
      <div className="max-w-[1240px] mx-auto ">
        <div className="text-center ">
          <h1 className="text-3xl font-bold text-sky-600">Our Features</h1>
        </div>

        <div className=" m-5 grid grid-flow-col gap-4 ">
          <div className="border rounded-md p-5">
            <h2 className="font-bold text-lg my-2">Built on Tailwind CSS v3</h2>
            <p>
              Startup generator offers a valid Bootstrap page and automatically
              writes the semantic HTML code of the template.
            </p>
          </div>

          <div className="border rounded-md p-5">
            <h2 className="font-bold text-lg my-2">No-Code</h2>
            <p>Editor offers a complete No-Code experience.</p>
          </div>
          <div className="border rounded-md p-5">
            <h2 className="font-bold text-lg my-2">Fully Customizable</h2>
            <p>
              Get granular control over every block on your page. Style it, edit
              content to your expectation.
            </p>
          </div>
        </div>

        <div className=" m-5 grid grid-flow-col gap-4 ">
          <div className="border rounded-md p-5">
            <h2 className="font-bold text-lg my-2">Dark Mode Support</h2>
            <p>
              All blocks have dark mode support by default. Page builder has a
              special toggle dark mode switch.
            </p>
          </div>

          <div className="border rounded-md p-5">
            <h2 className="font-bold text-lg my-2">Device Preview</h2>
            <p>
              Verify the page design on multiple screen sizes right inside the
              page builder. Support screen sizes from mobile to wide screens
            </p>
          </div>
          <div className="border rounded-md p-5">
            <h2 className="font-bold text-lg my-2">Fonts & Colors</h2>
            <p>
              Set the fonts for heading and body, and three different colour.
              Choose from hundreds of fonts and color of your choice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
