import { useSession } from "next-auth/react";
import { FC, PropsWithChildren, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/stores/user-store/actions";
import { selectors } from "../store/stores/user-store";
import { UserState } from "../types";

export const UserProvider: FC<PropsWithChildren<any>> = ({ children }) => {
  const session = useSession() as any;
  const dispatch = useDispatch();

  useEffect(() => {
    if (session && session.data) {
      const payload: UserState = {
        id: session.data.user.id,
        email: session.data.user.email,
        roleId: session.data.user.roleId,
      };

      if (session.data.user.name && session.data.user.surname) {
        payload.name = session.data.user.name;
        payload.surname = session.data.user.surname;
      }

      dispatch(getUser.success(session.data.user));
    }
  }, []);

  const user = useSelector(selectors.getUser());
  
  return <>{children}</>;
};
