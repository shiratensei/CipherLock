const messageBox = document.querySelector("#message-box");
const resetBtn = document.querySelector("#reset-btn");

import { filesList } from "../browseFile.js";

export function passReqNotMet() {
    messageBox.innerHTML = "";
    messageBox.innerHTML = `Password must containat least one lowercase letter, one uppercase letter, one numeric digit, and one special character`;
    messageBox.classList.remove("mx-2");
    messageBox.classList.add("m-auto");
    messageBox.classList.remove("shake-up-down");
    messageBox.classList.add("wrong-password-shake");
    messageBox.classList.remove("bg-neutral-100");
    messageBox.classList.add("bg-red-200");
    messageBox.classList.add("text-[red]");
    //
    resetBtn.disabled = false;
    resetBtn.classList.remove("opacity-10");
    resetBtn.classList.remove("invisible")
    resetBtn.classList.add("visible")

    const messageBoxTimeout = setTimeout(() => {
        resetBtn.classList.remove("visible")
        resetBtn.classList.add("invisible")
        messageBox.innerHTML = "";
        messageBox.classList.add("mx-2");
        messageBox.classList.remove("m-auto");
        messageBox.classList.add("shake-up-down");
        messageBox.classList.remove("wrong-password-shake");
        messageBox.classList.add("bg-neutral-100");
        messageBox.classList.remove("bg-red-200");
        messageBox.classList.remove("text-[red]");
    }, 5000)
}