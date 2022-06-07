import { useAuth } from "../../context";
import "./loader.css";

const Loader = () => {
  const { isLoading } = useAuth();
  return (
    <div
      style={{ display: isLoading ? "block" : "none" }}
      className="fade-in loadingio-spinner-rolling-ltt7ie78t49"
    >
      <div className="ldio-cz3ptt4enft">
        <div></div>
      </div>
    </div>
  );
};

export { Loader };
