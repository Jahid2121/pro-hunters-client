const Modal = () => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn bg-customOrange text-white"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Apply Now
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form action="">
            <div className="form-control">
              <input
                type="email"
                name="email"
                defaultValue={"Jahid Sarkar"}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="email"
                defaultValue={"jahidsarkar2121@gmail.com"}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Submit your Resume</span>
              </label>
              <input
                type="text"
                name="text"
                placeholder="Resume Link"
                className="input input-bordered"
                required
              />
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
