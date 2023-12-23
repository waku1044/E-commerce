// const popap = document.querySelector("#modal");
function modal(text) {
    const dialog = document.querySelector("[data-modal]");
    const context = `<h1>${text}</h1>`;
    dialog.innerHTML = context
    dialog.showModal();
    setTimeout(() => {
        dialog.close();
    }, 3000);
    
}

export default modal;
