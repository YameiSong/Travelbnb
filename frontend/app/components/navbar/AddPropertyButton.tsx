"use client";

import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import useLoginModal from "@/app/hooks/useLoginModal";

interface AddPropertyButtonProps {
  userId?: string | null;
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({ userId }) => {
  const loginModal = useLoginModal();
  const addProertyModal = useAddPropertyModal();

  const travelbnbYourHome = () => {
    if (userId) {
      addProertyModal.open();
    } else {
      loginModal.open();
    }
  };

  return (
    <div
      onClick={travelbnbYourHome}
      className="cursor-pointer p-2 text-sm font-semibold rounded-full hover:bg-gray-100"
    >
      your home
    </div>
  );
};

export default AddPropertyButton;
