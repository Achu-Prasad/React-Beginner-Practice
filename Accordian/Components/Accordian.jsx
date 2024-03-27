import data from "../Data/Data";

function Accordian(i) {
  return (
    <div className="mainbox">
      <div className="HeadingSection">
        <h3 className="Title">{data[i.num].question}</h3>
        <span>+</span>
      </div>
      {/* <div className="Content">{data[i.num].answer}</div> */}
    </div>
  );
}
export default Accordian;
