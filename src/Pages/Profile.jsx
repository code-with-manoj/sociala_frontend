import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserProfile } from "../Redux/Actions/AuthAction";

const Profile = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.UserReducer.profile);

  useEffect(() => {
    dispatch(UserProfile());
  }, [dispatch]);
  return (
    <div>
      <div className="container mx-auto p-3">
        <figure className="w-full h-40 md:h-60 max-h-96 shadow rounded">
          <img
            src="http://uitheme.net/sociala/images/u-bg.jpg"
            alt=""
            className="w-full rounded object-cover h-full"
          />
        </figure>
        <div className="sm:p-3 md:pb-6  lg:pb-8  rounded border-b relative">
          <div className="lg:h-28 lg:w-28 md:w-24 md:h-24  h-16 w-16 absolute -top-4 md:-top-7 p-1 bg-white rounded-full">
            <img
              src="Assets/dummy-user.png"
              className="w-full h-full rounded-full object-cover object-top"
              alt="profile"
            />
          </div>
          <div className="lg:ml-32 ml-16 md:ml-28 flex flex-col">
            <span className="font-bold md:text-xl">{data.name}</span>
            <span className="text-gray-400 text-xs md:text-sm ">
              {data?.email}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
