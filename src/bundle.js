/* eslint-disable no-console */
import "./style.scss";

import axios from "axios";

axios.get(`${window.location.protocol}//${window.location.host}/message`)
    .then(res => console.log(res.data));