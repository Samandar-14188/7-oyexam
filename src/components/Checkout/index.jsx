import React, { useState } from 'react';
import RadioInput from '../../components/RadioInput';
import Input from '../../components/Input';
import Dialog from '@mui/material/Dialog';
import ButtonModal from '../ButtonModal'; 
import Rasm from '../../assets/rasm2.png'; 

const Checkout = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [eMoneyNumber, setEMoneyNumber] = useState('');
  const [eMoneyPin, setEMoneyPin] = useState('');
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('');
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value = '') => {
    setOpen(false);
    setIsCheckboxChecked(false); 
  };

  const validateForm = () => {
    if (!name.trim()) {
      alert("Name is required");
      return false;
    }

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      alert("Invalid email format");
      return false;
    }

    if (!phoneNumber.trim()) {
      alert("Phone Number is required");
      return false;
    }

    if (!address.trim()) {
      alert("Address is required");
      return false;
    }

    if (!zipCode.trim()) {
      alert("ZIP Code is required");
      return false;
    }

    if (!city.trim()) {
      alert("City is required");
      return false;
    }

    if (!country.trim()) {
      alert("Country is required");
      return false;
    }

    if (!selectedPaymentOption.trim()) {
      alert("Payment Method is required");
      return false;
    }

    if (selectedPaymentOption === 'e-Money' && (!eMoneyNumber.trim() || !eMoneyPin.trim())) {
      alert("e-Money Number and PIN are required for e-Money payment");
      return false;
    }

    return true;
  };

  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
    if (event.target.checked) {
      if (validateForm()) {
        handleClickOpen();
      } else {
        setIsCheckboxChecked(false); 
      }
    }
  };

  return (
    <div className="Checkout">
      <h1>CHECKOUT</h1>
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
          type="text"
          label="Phone Number"
          className="text-input"
          placeholder="+1 202-555-0136"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <p>Shipping Info</p>
      <div className="Input-wrapper">
        <Input
          type="text"
          label="Address"
          className="text-input"
          placeholder="1137 Williams Avenue"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="Input-wrapper">
        <Input
          type="text"
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
        <div className="Radio-container">
          <RadioInput
            label="e-Money"
            checked={selectedPaymentOption === 'e-Money'}
            onChange={() => setSelectedPaymentOption('e-Money')}
          />
          <RadioInput
            label="Cash on Delivery"
            checked={selectedPaymentOption === 'Cash on Delivery'}
            onChange={() => setSelectedPaymentOption('Cash on Delivery')}
          />
        </div>
      </div>
      {selectedPaymentOption === 'e-Money' && (
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
      )}
      <div className="Checkout-info">
        <label>
          <input
            type="checkbox"
            checked={isCheckboxChecked}
            onChange={handleCheckboxChange}
          />
          <span>I agree to the terms and conditions</span>
        </label>
      </div>
      {open && (
        <Dialog open={open} onClose={() => handleClose()}>
          <div className="Modal-dialog">
            <h1>THANK YOU FOR YOUR ORDER</h1>
            <p>You will receive an email confirmation shortly.</p>
            <div className="Product-main">
              <div className="modal-wrapper">
                <div className="Product-card">
                  <div className="cardModal">
                    <img src={Rasm} alt="Product" />
                    <div className="cardModal-info">
                      <h6>Product Name</h6>
                      <p>$34</p>
                    </div>
                    <span>2x</span>
                  </div>
                </div>
              </div>
              <div className="modal-wrapper black">
                GRAND TOTAL
                <p>$32</p>
              </div>
            </div>
            <ButtonModal />
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default Checkout;
