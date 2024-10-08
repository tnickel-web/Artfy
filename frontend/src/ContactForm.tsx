import emailjs from "@emailjs/browser";
import React, { createRef, FormEvent, LegacyRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

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

    const formRef: LegacyRef<HTMLFormElement> = createRef();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formRef.current && isChecked) {
            emailjs
                .sendForm(
                    "service_csedk0c",
                    "template_q3y24q7",
                    formRef.current,
                    "nkysHHR-G5zFYgiiN",
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
                    (_) => {
                        toast.error(
                            "Email konnte nicht versendet werden! Schick mir doch direkt eine Email an T.akova@artfy-hb.de.",
                            {
                                style: {
                                    background: "bg-base-300", // Beispiel für Tailwind-Farbe
                                    color: "#000",
                                    borderRadius: "0.5rem",
                                },
                                duration: 10000,
                            },
                        );
                    },
                );
        } else {
            toast.error("Bitte stimmen Sie der Datenverarbeitung zu.");
        }
    };

    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
                <div className="max-w-full mx-24 p-8 bg-base-100 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold mb-6 text-center">
                        Kontaktformular
                    </h2>
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="grid grid-cols-2 gap-4 max-w-lg mx-auto p-8 bg-base-100 shadow-lg rounded-lg"
                    >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="input input-bordered w-full bg-amber-50"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    Telefonnummer
                                </span>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="input input-bordered w-full bg-amber-50"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">E-Mail</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="input input-bordered w-full bg-amber-50"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Idee</span>
                            </label>
                            <textarea
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
                                className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label
                                htmlFor="dataProcessing"
                                className="text-gray-700 mt-6"
                            >
                                Ich bin damit einverstanden, dass meine
                                personenbezogenen Daten verarbeitet werden.
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary w-full mt-4"
                        >
                            Absenden
                        </button>
                    </form>
                </div>
                <Toaster />
            </section>
        </div>
    );
};

export default ContactForm;
