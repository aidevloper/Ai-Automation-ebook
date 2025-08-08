import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const PaymentFormSection = ({ timeLeft }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');

  // Load Cashfree SDK
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.cashfree.com/js/ui/2.0.0/cashfree.prod.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // First, create order on your backend
      const orderResponse = await fetch('http://localhost:4028/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 999,
          currency: 'INR',
          customerDetails: formData,
          orderId: `order_${Date.now()}`,
          orderNote: 'YouTube Automation eBook'
        })
      });

      const orderData = await orderResponse.json();

      if (orderData.success) {
        // Initialize Cashfree payment
        const cashfree = new window.Cashfree({
          mode: "sandbox" // Change to "production" for live
        });

        const paymentConfig = {
          orderToken: orderData.orderToken,
          orderNumber: orderData.orderId,
          appId: process.env.REACT_APP_CASHFREE_APP_ID,
          orderAmount: 999,
          orderCurrency: "INR",
          customerName: `${formData.firstName} ${formData.lastName}`,
          customerEmail: formData.email,
          customerPhone: formData.phone,
          hideOrderId: true,
          style: {
            backgroundColor: "#ffffff",
            color: "#11385b",
            fontFamily: "Lato",
            fontSize: "14px",
            errorColor: "#ff0000",
            theme: "light"
          }
        };

        cashfree.init(paymentConfig).then(function(response) {
          if (response.transaction.status === "SUCCESS") {
            // Payment successful
            window.location.href = `/payment-success?name=${encodeURIComponent(formData.firstName)}&transaction_id=${response.transaction.orderId}`;
          } else {
            // Payment failed
            alert('Payment failed. Please try again.');
            setIsProcessing(false);
          }
        }).catch(function(error) {
          console.error('Payment error:', error);
          alert('Payment error. Please try again.');
          setIsProcessing(false);
        });
      } else {
        throw new Error('Failed to create order');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <section className="bg-white rounded-2xl shadow-card border border-gray-200 p-6 sm:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Information</h2>
        <p className="text-gray-600">Complete your purchase securely with Cashfree</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            placeholder="Enter your first name"
          />
          <Input
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            placeholder="Enter your last name"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Enter your email"
          />
          <Input
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            placeholder="Enter your phone number"
          />
        </div>

        {/* Address Information */}
        <Input
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
          placeholder="Enter your address"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Input
            label="City"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
            placeholder="Enter your city"
          />
          <Input
            label="State"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            required
            placeholder="Enter your state"
          />
          <Input
            label="Pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
            required
            placeholder="Enter pincode"
          />
        </div>

        {/* Payment Method Selection */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
          <div className="space-y-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="text-primary focus:ring-primary"
              />
              <Icon name="CreditCard" size={20} className="text-gray-600" />
              <span className="text-gray-700">Credit/Debit Card</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="upi"
                checked={paymentMethod === 'upi'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="text-primary focus:ring-primary"
              />
              <Icon name="Smartphone" size={20} className="text-gray-600" />
              <span className="text-gray-700">UPI</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="netbanking"
                checked={paymentMethod === 'netbanking'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="text-primary focus:ring-primary"
              />
              <Icon name="Building" size={20} className="text-gray-600" />
              <span className="text-gray-700">Net Banking</span>
            </label>
          </div>
        </div>

        {/* Security Badges */}
        <div className="flex items-center justify-center space-x-6 py-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <Icon name="Shield" size={16} className="text-success" />
            <span className="text-sm text-gray-600">SSL Secured</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Lock" size={16} className="text-success" />
            <span className="text-sm text-gray-600">256-bit Encryption</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircle" size={16} className="text-success" />
            <span className="text-sm text-gray-600">PCI Compliant</span>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="default"
          size="lg"
          className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold py-4"
          disabled={isProcessing}
          iconName={isProcessing ? "Loader" : "CreditCard"}
          iconPosition="left"
        >
          {isProcessing ? 'Processing Payment...' : 'Complete Purchase - ₹999'}
        </Button>

        {/* Trust Message */}
        <p className="text-center text-sm text-gray-500">
          Your payment is secured by Cashfree. We never store your card details.
        </p>
      </form>
    </section>
  );
};

export default PaymentFormSection; 