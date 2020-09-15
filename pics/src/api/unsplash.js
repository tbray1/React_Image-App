import axios from "axios";

export default axios.create({
  baseUrl: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID BTOiwcnrLkUQ-tO-4Sjo6E0qEIPl_kBpWj-2lakVcxQ",
  },
});
