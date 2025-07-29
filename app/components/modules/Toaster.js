import { Toaster } from "sonner";
function ToasterAPI() {
  return (
    <Toaster
      position="top-center"
      dir="rtl"
      toastOptions={{
        style: {
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          width: "fit-content",
          border: "none",
        },
      }}
      className="text-center flex justify-center"
    />
  );
}

export default ToasterAPI;
