# Recoil

---

- Recoil is a state managment library

---

### Step-1: `Preparing a store`

- We need to setup a store and make atoms for each state

```js
import { atom } from "recoil";

export const Networkcount = atom({
  key: "Networkcount",
  default: 0,
});
export const Jobscount = atom({
  key: "Jobscount",
  default: 0,
});
export const Notificationcount = atom({
  key: "Notificationcount",
  default: 0,
});
export const Messagescount = atom({
  key: "Messagescount",
  default: 0,
});
```

---

### Step-2: `How to use`

- We can use the store values inside project in multiple ways
  - `useRecoilValue`
  - `useSetRecoilValue`
  - `useRecoilState`
  - `useSetRecoilState`

```js
const NetworkNotifications = useRecoilValue(Networkcount);
const JobsNotifications = useRecoilValue(Jobscount);
const [MessageNotifications, setMessageNotifications] =
  useRecoilState(Messagescount);
const TotalNotifications = useRecoilValue(Notificationcount);
```

---

# Selectors

- We use selectors when we want a function that id dependent on Atoms so no re renders occur unnecessorly

- Here to display the Total Notifications we can do it in two ways `bad way` `good way`
  <br>

- `Bad way`

```js
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Jobscount, Messagescount, Networkcount } from "./store/atoms/atoms";

const ButtomComponent = () => {
  const NetworkNotifications = useRecoilValue(Networkcount);
  const JobsNotifications = useRecoilValue(Jobscount);
  const [MessageNotifications, setMessageNotifications] = useRecoilState(Messagescount);
  const TotalNotifications =NetworkNotifications + JobsNotifications +MessageNotifications;
  const sendmessage = () => {
    setMessageNotifications(MessageNotifications + 1);
  };
  return (
    <div>
      <button>Home </button>
      <button>
        My Network ({NetworkNotifications >= 100 ? "99+" : NetworkNotifications})
      </button>
      <button>Jobs ({JobsNotifications}) </button>
      <button>Messages ({MessageNotifications}) </button>
      <button> Total Notification ({TotalNotifications}) </button>
      <button onClick={sendmessage}>Send Message</button>
    </div>
  );
};

export default ButtomComponent;
```
- This will cause unecessory rerenders 
- This preforms calculation every time the component re renders 
- We can use useMemo to optimise is  but in recoil we will use selectors

