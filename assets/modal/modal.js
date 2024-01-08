// const popap = document.querySelector("#modal");
function modal(text) {
    const dialog = document.querySelector("[data-modal]");
    let context = `<p>${text}</p>`;
    dialog.innerHTML = context;
    dialog.showModal();
    setTimeout(() => {
        dialog.close();
    }, 3000);
    
}

export default modal;
