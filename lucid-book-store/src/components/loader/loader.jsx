import { useAuth } from "../../context";
import { largeLoader, mediumLoader } from "../../utility/constants";
import "./loader.css";

const Loader = ({ isLoading = null, size }) => {
  const { pageLoading } = useAuth();
  let loaderSize = {};
  let loaderPosition = {};
  let loading = isLoading === null ? pageLoading : isLoading;
  if (size === "large") {
    loaderSize = largeLoader;
    loaderPosition = { position: "fixed" };
  }
  if (size === "medium") {
    loaderSize = mediumLoader;
  }
  return (
    <div
      style={{ display: loading ? "block" : "none", ...loaderPosition }}
      className="fade-in loadingio-spinner-rolling-ltt7ie78t49"
    >
      <div className="ldio-cz3ptt4enft">
        <div style={loaderSize}></div>
      </div>
    </div>
  );
};

export { Loader };
