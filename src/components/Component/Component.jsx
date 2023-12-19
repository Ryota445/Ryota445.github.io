/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Calculator } from "../../icons/Calculator";
import { FileExcel } from "../../icons/FileExcel";
import { Home } from "../../icons/Home";
import { Reconciliation2 } from "../../icons/Reconciliation2";
import { Switcher } from "../../icons/Switcher";
import "./style.css";

export const Component = ({ className }) => {
  return (
    <div className={`component ${className}`}>
      <div className="menu-inventory">
        <Calculator className="icon-instance-node" />
        <div className="text-wrapper">การจัดการครุภัณฑ์</div>
      </div>
      <div className="menu-notuse">
        <Reconciliation2 className="icon-instance-node" color="#A3AED0" />
        <div className="div">การทำจำหน่าย</div>
      </div>
      <div className="menu-home">
        <a className="text-wrapper-2">หน้าหลัก</a>
        <Home className="icon-instance-node" color="#A3AED0" />
      </div>
      <div className="menu-excel">
        <div className="text-wrapper-3">สร้างรายงาน</div>
        <FileExcel className="icon-instance-node" />
      </div>
      <div className="menu-mantenant">
        <div className="div">การบำรุงรักษา</div>
        <Switcher className="icon-instance-node" color="#A3AED0" />
      </div>
    </div>
  );
};
