import React from "react";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const [formValues, setFormValues] = React.useState<FormValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const submitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    window.location.href = `mailto:rinkeshr007@gmail.com?subject=${formValues.subject}&body=Hi, My name is ${formValues.name}. ${formValues.message}`;
  };

  return (
    <div className="h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center relative">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-base md:text-4xl font-semibold text-center mt-24">
          I have just got what you need.{" "}
          <span className="underline decoration-[#F7AB0A]/50">
            Let&apos;s talk
          </span>
        </h4>
        <div className="space-y-10">
          <div className=" flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A]/50 h-7 w-7 animate-pulse " />
            <p className="text-xs md:text-2xl">rinkeshr007@gmail.com</p>
          </div>
          <div className=" flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A]/50 h-7 w-7 animate-pulse " />
            <p className="text-xs md:text-2xl">Surat, Gujarat, India.</p>
          </div>
        </div>
        <form
          onSubmit={submitForm}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              name="name"
              placeholder="Name"
              className="contactInput px-3 w-1/2"
              type="text"
              onChange={(e) =>
                setFormValues({ ...formValues, name: e.target.value })
              }
            />
            <input
              name="email"
              placeholder="Email"
              className="contactInput w-1/2"
              type="email"
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
            />
          </div>
          <input
            name="subject"
            placeholder="Subject"
            className="contactInput"
            type="text"
            onChange={(e) =>
              setFormValues({ ...formValues, subject: e.target.value })
            }
          />
          <textarea
            name="message"
            placeholder="Message"
            className="contactInput"
            onChange={(e) =>
              setFormValues({ ...formValues, message: e.target.value })
            }
          />
          <button
            className="bg-[#F7AB0A] py-2 md:py-5 px-10 rounded-md text-black font-bold text-lg"
            onClick={submitForm}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
