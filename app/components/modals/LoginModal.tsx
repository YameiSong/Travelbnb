'use client';

import Modal from "./Modal";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
    const loginModal = useLoginModal();

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
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            label="Log in"
            content={content}
        />
    );
}

export default LoginModal;