import { WA_STATUS } from "./constants.js";

export default {
  connection: {
    status: WA_STATUS.DISCONNECTED,
    reason: "First time",
    isReconnecting: false,
    qrString: ""
  },
};
