import { useState, useEffect } from "react";
import { getUser } from "../services/api";

export const UserNameLabel = () => {
  const [state, setState] = useState<{ firstName: string }>({
    firstName: '',
  });

  useEffect(() => {
    (async () => {
      const data = await getUser();
      setState(data);
    })();
  }, []);

  return (
    <div>
      <span>User name: </span>
      <span>{state.firstName}</span>
    </div >
  )
};
