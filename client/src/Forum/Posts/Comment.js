import React, { PureComponent, useState } from 'react';
import OnlyCmt from './onlyCmt';
import data from './data.json';
import './Comment.css';

const Comment = () => {
  const [comment, setComment] = useState(data);
  const userId = '01a';
  const name = 'xyz';
  const signinUrl = '/';
  const signupUrl = '/';
  let count = 0;
  comment.map((i) => {
    count += 1;
  });

  return (
    <div className="pop-up-post">
      <div className="post-content">
        <div className="post-author-and-time">
          <p className="post-of-sb">Nguyễn Minh Thái</p>
          <div className="separator"></div>
          <p className="time-taken">13 giờ trước</p>
        </div>
        <div className="post-header">
          <p>Tiêu đề: </p>
          <div className="separator"></div>
          <p>Hỏi thông tin học bổng $60000 vừa giành được</p>
        </div>
        <hr />
        <p className="post-detail">
          Kính gửi thầy, Em tên là Nguyễn Minh Thái, MSSV 19021420, Hôm qua em
          có biết được do quá ao chình các bạn còn lại trong quá trình học tập,
          làm hồ sơ và phỏng vấn nên em đã trúng tuyển suất học bổng trị giá
          $50000 ở Đại học Havard, cộng thêm khoản tiền hỗ trợ $10000 từ Chính
          phủ. Ban đầu em chỉ định nộp chơi chơi vì nghĩ Havard chưa đủ tầm với
          mình nên cũng không tìm hiểu kỹ, nay em mới biết thêm là giờ du học là
          vua của mọi nghề, vừa có tiền, vừa có quyền, vừa được xã hội trọng
          vọng, phụ nữ nghe xong thì lênh láng nước, đủ tạo thành mùa lũ để đi
          từ thiện nên em cũng đổi ý định. Vậy thầy có thể cho em hỏi thêm về
          thông tin về suất học bổng đó được không ạ? Em cảm ơn thầy nhiều ạ.
        </p>
        <hr />
      </div>
      <p> {count} Comments</p>
      <OnlyCmt data={comment} />
    </div>
  );
};

export default Comment;
