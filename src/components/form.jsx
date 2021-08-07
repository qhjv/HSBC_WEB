import React from 'react';
import PropTypes from 'prop-types';
import emailjs from "emailjs-com"
Form.propTypes = {
    
};

function Form(props) {
    
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_bhee4uy','template_imepx8x',e.target, 'user_GXS3LEQItD3u4orfWy6Ue')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    return (
        <form className="contactPage--form" action onSubmit={sendEmail}> 
            <input type="text" placeholder="Họ và tên "  name="name"/>
            <input type="tel" placeholder="Số diện thoại "  name="sdt"/>
            <input type="text" placeholder="Địa chỉ sinh sống"  name="andress"/>
            <input type="text" placeholder="Số tiền vay" name="money" />
            <select name="hinhthucvay">
                <option value="">Hình thức vay</option>
                <option value="Công ty trả lương Chuyển khoản">Công ty trả lương Chuyển khoản</option>
                <option value="Công ty trả lương Tiền mặt">Công ty trả lương Tiền mặt</option>
                <option value="Vay theo bảo hiểm nhân thọ">Vay theo bảo hiểm nhân thọ</option>
                <option value="Lao động tự do">Lao động tự do</option>
            </select>
            <button type="submit" className="contactPage--form__submit" >
                      ĐĂNG KÝ NGAY    
            </button>
        </form>
    );
}

export default Form;