import { Tooltip } from "@material-tailwind/react";
// import { useContext } from "react";
// import { AuthContext } from "../../providers/AuthProvider";

export function TooltipDefault() {
  // const {user} = useContext(AuthContext);
  return (
    <Tooltip
      className="mt-6 bg-purple-600 z-100 absolute"
      placement="bottom"
      content={
        <div className="px-3 py-2">
          {/* {user?.displayName} */}
          JIM
        </div>
      }
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >
      {/* <img className="w-full object-fill " src={user?.photoURL} /> */}
    </Tooltip>
  );
}
