export const handleInputChange = (e, setterFunc, details) => {
  if (e.target.id === 'name') {
    setterFunc({
      ...details,
      name: e.target.value,
    });
  }

  if (e.target.id === 'profession') {
    setterFunc({
      ...details,
      profession: e.target.value,
    });
  }

  if (e.target.id === 'phone-number') {
    setterFunc({
      ...details,
      phone: e.target.value,
    });
  }

  if (e.target.id === 'email-address') {
    setterFunc({
      ...details,
      email: e.target.value,
    });
  }

  if (e.target.id === 'socmed-url') {
    setterFunc({
      ...details,
      socmed: e.target.value,
    });
  }

  if (e.target.id === 'address') {
    setterFunc({
      ...details,
      address: e.target.value,
    });
  }
};
