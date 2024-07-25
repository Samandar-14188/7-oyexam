import Modal from "../../components/Modal";
// import RadioInput from "../RadioIput";
// import Shape from "../../../public/Shape.png";
// import Input from "../input";
export default function Registr() {
  return (
    <div className="Checkout">
    {/* <h1>CHECKOUT</h1>
    <p>Billing Details</p>
    <div className="Input-wrapper">
      <Input
        type="text"
        label="Name"
        className="text-input"
        placeholder="Alexei Ward"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="email"
        label="Email Address"
        className="text-input"
        placeholder="alexei@mail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className="Input-wrapper">
      <Input
        type="number"
        label="Phone Number"
        className="text-input"
        placeholder="+1 202-555-0136"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
    </div>
    <p>Shipping Info</p>
    <div className="Input-addres">
      <Input
        type="number"
        label="Address"
        className="text-input"
        placeholder="1137 Williams Avenue"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </div>
    <div className="Input-wrapper">
      <Input
        type="number"
        label="ZIP Code"
        className="text-input"
        placeholder="10001"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
      />
      <Input
        type="text"
        label="City"
        className="text-input"
        placeholder="New York"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </div>
    <div className="Input-wrapper">
      <Input
        type="text"
        label="Country"
        className="text-input"
        placeholder="United States"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
    </div>
    <p>Payment Details</p>
    <div className="RadioInput">
      <span>Payment Method</span>
      <RadioInput
        options={options}
        onChange={(value) => setSelectedPaymentOption(value)}
      />
    </div>
    <div className="Input-wrapper">
      <Input
        type="text"
        label="e-Money Number"
        className="text-input"
        placeholder="238521993"
        value={eMoneyNumber}
        onChange={(e) => setEMoneyNumber(e.target.value)}
      />
      <Input
        type="text"
        label="e-Money PIN"
        className="text-input"
        placeholder="6891"
        value={eMoneyPin}
        onChange={(e) => setEMoneyPin(e.target.value)}
      />
    </div>
    <div className="Checkout-info">
      <img src={Shape} alt="rasm" />
      <p>
        The ‘Cash on Delivery’ option enables you to pay in cash when our
        delivery courier arrives at your residence. Just make sure your
        address is correct so that your order will not be canceled.
      </p>
    </div>
    <Modal text="CONTINUE" onClick={handleClick} /> */}
    <Modal />
  </div>  )
}
