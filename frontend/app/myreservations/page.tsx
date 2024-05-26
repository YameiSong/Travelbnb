import Image from "next/image";

import apiService from "../services/apiService";

const MyReservationsPage = async () => {
  const reservations = await apiService.get("/api/auth/myreservations");

  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="my-6 text-2xl">My Reservations</h1>

      <div className="space-y-4">
        {reservations.map((reservation: any) => {
          return (
            <>
              <div className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                <div className="col-span-1">
                  <div className="relative overflow-hidden aspect-square rounded-xl">
                    <Image
                      fill
                      src="/images/property_beachfront_newcastle.webp"
                      className="hover:scale-110 object-cover transition h-full w-full"
                      alt="beach house"
                    />
                  </div>
                </div>
                <div className="col-span-1 md:col-span-3 space-y-2">
                  <h2 className="mb-4 text-xl">{reservation.property.title}</h2>
                  <p>
                    <strong>Check in date:</strong> {reservation.property.start_date}
                  </p>
                  <p>
                    <strong>Check out date:</strong> {reservation.property.end_date}
                  </p>
                  <p>
                    <strong>Number of nights:</strong> {reservation.property.number_of_nights}
                  </p>
                  <p>
                    <strong>Total price:</strong> $200
                  </p>
                  <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">
                    Go to property
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </main>
  );
};

export default MyReservationsPage;
