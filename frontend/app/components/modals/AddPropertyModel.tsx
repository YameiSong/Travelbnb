"use client";

import Image from "next/image";

import Modal from "./Modal";

import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";

const AddPropertyModal = () => {
  const addProertyModal = useAddPropertyModal();

  return (
    <>
      <Modal
        isOpen={addProertyModal.isOpen}
        close={addProertyModal.close}
        label="Add Property"
        content={<p>p</p>}
      />
    </>
  );
};

export default AddPropertyModal;
