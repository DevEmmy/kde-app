import { FaRegStar } from "react-icons/fa";
import kde_blackBg from "../Navbar/Image/kde_whiteBg.png";
import { Form, Formik, useFormik } from "formik";
import MainButton from "../buttons/MainButton";
import { Link, useNavigate, useParams } from "react-router-dom";
import daycation from "../Categories/LuxuryService/images/pics4.webp";
import { useState, useEffect } from "react";
import Return from "../Navbar/Return";
import FormikControl from "../formik/FormikControl";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  setDaycation,
  setLuxuryServiceType,
} from "../../application/store/actions/user";
import { MdOutlineRemoveCircle } from "react-icons/md";
import InputLayout from "../inputs/InputLayout";
import { InputField } from "../inputs/MainInput";
import { RadioField } from "../inputs/RadioInput";

const WeekendEscapePage = () => {
  const { id } = useParams();
  const [guestsName, setGuestsName] = useState("");
  const [guestsEmail, setGuestEmail] = useState("");
  const [items, setItems] = useState([]);
  const [price, setPrice] = useState(0);
  const plan = useSelector((state) => state.user.status);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  const handleRemove = (index) => {
    const list = [...items];
    list.splice(index, 1);
    setItems(list);
  };

  useEffect(() => {
    if (String(id) === "silver") {
      setPrice("500,000");
    } else if (String(id) === "diamond") {
      setPrice("750,000");
    } else if (String(id) === "platinum") {
      setPrice("1,000,000");
    }
  }, [id]);

  const initialValues = {
    departureDate: "",
    numberOfGuest: "",
    contact: "",
    arrivalDate: "",
    emergencyNumber: "",
    emergencyContactName: "",
    drinkingPreference: "",
    mealPreference: "",
    message: "",
    spa: "",
    plan: plan,
    price: 0,
  };

  const guestDetailsInitialValues = {
    guestsEmail: "",
    guestsName: "",
  };

  const drinkingPreferences = [
    { key: "", value: "" },
    { key: "Alcholic", value: "Alcholic" },
    { key: "Non-Alcholic", value: "Non-Alcholic" },
  ];

  const mealPreferences = [
    { key: "", value: "" },
    { key: "Vegetarian", value: "Vegetarian" },
    { key: "Non-Vegetarian", value: "Non-Vegetarian" },
  ];

  const options = [
    { value: "mobileSession", label: "Mobile Session" },
    { value: "walkInSession", label: "Walk In Session" },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const displayInput = [
    {
      label: "Number of Guest (s)",
      name: "numberOfGuest",
      control: "others",
      type: "number",
    },
    {
      label: "Contact",
      name: "contact",
      control: "others",
      placeholder: "+234",
    },
    {
      label: "Departure Date",
      name: "departureDate",
      control: "others",
      type: "date",
    },
    {
      label: "Arrival Date",
      name: "arrivalDate",
      type: "date",
      control: "others",
    },
    {
      label: "Emergency Number",
      name: "emergencyNumber",
      control: "others",
      placeholder: "+234",
    },
    {
      label: "Emergency Contact Name",
      name: "emergencyContactName",
      control: "others",
      placeholder: "+234",
    },
    {
      label: "Drinking Preference",
      name: "drinkingPreference",
      control: "select",
      options: drinkingPreferences,
    },
    {
      label: "Meal Preference",
      name: "mealPreference",
      control: "select",
      options: mealPreferences,
    },
    {
      label: "Message",
      name: "message",
      control: "textarea2",
      placeholder: "kindly drop personalised request here",
    },
  ];

  const guestValidationSchema = Yup.object({
    guestsName: Yup.string().required("Guest Name is required"),
    guestsEmail: Yup.string()
      .email("Must be a valid email")
      .required("E-mail is required"),
  });

  const validationSchema = Yup.object().shape({
    plan: Yup.string().oneOf(["silver", "diamond", "platinum"]),
    numberOfGuest: Yup.number()
      .when("plan", {
        is: "silver",
        then: Yup.number().max(2),
      })
      .when("plan", {
        is: "diamond",
        then: Yup.number().max(4),
      })
      .when("plan", {
        is: "platinum",
        then: Yup.number().max(6),
      })
      .required("Number of guest required"),
    emergencyNumber: Yup.string().required("Emergency Number is required"),
    contact: Yup.string().required("Contact is required"),
    emergencyContactName: Yup.string().required(
      "Emergency Contact Name is required"
    ),
    departureDate: Yup.string().required("Departure date is required"),
    arrivalDate: Yup.string().required("Arrival is required"),
    drinkingPreference: Yup.string().required(
      "Drinking preference is required"
    ),
    mealPreference: Yup.string().required("Meal preference is required"),
    // spa: Yup.string().required("Spa session is required"),
  });

  const createDaycation = (values) => {
    const daycation = {
      guestsEmail: items.map((i) => i.guestsEmail),
      guestsName: items.map((i) => i.guestsName),
      departureDate: values.departureDate,
      arrivalDate: values.arrivalDate,
      numberOfGuest: values.numberOfGuest,
      emergencyNumber: values.emergencyNumber,
      emergencyContactName: values.emergencyContactName,
      contact: values.contact,
      drinkingPreference: values.drinkingPreference,
      mealPreference: values.mealPreference,
      spa: selectedOption,
      plan: plan,
      message: values.message,
      price:
        (plan === "silver" && 500000) ||
        (plan === "diamond" && 750000) ||
        (plan === "platinum" && 1000000),
    };
    const payload = {
      data: daycation,
    };
    dispatch(setLuxuryServiceType("daycation"));
    dispatch(setDaycation(payload));
    navigate("/luxury-service/checkout");
  };

  const onSubmit = () => {
    setItems([...items, { guestsName, guestsEmail }]);
    setGuestsName("");
    setGuestEmail("");
  };

  const formik = useFormik({
    guestDetailsInitialValues,
    onSubmit,
    guestValidationSchema,
  });


  return (
    <>
      <Return />
      <div className="w-full h-[100vh] bg-white md:py-8 md:px-24 py-3 px-5 relative">
        <div className="h-[95%]">
          <div className="w-[70px] h-[auto] flex flex-col">
            <img
              src={kde_blackBg}
              className="w-[100%] h-[100%] cursor-pointer"
              alt="brandlogo"
            />
            <p className="text-[10px] whitespace-nowrap font-semibold ml-1 text-[#d4d72eea] bg-gradient-to-r from-[#fcf8bd]-500 to-[#b9a362]-500">
              Kind David Logo
            </p>
          </div>

          <div className="flex gap-2 md:gap-5 mt-5 items-center">
            <p className="font-semibold text-lg md:text-2xl">
              Daycation &#8358;{price}{" "}
            </p>
          </div>

          <div className="mt-3 w-[100%] md:w-[60%] text-[12px] font-medium tracking-wide text-neutral-color">
            <p>
              <span className="text-black text-[13px] mr-1 font-bold">
                Experience:
              </span>
              Welcome to King David Elites! Our daycation experience is designed
              to provide you with the perfect blend of relaxation and
              exploration.
            </p>
            <br />
            <p>
              Our chauffeurs will pick you up from your preferred location and
              bring you to our luxurious lodge. Our friendly staff will give you
              a warm welcome and help you check-in to your elegantly decorated
              guest room, which is equipped with modern furnishings and high-end
              finishes for your comfort.
            </p>
            <br />
            <p>
              During your stay, you can enjoy various amenities, such as a
              rejuvenating spa treatment, a refreshing dip in the outdoor pool,
              or fun gaming adventures in the city's upper echelon spots. You
              will be served with fine dishes three times during your 24-hour
              stay, and also get to unwind and sip some sparkling wine or
              champagne on a one-hour boat cruise.
            </p>
            <br />
            <p>
              Our concierge team is always available to help you plan your
              itinerary and explore the city's top attractions, including fine
              dining restaurants, luxury shopping boutiques, and cultural
              landmarks. Come and experience the King David Elites daycation for
              a memorable and indulgent getaway that you will cherish for years
              to come.
            </p>
          </div>

          <form onSubmit={formik.handleSubmit} className="mt-6">
            <div>
              {items.map((item, index) => (
                <div>
                  {item.guestsName && item.guestsEmail != "" && (
                    <div className="flex gap-5 items-center" key={index}>
                      <p>
                        {item.guestsName} | {item.guestsEmail}
                      </p>
                      <button
                        type="button"
                        className="cursor-pointer"
                        onClick={() => handleRemove(index)}
                      >
                        <MdOutlineRemoveCircle color="red" />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex md:flex-row flex-col gap-[2em] md:w-[50%] justify-between">
              <InputLayout label="Names of Passenger(s)" name="guestsName">
                <InputField
                  value={guestsName}
                  name="guestsName"
                  type="text"
                  onChange={(e) => {
                    if (e.target.name === "guestsName") {
                      setGuestsName(e.target.value);
                    }
                  }}
                  width="50%"
                  placeholder="e.g Emma Olaosebikan"
                />
                {/* <div className=" text-[red] opacity-40">
                                    {
                                        validationError && <p>{validationError}</p>
                                    }
                                </div> */}
              </InputLayout>

              <InputLayout
                label="Email Address Of Passengers(s)"
                name="guestsEmail"
              >
                <InputField
                  value={guestsEmail}
                  name="guestsEmail"
                  type="text"
                  onChange={(e) => {
                    if (e.target.name === "guestsEmail") {
                      setGuestEmail(e.target.value);
                    }
                  }}
                  width="100px"
                />
              </InputLayout>
            </div>

            <MainButton
              width="100px"
              marginTop="1em"
              type="button"
              onClick={(e) => onSubmit(e)}
            >
              Add Guest
            </MainButton>
          </form>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={createDaycation}
            validateOnChange={false}
          >
            {(formik) => (
              <Form>
                <div className="grid gap-6 pt-4 md:justify-center md:gap-x-[8rem] md:gap-y-8 md:grid-cols-2 md:w-[45%] w-full">
                  {displayInput.map((d, index) => (
                    <FormikControl
                      key={index * 0.5}
                      label={d.label}
                      name={d.name}
                      type={d?.type}
                      placeholder={d.placeholder}
                      options={d?.options}
                      control={d.control}
                    />
                  ))}
                </div>

                <div name="spaSession" className="flex gap-[4.5em]">
                  {options.map((label, key) => {
                    return (
                      <div className="font-semibold text-[13px]" key={key}>
                        {label.label}
                      </div>
                    );
                  })}
                </div>
                <div className="md:w-[20%] mb-5">
                  <InputLayout name={options.map((i) => i.value)}>
                    <div className="flex gap-[9.5em]">
                      {options.map((option) => (
                        <RadioField
                          type="radio"
                          id={option.value}
                          name={option.value}
                          value={option.value}
                          checked={selectedOption === option.value}
                          onChange={(e) => handleOptionChange(e.target.name)}
                        />
                      ))}
                    </div>
                  </InputLayout>
                </div>

                <div className="flex gap-2 items-center md:gap-4 font-semibold mt-6">
                  <input
                    type="checkbox"
                    className="check cursor-pointer"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                  />
                  <p className="term text-[12px]">
                    I have read and agreed to the{" "}
                    <Link to="/terms">
                      <span className="text-[#2301F3]">
                        KDE's Terms and Condition
                      </span>
                    </Link>
                  </p>
                </div>

                <div className="flex my-[30px] gap-[10px]">
                  <MainButton
                    className={` ${
                      !isChecked ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
                    disabled={!isChecked}
                    type="submit"
                  >
                    Submit
                  </MainButton>
                </div>
              </Form>
            )}
          </Formik>

          <div className="w-[300px] h-[100vh] fixed top-0 right-36 bottom-0 md:block hidden">
            <img
              src={daycation}
              className="w-[100%] h-[100%] rounded-md"
              alt="exclusiveEventLogo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WeekendEscapePage;