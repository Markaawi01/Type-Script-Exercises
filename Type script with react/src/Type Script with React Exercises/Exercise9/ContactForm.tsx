import { useState } from "react";

interface ContactData {
  name: string;
  email: string;
}

interface ContactFormProps {
  onSubmit: (data: ContactData) => void;
}

function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactData>({
    name: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.name}
        onChange={(e) =>
          setFormData({
            ...formData,
            name: e.target.value,
          })
        }
        placeholder="Enter your name"
      />

      <input
        type="email"
        value={formData.email}
        onChange={(e) =>
          setFormData({
            ...formData,
            email: e.target.value,
          })
        }
        placeholder="Enter your email"
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;