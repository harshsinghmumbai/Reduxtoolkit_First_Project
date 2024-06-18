"use client";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { addOperation } from "@/Store/Slices/Operation";
import FakeName from "./FakeName";
import { MdDeleteForever } from "react-icons/md";

const User_Detail = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.crud);

  const FakeUser = () => {
    dispatch(addOperation(FakeName()));
  };

  return (
    <>
      <div className="flex justify-between items-center sm:px-10 lg:px-72 ">
        <p className="font-semibold md:text-xl lg:text-xl">
          List of User details
        </p>
        <Button
          size="sm"
          onClick={() => FakeUser()}
          className="active:scale-110 transition ease-in-out"
        >
          Add User
        </Button>
      </div>
      <div className="border border-gray-500 mt-5 rounded-lg p-2 space-y-3 sm:w-[75%] lg:w-[35%] m-auto">
        {data.map((items, id) => {
          return (
            <div className="flex justify-between md:px-10 lg:px-0 border-b  border-black">
              <p className="font-serif text-lg">{items}</p>
              <MdDeleteForever className="text-2xl text-red-500" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default User_Detail;
