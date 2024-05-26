"use client";

import useLoginModal from "../hooks/useLoginModal";
import { useRouter } from "next/navigation";
import apiService from "../services/apiService";

interface ContactButtonProps {
  userId: string | null;
  landlordId: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({
  userId,
  landlordId,
}) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  return (
    <div className="mt-6 py-4 px-6 bg-airbnb text-white rounded-xl cursor-pointer hover:bg-airbnb-dark transition">
      Contact
    </div>
  );
};

export default ContactButton;
