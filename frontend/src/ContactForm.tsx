import emailjs from "@emailjs/browser";
import React, {
    ChangeEvent,
    createRef,
    FormEvent,
    LegacyRef,
    useState,
} from "react";

interface CustomFormData extends FormData {
    name: string;
    phone: string;
    email: string;
    idea: string;
    image: String;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<CustomFormData>({
        ...new FormData(),

        name: "",
        phone: "",
        email: "",
        idea: "",
        image: "",
    });

    const formRef: LegacyRef<HTMLFormElement> = createRef();

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        Array.from(e.target.files ?? []).map(async (file: File) => {
            if (file.size <= 50 * 1024) {
                setFormData({
                    ...formData,
                    image: e.target.files
                        ? await fileToBase64(e.target.files[0])
                        : "",
                });
            } else {
                alert(
                    `Datei ${file.name} wurde nicht hinzugefügt, da die Gesamtgröße von 50kb überschritten würde.`,
                );
            }
        });
    };

    function fileToBase64(file: File): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                resolve((reader?.result as string).split(",")[1]);
            };
            reader.onerror = (error) => {
                reject(error);
            };
            reader.readAsDataURL(file);
        });
    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formRef.current) {
            emailjs
                .sendForm(
                    "service_csedk0c", // Ersetze mit deinem Service ID
                    "template_q3y24q7", // Ersetze mit deinem Template ID
                    formRef.current,
                    "nkysHHR-G5zFYgiiN", // Ersetze mit deinem User ID
                )
                .then(
                    (result) => {
                        console.log("Email successfully sent!", result.text);
                    },
                    (error) => {
                        console.error(
                            "There was an error sending the email:",
                            error.text,
                        );
                    },
                );
        }
    };

    return (
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
                            <span className="label-text">Telefonnummer</span>
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="input input-bordered w-full  bg-amber-50"
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
                            className="input input-bordered w-full  bg-amber-50"
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
                        ></textarea>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Bilder hochladen</span>
                        </label>
                        <input
                            type="file"
                            name="images"
                            onChange={handleFileChange}
                            className="file-input w-full"
                            multiple
                            accept="image/*"
                        />
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <button
                        type="submit"
                        className="btn btn-primary w-full mt-4"
                    >
                        Absenden
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
