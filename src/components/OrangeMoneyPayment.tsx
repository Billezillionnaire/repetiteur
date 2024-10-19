import React, { useState } from 'react';

interface OrangeMoneyPaymentProps {
  onSuccess: () => void;
}

function OrangeMoneyPayment({ onSuccess }: OrangeMoneyPaymentProps) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous devriez implémenter la logique de paiement réelle avec Orange Money
    console.log('Paiement effectué avec le numéro:', phoneNumber);
    onSuccess();
  };

  return (
    <form className="orange-money-form" onSubmit={handleSubmit}>
      <h3>Paiement Orange Money</h3>
      <p>Montant à payer : 1000 FCFA</p>
      <input
        type="tel"
        placeholder="Numéro de téléphone Orange Money"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
      />
      <button type="submit" className="payment-button">Payer</button>
    </form>
  );
}

export default OrangeMoneyPayment;