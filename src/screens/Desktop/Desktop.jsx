import React from "react";
import { Component } from "../../components/Component";
import { Frame } from "../../components/Frame";
import { SearchBox } from "../../components/SearchBox";
import { Search18 } from "../../icons/Search18";
import "./style.css";

import { AudioOutlined } from '@ant-design/icons';
import React from 'react';
import { Input, Space } from 'antd';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);


export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="sidebar">
              <div className="text-wrapper-7">CU SAP</div>
              <Component className="component-1" />
            </div>
            <Frame
              buliding="MHMK"
              className="frame-20"
              company="One Chemical&nbsp;&nbsp;co.ltd"
              dayCountdown="180"
              divClassName="frame-20-instance"
              divClassName1="frame-20-instance"
              divClassNameOverride="frame-20-instance"
              imageRatioClassName="frame-instance"
              inventoryNumber="1000000411/42"
              nameInvertory="เครื่องวิเคราะห์สาร UV-2600 (Spectrophotometer UV-2600)"
              responsiblePerson="ผศ.ดร. แสนชัย ใจดี"
              room="1402"
              serialNumber="RF1324F4T"
            />
            <Frame
              buliding="MHMK"
              className="frame-2"
              company="One Chemical&nbsp;&nbsp;co.ltd"
              dayCountdown="-"
              imageRatioClassName="frame-3"
              inventoryNumber="1000000023/51"
              nameInvertory="เครื่องวิเคราะห์สาร UV-120V (Spectrophotometer UV-120V)"
              numberInvenClassName="design-component-instance-node"
              responsiblePerson="ผศ.ดร. แสนชัย ใจดี"
              room="1302"
              serialNumber="RF1324F4T"
            />
          </div>
          <div className="main">
            <div className="found">
              <div className="text-wrapper-8">ค้นพบ</div>
              <div className="text-wrapper-9">รายการ</div>
              <div className="text-wrapper-10">12</div>
            </div>
            <div className="text-wrapper-11">รายการครุภัณฑ์</div>
            <div className="text-wrapper-12">หน้าหลัก / ระบบจัดการข้อมูลครุภัณฑ์</div>
          </div>
          <Frame
            buliding="MHMK"
            className="frame-7"
            company="CHEM&nbsp;&nbsp;co.ltd"
            companyClassName="frame-5"
            dayCountdown="-"
            imageRatioClassName="frame-8"
            inventoryNumber="100000044/32"
            nameInvertory="เครื่องวิเคราะห์สาร PT-900 (Spectrophotometer PT-900)"
            responseClassName="frame-4"
            responsiblePerson="ผศ.ดร. คนไทย ใจดี"
            room="1304"
            serialNumber="X43NDFY3141F"
            serialNumberClassName="frame-6"
          />

            <Search placeholder="input search text" 
              onSearch={onSearch} 
              enterButton
              style={{
              marginLeft: 'auto',
              marginRight: '5px',
              width: 304,
              display: 'flex',
              justifyContent: 'flex-end',
              marginBottom: '20px',
              marginTop: '20px', // เลื่อนลงมานิดหนึ่ง
             }}
             />
        </div>
      </div>
    </div>
  );
};



// const inventoryData = [
//   {
//     building: "MHMK",
//     company: "One Chemical co.ltd",
//     dayCountdown: "180",
//     imageRatioClassName: "frame-instance",
//     inventoryNumber: "1000000411/42",
//     nameInventory: "เครื่องวิเคราะห์สาร UV-2600 (Spectrophotometer UV-2600)",
//     responsiblePerson: "ผศ.ดร. แสนชัย ใจดี",
//     room: "1402",
//     serialNumber: "RF1324F4T",
//   },
//   
// ];