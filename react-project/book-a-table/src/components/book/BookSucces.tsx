import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import SuccessFrame from "../utils/SuccessFrame";

export default function BookSucces() {
  return (
    <SuccessFrame
      message="We got your reservation. See you soon!"
      icon={faBookBookmark}
    />
  );
}
