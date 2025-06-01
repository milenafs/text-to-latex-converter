export const Feedback = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScJjCArblOo4774BHMxQx6u8IR_gId93woRNou-VlLFjNBTcA/viewform?embedded=true"
        width="640"
        height="520"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Feedback Form"
        style={{ border: "none" }}
      >
        Carregando…
      </iframe>
    </div>
  );
};

export default Feedback;
