import { useState } from "react";

interface AgeFormProps {
  onSubmit: (age: number) => void;
}

function AgeForm({ onSubmit }: AgeFormProps) {
  const [age, setAge] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (age < 18) {
      alert("You must be at least 18 years old.");
      return;
    }

    onSubmit(age);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Enter your age"
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default AgeForm;