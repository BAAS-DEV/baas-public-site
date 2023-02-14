"use client";

import Link from "next/link";
import { useState } from "react";
import baasAxios from "../Utils/axios";

interface TextInput {
  text: string;
  placeholder: string;
  type?: string;
}
let phoneQuestions: TextInput[] = [
  {
    text: "Your Name:",
    placeholder: "Your Name",
  },
  {
    text: "Phone Number:",
    placeholder: "1-800-555-1234",
    type: "tel",
  },
];

let emailQuestions: TextInput[] = [
  {
    text: "Your Name:",
    placeholder: "Your Name",
  },
  {
    text: "Contact Email:",
    placeholder: "example@email.com",
    type: "email",
  },
];

function TextInput({ data, handleInput }: any) {
  let type = "";
  if (data.type) {
    type = data.type;
  }
  if (!data.type) {
    type = "name";
  }
  return (
    <div>
      <label className="label">
        <span className="label-text">{data.text}</span>
        {/* <span className="label-text-alt">Alt label</span> */}
      </label>
      <input
        type={data.type ? data.type : "text"}
        placeholder={data.placeholder}
        className="input input-bordered w-full max-w-xs"
        onChange={(e) => handleInput(type, e.target.value)}
      />
      {/* <label className="label">
        <span className="label-text-alt">Alt label</span>
        <span className="label-text-alt">Alt label</span>
      </label> */}
    </div>
  );
}
function EmailForm(props: TextInput) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleInput(key: string, value: string) {
    if (key == "email") {
      setEmail(value);
    }
    if (key == "name") {
      setName(value);
    }
    console.log(name, email);
  }

  async function handleFormSubmit() {
    const data = {
      name: name,
      data: email,
    };

    let b = JSON.stringify(data);
    try {
      const response = await fetch("/form-submits", {
        method: "POST",
        body: JSON.stringify({ data }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res = await response.json();
      if (res) {
      }
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      {emailQuestions.map((item, i) => {
        return <TextInput key={i} data={item} handleInput={handleInput} />;
      })}
      <Link href="/success">
        <button className="btn btn-info mt-8" onClick={handleFormSubmit}>
          Submit!
        </button>
      </Link>
    </>
  );
}

function PhoneForm(props: TextInput) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function handleInput(key: string, value: string) {
    if (key == "tel") {
      setPhone(value);
    }
    if (key == "name") {
      setName(value);
    }
    console.log(name, phone);
  }
  async function handleFormSubmit() {
    const data = {
      name: name,
      data: phone,
    };

    let b = JSON.stringify(data);
    try {
      const response = await baasAxios.post("/form-submits", {
        method: "POST",
        body: JSON.stringify({ data }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res = await response.data;
      if (res) {
      }
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      {phoneQuestions.map((item, i) => {
        return <TextInput key={i} data={item} handleInput={handleInput} />;
      })}
      <Link href="/success">
        <button className="btn btn-info mt-8" onClick={handleFormSubmit}>
          Submit!
        </button>
      </Link>
    </>
  );
}

export default function ContactForm() {
  const [option, setOption] = useState(0);
  const [formData, setFormData] = useState({});

  return (
    <div className="form-control w-full ">
      <h2 className="text-info text-2xl pb-4 text-center px-4">
        How do you prefer we contact you?
      </h2>
      <div className="btn-group mx-auto btn-group-horizontal">
        <button
          className={`btn ${option === 0 ? "btn-active" : ""}`}
          onClick={() => setOption(0)}
        >
          Email
        </button>
        <button
          className={`btn ${option === 1 ? "btn-active" : ""}`}
          onClick={() => setOption(1)}
        >
          Phone
        </button>
      </div>
      <div className="divider"></div>

      <div className="px-2">
        {option === 0 ? (
          <EmailForm text={""} placeholder={""} />
        ) : (
          <PhoneForm text={""} placeholder={""} />
        )}
      </div>
    </div>
  );
}
