import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  Jobscount,
  Messagescount,
  Networkcount,
  TotalNotification,
} from "./store/atoms/atoms";

const ButtomComponent = () => {
  const NetworkNotifications = useRecoilValue(Networkcount);
  const JobsNotifications = useRecoilValue(Jobscount);
  const [MessageNotifications, setMessageNotifications] =
    useRecoilState(Messagescount);
  const TotalNotifications = useRecoilValue(TotalNotification)
  const sendmessage = () => {
    setMessageNotifications(MessageNotifications + 1);
  };
  return (
    <div>
      <button>Home </button>
      <button>
        My Network ({NetworkNotifications >= 100 ? "99+" : NetworkNotifications}
        )
      </button>
      <button>Jobs ({JobsNotifications}) </button>
      <button>Messages ({MessageNotifications}) </button>
      <button> Total Notification ({TotalNotifications}) </button>
      <button onClick={sendmessage}>Send Message</button>
    </div>
  );
};

export default ButtomComponent
