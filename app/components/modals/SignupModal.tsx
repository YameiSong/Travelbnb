'use client';

import Modal from "./Modal";
import useSignupModal from "@/app/hooks/useSignupModal";
import CustomButton from "../forms/CustomButton";

const SignupModal = () => {
    const SignupModal = useSignupModal();

    const content = (
        <form className="space-y-4">
            <input
                type="email"
                placeholder="Your email address"
                className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"
            />
            <input
                type="password"
                placeholder="Your password"
                className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"
            />
            <input
                type="password"
                placeholder="Repeat password"
                className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"
            />
            <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                the error message
            </div>
            <CustomButton
                label="Submit"
                onClick={() => console.log("submit")}
            />
        </form>
    );

    return (
        <Modal
            isOpen={SignupModal.isOpen}
            close={SignupModal.close}
            label="Sign up"
            content={content}
        />
    );
}

export default SignupModal;