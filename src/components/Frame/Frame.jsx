/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Image } from "../Image";
import { Status } from "../Status";
import "./style.css";

export const Frame = ({
  company = "One Chemical  co.ltd",
  serialNumber = "RF1324F4T",
  room = "1402",
  buliding = "MHMK",
  responsiblePerson = "ผศ.ดร. แสนชัย ใจดี",
  inventoryNumber = "1000000411/42",
  dayCountdown = "180",
  nameInvertory = "เครื่องวิเคราะห์สาร UV-2600 (Spectrophotometer UV-2600)",
  className,
  imageRatioClassName,
  divClassName,
  divClassNameOverride,
  divClassName1,
  numberInvenClassName,
  responseClassName,
  companyClassName,
  serialNumberClassName,
}) => {
  return (
    <div className={`frame ${className}`}>
      <Image className={imageRatioClassName} placeholder ratio="thirty-two" />
      <div className="div-2">
        <div className="UV">{nameInvertory}</div>
        <div className={`number-inven ${numberInvenClassName}`}>
          <div className="content-title">หมายเลขครุภัณฑ์</div>
          <div className="tag">{inventoryNumber}</div>
        </div>
        <div className="address">
          <div className="content-title-wrapper">
            <div className="content-title">อาคาร</div>
          </div>
          <div className="text-2">
            <div className="content-title-2">ห้อง</div>
            <div className="tag-2">{buliding}</div>
          </div>
          <div className="content-title">ที่อยู่</div>
          <div className="tag-3">{room}</div>
        </div>
        <div className={`response ${responseClassName}`}>
          <div className="content-title">ผู้รับผิดชอบ</div>
          <div className="tag-4">{responsiblePerson}</div>
        </div>
        <div className={`company ${companyClassName}`}>
          <div className="content-title">บริษัท</div>
          <div className="tag-5">{company}</div>
        </div>
        <div className={`serial-number ${serialNumberClassName}`}>
          <div className="content-title">หมายเลข SN</div>
          <div className="tag-6">{serialNumber}</div>
        </div>
      </div>
      <div className="coutdown">
        <div className={`text-wrapper-5 ${divClassName}`}>จะต้องได้รับการบำรุงรักษา ในอีก&nbsp;&nbsp;:</div>
        <div className={`text-wrapper-6 ${divClassNameOverride}`}>วัน</div>
        <div className={`element ${divClassName1}`}>{dayCountdown}</div>
      </div>
      <Status className="status-instance" />
    </div>
  );
};

Frame.propTypes = {
  company: PropTypes.string,
  serialNumber: PropTypes.string,
  room: PropTypes.string,
  buliding: PropTypes.string,
  responsiblePerson: PropTypes.string,
  inventoryNumber: PropTypes.string,
  dayCountdown: PropTypes.string,
  nameInvertory: PropTypes.string,
};
