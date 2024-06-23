"use client";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { RemoveName, addOperation, Remove_All } from "@/Store/Slices/Operation";
import FakeName from "./FakeName";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const User_Detail = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.crud);

  const FakeUser = () => {
    dispatch(addOperation(FakeName()));
  };

  const Delete_Name = (id) => {
    dispatch(RemoveName(id));
  };

  const Delete_All = () => {
    dispatch(Remove_All());
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
        {data.length === 0 ? (
          <p className="text-center font-semibold">Not Found Any Name</p>
        ) : (
          data.map((items, id) => {
            return (
              <div
                className="flex justify-between md:px-10 lg:px-0 border-b border-black"
                key={id}
              >
                <p className="font-serif text-lg">{items}</p>
                <MdDeleteForever
                  className="text-2xl text-red-500 cursor-pointer"
                  onClick={() => {
                    toast(`${items}`, {
                      description: `${items} is deleted successfully`,
                      className:
                        "group-[.toaster]:bg-red-100 group-[.toaster]:border group-[.toaster]:border-red-800",
                      action: {
                        label: "Cancel",
                        onClick: () => console.log("Undo"),
                      },
                    });
                    return Delete_Name(id);
                  }}
                />
              </div>
            );
          })
        )}
      </div>
      <AlertDialog>
        <div className="flex justify-center">
          <AlertDialogTrigger asChild>
            <Button
              variant="destructive"
              size="sm"
              className="mt-5 active:scale-110 transition ease-in-out"
            >
              Delete All
            </Button>
          </AlertDialogTrigger>
        </div>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.This will delete all name exits in
              Current UI
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => Delete_All()}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default User_Detail;
