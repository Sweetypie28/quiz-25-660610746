"use client";
import PostOwnner from "@/components/PostOwnner";
import Comment from "@/components/Comment";
import Reply from "@/components/Reply";


export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwnner name = "Chonlakorn Sutthawet" id = "660610746" status = "Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207" like ="100คน"/>

        {/* Comment Example */}
        <Comment userImagePath="/profileImages/lisa.jpg" username="Lisa" commentText="จริงค่า" likeNum= "999 คน" />
        {/* Reply Example */}
        <Reply userImagePath="/profileImages/puppy.jpg" username="หมาน้อย " replyText="จริงค้าบบบบบบบบ" likeNum="2คน"/>
}
