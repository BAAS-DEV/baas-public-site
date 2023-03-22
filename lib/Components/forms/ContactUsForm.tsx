"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/navigation";

import ServicesSelection from "./ServicesSelection";
import baasAxios from "../../Utils/axios";

const schema = yup.object().shape({
  preferredName: yup.string().required(),
  contact: yup.string().required(),
  question: yup.string().required(),
});

export default function ContactUsForm() {
  return (
    <>
      <div className=" mx-auto min-h-screen ">
        <div className="justify-center  ">
          <div className="grid grid-cols-5 min-h-screen">
            <div className="col-span-5 sm:col-span-5 md:col-span-3 lg:col-span-2">
              <Image
                loader={() => "/png/ad1.png"}
                height={50}
                width={50}
                className={"w-full mx-auto h-full rounded-l-lg"}
                src={"/png/ad1.png"}
                alt={""}
              />
            </div>
            <div className="w-full mt-24 col-span-5 sm:col-span-5 md:col-span-2 lg:col-span-3 mx-auto px-8">
              <h3 className="text-center">Thank You for Your Interest</h3>
              <p className="display text-center text-gray-500">
                We are very grateful for you taking the time to send us a
                message
              </p>
              <hr className="mt-8" />
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Form = () => {
  const [wasChecked, setChecked] = useState<string[]>([]);
  const [pageLocalState, setPageLocalState] = useState<ServiceLocalState[]>([]);
  const [captcha, setCaptcha] = useState<String | null>(null);
  const [showloading, setShowLoading] = useState<boolean>(false);
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCheckbox = (value: string, checked: boolean) => {
    if (checked) {
      setChecked([...wasChecked, value]);
    } else {
      setChecked(wasChecked.filter((item) => item !== value));
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  interface ServiceLocalState {
    id: number;
    attributes: {
      createdAt: Date;
      updatedAt: Date;
      name: string;
      image: string;
      Description: string;
      slug?: string;
    };
  }
  function onChange(value: string) {
    console.log("Captcha value:", value);
    setCaptcha(value);
  }
  const loadCategories = async () => {
    await baasAxios
      .get("/service-categories")
      .then((res) => {
        console.log(res.data);
        setPageLocalState(res.data.data);
        // setAllCategories(res.data.data);
        // setCategoriesToAllSelected(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = async (data: any) => {
    setShowLoading(true);
    console.log(data);
    console.log(wasChecked);

    console.log(errors);
    if (Object.keys(errors).length === 0) {
      try {
        await baasAxios
          .post("/form-submissions", {
            contact: data.contact,
            name: data.preferredName,
            question: data.question,
            wasChecked,
          })
          .then((res) => {
            router.push("/success");
          })
          .catch((err) => {
            console.log(err);
            setShowLoading(false);
          });
      } catch (err) {
        setShowLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
      <div>
        <label
          htmlFor="preferredName"
          className="block text-sm font-medium text-gray-700"
        >
          Preferred name
        </label>
        <div className="mt-1">
          <Controller
            control={control}
            name="preferredName"
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                id="preferredName"
                type="text"
                autoComplete="off"
                placeholder="How should we refer to you?"
                className="shadow-sm px-4  py-2  focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-500 rounded-md"
              />
            )}
          />
        </div>
        {errors.preferredName && (
          <span className="text-red-500 text-sm">This field is required</span>
        )}
      </div>
      <div>
        <label
          htmlFor="preferredName"
          className="block text-sm font-medium text-gray-700"
        >
          How can we contact you?
        </label>
        <div className="mt-1">
          <Controller
            control={control}
            name="contact"
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                id="contact"
                type="text"
                placeholder="example@email.com, 555-555-5555, etc..."
                autoComplete="off"
                className="px-4  py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-500 rounded-md"
              />
            )}
          />
        </div>
        {errors.contact && (
          <span className="text-red-500 text-sm">This field is required</span>
        )}
      </div>
      <div>
        <label
          htmlFor="question"
          className="block text-sm font-medium text-gray-700"
        >
          What can we help you with?
        </label>
        <div className="mt-1">
          <Controller
            control={control}
            name="question"
            defaultValue=""
            render={({ field }) => (
              <textarea
                {...field}
                id="question"
                rows={3}
                placeholder={
                  "Tell us everything you'd like. The more detail, the more specific we can be in our responses."
                }
                className="shadow-sm px-4 py-2 border border-gray-500 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm rounded-md"
              ></textarea>
            )}
          />
        </div>
        {errors.question && (
          <span className="text-red-500 text-sm">This field is required</span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Are there any service categories you feel are relevant, or are curious
          about?
        </label>
        <div className="mt-2 space-y-4">
          <div className="grid grid-cols-3 w-full">
            {pageLocalState.map((item, i) => (
              <>
                <div key={i} className="flex items-center">
                  <input
                    id={item.attributes.name}
                    name="interests"
                    type="checkbox"
                    value={item.attributes.name}
                    onChange={(e) =>
                      handleCheckbox(item.attributes.name, e.target.checked)
                    }
                    className="checkbox checkbox-primary text-left"
                  />
                  <label
                    htmlFor={item.attributes.name}
                    className="ml-3 text-sm text-gray-600"
                  >
                    {item.attributes.name}
                  </label>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div>
        {showloading ? (
          <>Loading...</>
        ) : (
          <button
            type="submit"
            className={`
          w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          >
            Submit
          </button>
        )}
      </div>
    </form>
  );
};
