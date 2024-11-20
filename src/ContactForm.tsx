import emailjs from "@emailjs/browser";
import React, {
  createRef,
  FormEvent,
  LegacyRef,
  useEffect,
  useState,
} from "react";
import toast, { Toaster } from "react-hot-toast";
import SocialContactButtons from "./SocialContactButtons";
import PersonalInformation from "./PersonalInformation";

interface CustomFormData extends FormData {
  name: string;
  phone: string;
  email: string;
  idea: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<CustomFormData>({
    ...new FormData(),

    name: "",
    phone: "",
    email: "",
    idea: "",
  });
  const [formError, setFormError] = useState("");

  const formRef: LegacyRef<HTMLFormElement> = createRef();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const phoneOrEmailMissing: boolean = !formData.phone && !formData.email;
    if (!isChecked) {
      setFormError("Bitte stimmen Sie der Datenverarbeitung zu.");
    } else if (phoneOrEmailMissing) {
      setFormError(
        "Es muss entweder eine Email oder Telefonnummer angegeben werden"
      );
    } else if (formRef.current) {
      setFormError("");

      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_OPTIONS
        )
        .then(
          (_) => {
            toast.success("Email wurde versendet!", {
              style: {
                background: "bg-base-300", // Beispiel für Tailwind-Farbe
                color: "#000",
                borderRadius: "0.5rem",
              },
              duration: 5000,
            });
          },
          (error) => {
            console.log("Error" + error);
            toast.error(
              `Email konnte nicht versendet werden! Schick mir doch direkt eine Email an ${PersonalInformation.email}.`,
              {
                style: {
                  background: "bg-base-300", // Beispiel für Tailwind-Farbe
                  color: "#000",
                  borderRadius: "0.5rem",
                },
                duration: 10000,
              }
            );
          }
        );
    } else {
      toast.error("Bitte stimmen Sie der Datenverarbeitung zu.");
    }
  };

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <section
        id="contactForm"
        className="relative bg-cover bg-center py-10 flex-grow"
      >
        <div className="max-w-full bg-base-100 shadow-lg rounded-lg">
          <h2 className=" pt-4 text-2xl font-bold  text-center ">
            Wie du mich erreichst
          </h2>
          <div className="flex items-center justify-center pt-5">
            <SocialContactButtons />
          </div>
          <div className="flex items-center justify-center pt-5">
            <div className="flex items-center w-3/5">
              <hr className="flex-1 border-t-2 border-gray-300" />
              <span className="mx-4 text-lg font-semibold text-gray-600">
                oder
              </span>
              <hr className="flex-1 border-t-2 border-gray-300" />
            </div>
          </div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-4 max-w-xl mx-auto p-8 bg-base-100 rounded-lg"
          >
            <div className="form-control">
              <label htmlFor="name" className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="input input-bordered w-full bg-amber-50"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="phone" className="label">
                <span className="label-text">Telefonnummer</span>
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="input input-bordered w-full bg-amber-50"
              />
            </div>
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text">E-Mail</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="input input-bordered w-full bg-amber-50"
              />
            </div>
            <div className="form-control">
              <label htmlFor="idea" className="label">
                <span className="label-text">Idee</span>
              </label>
              <textarea
                id="idea"
                name="idea"
                value={formData.idea}
                onChange={handleInputChange}
                className="textarea textarea-bordered w-full bg-amber-50"
                required
                maxLength={2000}
              ></textarea>
            </div>
            <div className="flex items-center col-span-2 mt-4">
              <input
                type="checkbox"
                id="dataProcessing"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="mr-2 transform -translate-y-5 md:-translate-y-3  h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <div className="">
                <label htmlFor="dataProcessing" className="text-gray-700 mt-6">
                  Ich bin damit einverstanden, dass meine personenbezogenen
                  Daten verarbeitet werden.
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-full mt-4">
              Absenden
            </button>
            {formError && <p className="text-red-500 mt-3 ml-2">{formError}</p>}
          </form>
        </div>
        <Toaster />
      </section>
    </div>
  );
};

export default ContactForm;
