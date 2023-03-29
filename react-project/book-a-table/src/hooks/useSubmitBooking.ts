type BookData = {
  email: string;
  name: string;
  phone: string;
  booking_date: string;
  arrival_time: string;
  dinners: number;
  occasion: string;
  restaurant_area: string;
};

/* Fake API from Coursera - Front-End Developer Capstone - Exercise: Connecting the bookings page to the API */
const submitAPI = function (formData: BookData) {
  return true;
};

const useSubmitBooking = () => {
  const callApi = (data: BookData) => {
    const fakeApiCall = () => setTimeout(() => submitAPI(data), 500);

    return Promise.resolve(fakeApiCall());
  };
  return callApi;
};

export { useSubmitBooking };
