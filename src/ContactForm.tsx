import React, {
    useState,
    ChangeEvent,
    FormEvent,
    useRef,
    createRef,
    LegacyRef,
} from "react";
import emailjs from "@emailjs/browser";

interface FormData {
    name: string;
    phone: string;
    email: string;
    idea: string;
    images: FileList | null;
}

const ContactForm: React.FC = () => {
    const formRef: LegacyRef<HTMLFormElement> = createRef();
    const [formData, setFormData] = useState<FormData>({
        name: "",
        phone: "",
        email: "",
        idea: "",
        images: null,
    });

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, images: e.target.files });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = new FormData();
        form.append("name", formData.name);
        form.append("phone", formData.phone);
        form.append("email", formData.email);
        form.append("idea", formData.idea);

        if (formData.images) {
            Array.from(formData.images).forEach((image) => {
                form.append("images", image);
            });
        }
        if (formRef.current) {
            emailjs
                .sendForm(
                    "YOUR_SERVICE_ID", // Ersetze mit deinem Service ID
                    "YOUR_TEMPLATE_ID", // Ersetze mit deinem Template ID
                    formRef.current,
                    "YOUR_USER_ID", // Ersetze mit deinem User ID
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
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4 max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg"
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
                    className="input input-bordered w-full"
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
                    className="input input-bordered w-full"
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
                    className="input input-bordered w-full"
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
                    className="textarea textarea-bordered w-full"
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

            <button type="submit" className="btn btn-primary w-full mt-4">
                Absenden
            </button>
        </form>
    );
};

export default ContactForm;
