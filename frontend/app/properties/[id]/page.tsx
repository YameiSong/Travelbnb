import Image from "next/image";
import ReservationSidebar from "@/app/components/properties/ReservationSidebar";

const PropertyDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src="/images/property_beachfront_newcastle.webp"
                    className="object-cover w-full h-full"
                    alt=""
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Property name</h1>
                    <span className="mb-6 block text-lg text-gray-600">
                        4 guests - 2 bedrooms - 1 bathroom
                    </span>
                    <div className="py-6 flex items-center space-x-4">
                        <Image
                            src="/images/profile1.webp"
                            width={50}
                            height={50}
                            className="rounded-full"
                            alt="username"
                        />
                        <p><strong>John Doe</strong></p>
                    </div>
                    <hr />
                    <p className="mt-6 text-lg">
                        fasgas gasdhgasha aghsdg
                    </p>
                </div>
                <ReservationSidebar />
            </div>
        </main>
    );
}

export default PropertyDetailPage;