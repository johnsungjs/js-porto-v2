interface BigModalProps {
  title: string;
  body: string;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
}

const BigModal = ({ setIsVisible, title, body, isVisible }: BigModalProps) => {
  return (
    <>
      <div
        className={`transition-all ease-linear delay-150 duration-350   bg-dark bg-opacity-50 w-screen h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed  ${
          isVisible ? "opacity-100 z-20" : "opacity-0 -z-20"
        }`}
        onClick={() => setIsVisible(false)}
      />
      <div
        className={`fixed transition-all ease-linear delay-150 duration-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
          isVisible ? "opacity-100 z-30" : "opacity-0 -z-30"
        }`}
      >
        <div className="w-[90vw] h-[90vh] bg-white shadow-xl overflow-auto rounded-xl p-10">
          <div className="flex">
            <div>{title}</div>
            <button
              className="absolute -right-2 -top-5 bg-slate-100 px-4 py-2 rounded-xl text-center shadow-xl"
              onClick={() => setIsVisible(false)}
            >
              x
            </button>
          </div>
          <div>{body}</div>
          <button
            className="bg-primary rounded-xl px-4 py-2"
            onClick={() => setIsVisible(false)}
          >
            close modal
          </button>
        </div>
      </div>
    </>
  );
};

export default BigModal;
