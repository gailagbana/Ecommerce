import "../index.css";
import { Button, TextInput } from "../../components";
import { useState, useRef } from "react";
import axios from "axios";

const isNotEmptyAndMin = (value) => value.trim() >= 3;
const isFiveChar = (value) => value.trim() === 5;
const isElevenChar = (value) => value.trim() === 5;

const Checkout = ({ orderedInventory }) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    address: true,
    city: true,
    country: true,
    postal: true,
    phoneNumber: true,
  });

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();
  const countryInputRef = useRef();
  const phoneNumberInputRef = useRef();

  const paymentHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.currrent.value;
    const enteredAddress = addressInputRef.currrent.value;
    const enteredPostal = postalInputRef.currrent.value;
    const enteredCity = cityInputRef.currrent.value;
    const enteredCountry = countryInputRef.currrent.value;
    const enteredPhoneNumber = phoneNumberInputRef.currrent.value;

    const validName = isNotEmptyAndMin(enteredName);
    const validAddress = isNotEmptyAndMin(enteredAddress);
    const validCity = isNotEmptyAndMin(enteredCity);
    const validCountry = isNotEmptyAndMin(enteredCountry);
    const validPostal = isFiveChar(enteredPostal);
    const validPhoneNumber = isElevenChar(enteredPhoneNumber);

    setFormValidity({
      name: validName,
      address: validAddress,
      city: validCity,
      country: validCountry,
      postal: validPostal,
      phoneNumber: validPhoneNumber,
    });

    const formIsValid =
      validName &&
      validCity &&
      validAddress &&
      validCountry &&
      validPostal &&
      validPhoneNumber;

    if (formIsValid) {
      const checkout = async () => {
        try {
          await axios({
            method: "POST",
            body: JSON.stringify({
              user: formValidity,
              orderedInventory: orderedInventory,
            }),
          });
        } catch (error) {
          console.log(error);
        }
      };
      checkout(orderedInventory);
    }
  };

  return (
    <div className="layout" onSubmit={paymentHandler}>
      <form className="form">
        <TextInput
          width={"100%"}
          placeholder="Name"
          value="name"
          htmlFor="name"
          ref={nameInputRef}
        >
          {!formValidity.name && (
            <p className="invalid">
              Please Enter a valid Name ( At least 3 Characters).
            </p>
          )}
        </TextInput>

        <TextInput
          width={"100%"}
          placeholder="Phone Number"
          value="number"
          htmlFor="phone number"
          ref={phoneNumberInputRef}
        >
          {!formValidity.phoneNumber && (
            <p className="invalid">
              Please Enter a valid phone number ( At least 3 Characters).
            </p>
          )}
        </TextInput>

        <TextInput
          width={"100%"}
          placeholder="Shipping Address"
          value="street"
          htmlFor="street"
          ref={addressInputRef}
        >
          {!formValidity.address && (
            <p className="invalid">
              Please Enter a valid address ( At least 12 Characters).
            </p>
          )}
        </TextInput>

        <TextInput
          width={"100%"}
          placeholder="Postal Code"
          value="postal"
          htmlFor="postal"
          ref={postalInputRef}
        >
          {!formValidity.postal && (
            <p className="invalid">
              Please Enter a valid postal code (5 Characters Long).
            </p>
          )}
        </TextInput>

        <TextInput
          width={"100%"}
          placeholder="City"
          value="city"
          htmlFor="city"
          ref={cityInputRef}
        >
          {!formValidity.city && (
            <p className="invalid">
              Please Enter a valid city ( At least 3 Characters).
            </p>
          )}
        </TextInput>

        <TextInput
          width={"100%"}
          placeholder="Country"
          value="country"
          htmlFor="country"
          ref={countryInputRef}
        >
          {!formValidity.country && (
            <p className="invalid">
              Please Enter a valid country ( At least 3 Characters).
            </p>
          )}
        </TextInput>

        <div className="submit__button">
          <Button text="Payment" />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
