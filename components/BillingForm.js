const BillingForm = () => {
  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-semibold mb-4">BILLING DETAILS</h2>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScPtdctRONDy25oil9js9lUeObChH-nf4kafAW-EjjepogvxQ/viewform?embedded=true"
        width="450"
        height="1000"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default BillingForm;
