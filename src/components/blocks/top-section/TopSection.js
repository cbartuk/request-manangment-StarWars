import {Button} from "components/base";

const TopSection = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <p>lorem ipsum</p>
            <Button>For Info</Button>
          </div>
          <div className="col-8"></div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
