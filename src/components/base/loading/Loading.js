import style from "./loading.module.scss";

const Loading = ({variant}) => {
  return (
    <div className={style.loading}>
      <div className={`spinner-border text-${variant} ${style.spinnerBorder}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

Loading.defaultProps = {
  variant: "primary",
};

export default Loading;
