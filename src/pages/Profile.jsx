import React, { useContext } from "react";
// import { Context } from "../main";
// import Loader from "../components/Loader";

const Profile = () => {
  // const { loading, user } = useContext(Context);

  return (
    <div className="container">
      <div className="login">
        <section>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Email" required />

            <button type="submit">Update</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Profile;
