/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import $ from "jquery"
import emailjs from "emailjs-com"
import banner from "../../src/assest/images/banner.jpg"
import logo from "../../src/assest/images/logo.svg"
import vaytinchaplagi1 from "../../src/assest/images/vaytinchaplagi1.jpg"
import vaytinchaplagi2 from "../../src/assest/images/vayvon.png"
import icon1 from "../../src/assest/images/icon1.png"
import icon2 from "../../src/assest/images/icon2.png"
import icon3 from "../../src/assest/images/icon3.png"
import icon4 from "../../src/assest/images/icon4.png"
import spvaytheoluong from "../../src/assest/images/spvaytheoluong.png"
import dkvaytheoluong from "../../src/assest/images/dkienvaytheoluong.png"
import mothetindung from "../../src/assest/images/mothetindung.png"
import taisaochon from "../../src/assest/images/taisaochon.png"
import taisaochonPeople from "../../src/assest/images/taisaochonPeople.png"
import thoigian from "../../src/assest/images/thoigian.png"
import mophongkhoanvay from "../../src/assest/images/mophongkhoanvay.png"
import khachhang1 from "../../src/assest/images/khachhang1.png"
import khachhang2 from "../../src/assest/images/khachhang2.png"
import khachhang3 from "../../src/assest/images/khachhang3.png"
import doitac1 from "../../src/assest/images/doitac1.jpg"
import doitac2 from "../../src/assest/images/doitac2.png"
import doitac3 from "../../src/assest/images/doitac3.jpg"
import doitac4 from "../../src/assest/images/doitac4.png"
import doitac5 from "../../src/assest/images/doitac5.jpg"
import doitac6 from "../../src/assest/images/doitac6.png"
import zalo from "../../src/assest/images/zalo.png"
import svg from "../../src/assest/images/notify.svg"
import Dialog from '../components/dialog';
FullPage.propTypes = {

};

function FullPage(props) {
  var timer;

  var compareDate = new Date();
  compareDate.setDate(compareDate.getDate() + 1); //just for this demo today + 7 days

  timer = setInterval(function () {
    timeBetweenDates(compareDate);
  }, 1000);

  function timeBetweenDates(toDate) {
    var dateEntered = toDate;
    var now = new Date();
    var difference = dateEntered.getTime() - now.getTime();

    if (difference <= 0) {

      // Timer done
      clearInterval(timer);

    } else {

      var seconds = Math.floor(difference / 1000);
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);
      var days = Math.floor(hours / 24);

      hours %= 12;
      minutes %= 60;
      seconds %= 60;

      $("#days").text(days);
      $("#hours").text(hours);
      $("#minutes").text(minutes);
      $("#seconds").text(seconds);
    }
  }

  const handleForm = () => {
    $(".formPage").addClass("hien")
    $(".overflowPage").addClass("hien")
  }
  const handleCloseForm = () => {
    $(".formPage").removeClass("hien")
    $(".overflowPage").removeClass("hien")
  }
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_bhee4uy', 'template_imepx8x', e.target, 'user_GXS3LEQItD3u4orfWy6Ue')
      .then((result) => {
        alert("Bạn đã đăng ký thành công ");
      }, (error) => {
        console.log(error.text);
      });
  }
  return (
    <div>
      <div className="fullPage">
        {/*------------------- HEADER -------------------*/}
        <header className="header d-flex justify-content-between align-items-center" id="header">
          <div className="header__div container d-flex justify-content-between align-items-center">
            <div className="header__logo">
              <img src={logo} alt="" />
            </div>
            <ul className="header__lists d-flex align-items-center">
              <li className="header__list clickDialog">
                <a className="header__list--a" onClick={handleForm} href>QUY TRÌNH VAY</a>
              </li>
              <li className="header__list clickDialog">
                <a className="header__list--a" onClick={handleForm} href>ĐĂNG KÝ TƯ VẤN</a>
              </li>
              <li className="header__list clickDialog">
                <a className="header__list--a" onClick={handleForm} href>ƯU ĐÃI</a>
              </li>
              <li className="header__list">
                <a className="header__list--a" href="tel:0383002528">LIÊN HỆ</a>
              </li>
            </ul>
          </div>
        </header>
        {/*------------------- MAIN -------------------*/}
        <main className="main">
          {/*------------------- PAGE 1 -------------------*/}
          <section className="page1" id="page1">
            <div className="container d-flex flex-column justify-content-between align-items-center">
              <div className="page1__title text-center mb-3" style={{ width: '350px' }}>
                <h5>VAY TÍN CHẤP HSBC LÃI SUẤT THẤP GIẢI NGÂN NHANH</h5>
                <h5 className="mt-1">Hotline: 038.300.2528</h5>
              </div>
              <div className="row">
                <div className="page1__left col-md-12 col-lg-7">
                  <img src={banner} alt="" />
                </div>
                <div className="page1__right col-md-12 col-lg-5 d-flex justify-content-center ">
                  <form className="contactPage--form text-center" action onSubmit={sendEmail}>
                    <div className="contactPage--input d-flex justify-content-center m-auto">
                      <h5 className="mb-3">ĐĂNG KÝ THÔNG TIN TƯ VẤN</h5>
                      <input required name="name" type="text" placeholder="Họ Và Tên " id="name" />
                      <input required name="andress" type="text" placeholder="Nơi Ở Hiện Tại" id="andress" />
                      <input required name="sdt" type="tel" placeholder="Số Điện Thoại " id="sdt" />
                      <input required name="money" type="text" placeholder="Số Tiền Muốn Vay" id="money" />
                      <input required name="working" type="text" placeholder="Công Việc Đang Làm" id="working" />
                      <select required name="hinhthucvay" id="hinhthucvay">
                        <option value>Hình Thức Vay Vốn</option>
                        <option value="Vay Theo Lương Chuyển Khoản">Vay Theo Lương Chuyển Khoản</option>
                        <option value="Vay Theo Lương Tiền Mặt">Vay Theo Lương Tiền Mặt</option>
                        <option value="Lao Động Tự Do (Tạm Dừng Hỗ Trợ)">Lao Động Tự Do ( Tạm Dừng Hỗ Trợ )</option>
                        <option value="Vay Theo Hợp Đồng BHNT">Vay Theo Hợp Đồng BHNT</option>
                      </select>
                      <p>* Thông tin của quý khách luôn được bảo mật tuyệt đối.</p>
                      <button type="submit" className="contactPage--form__submit">
                        ĐĂNG KÝ THÔNG TIN TƯ VẤN
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/*------------------- PAGE 2 -------------------*/}
          <section className="page2" id="page2">
            <div className="container">
              <div className="row">
                <div className="page2__content col-md-12 col-lg-12 text-center">
                  <div className="page2__content--title">
                    <h5>
                      VAY TÍN CHẤP LÀ GÌ?
                    </h5>
                  </div>
                  <p className="page2__content--p"> Vay tín chấp không cần thế chấp tài sản dảm bảo (tổ chức cho vay
                    không yêu cầu bất kỳ tài sản nào),
                    dể được một khoản vay khác bạn cần phải có tài sản để thế chấp cho tỏ chức cho vay , ví dụ:
                    quyền sử dụng đất,
                    xe hơi. Thử tục hồ sơ đơn giản: khách hàng cung cấp giấy tờ cá nhân ít nhất, hoàn thành đơn
                    giản hơn nhiều so với
                    một khoản vay thế chấp.
                  </p>
                </div>
                <div className="page2__img col-md-6 col-lg-6">
                  <img src={vaytinchaplagi1} alt="" />
                </div>
                <div className="page2__list col-md-6 col-lg-6 d-flex justify-content-center flex-column">
                  <img className="mt-2" src={vaytinchaplagi2} alt="" />
                  <button className="page2__list--button m-auto clickDialog " onClick={handleForm}>
                    ĐĂNG KÝ TƯ VẤN
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/*------------------- PAGE 3 -------------------*/}
          <section className="page3" id="page3">
            <div className="container text-center">
              <div className="page3--title">
                <h5>
                  LỢI ÍCH TỐI ƯU KHI VAY THEO LƯƠNG
                </h5>
              </div>
              <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <div className="loiIch d-flex justify-content-center align-items-center flex-column text-center">
                    <div className="loiIch__img">
                      <img src={icon1} alt="" />
                    </div>
                    <div className="loiIch__title">
                      <h6>Thời gian vay tiêu dùng linh hoạt</h6>
                    </div>
                    <p className="loiIch__content">Từ 12 tháng đến 60 tháng</p>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <div className="loiIch d-flex justify-content-center align-items-center flex-column text-center float-right">
                    <div className="loiIch__img">
                      <img src={icon2} alt="" />
                    </div>
                    <div className="loiIch__title">
                      <h6>Lãi suất vay tiêu dùng HẤP DẪN</h6>
                    </div>
                    <p className="loiIch__content">Từ 0,6% , đến 1,6%/tháng Không mất phí bảo hiểm khoản</p>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <div className="loiIch d-flex justify-content-center align-items-center flex-column text-center ">
                    <div className="loiIch__img">
                      <img src={icon3} alt="" />
                    </div>
                    <div className="loiIch__title">
                      <h6>Khoản vay lên đến 500 triệu</h6>
                    </div>
                    <p className="loiIch__content">Không bảo lãnh, không thế chấp, không thực địa thẩm định, chỉ gọi
                      điện</p>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <div className="loiIch d-flex justify-content-center align-items-center flex-column text-center float-right">
                    <div className="loiIch__img ">
                      <img src={icon4} alt="" />
                    </div>
                    <div className="loiIch__title">
                      <h6>Giải ngân sau 24h</h6>
                    </div>
                    <p className="loiIch__content" />
                  </div>
                </div>
              </div>
              <button className="page2__list--button m-auto clickDialog " onClick={handleForm}>
                ĐĂNG KÝ TƯ VẤN
              </button>
            </div>
          </section>
          {/*------------------- PAGE 3 -------------------*/}
          <section className="page4" id="page4">
            <div className="container d-flex justify-content-center align-items-center flex-column">
              <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center ">
                  <img className="dkvienvay__img" src={spvaytheoluong} alt="" />
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center ">
                  <img className="dkvienvay__img" src={dkvaytheoluong} alt="" />
                </div>
                <div className="col-md-12">
                  <div className="mothetindung">
                    <img src={mothetindung} alt="" />
                  </div>
                </div>
              </div>
              <button className="page2__list--button m-auto clickDialog " onClick={handleForm}>
                ĐĂNG KÝ TƯ VẤN
              </button>
            </div>
          </section>
          {/*------------------- PAGE 5 -------------------*/}
          <section className="page5" id="page5">
            <div className="container">
              <div className="row">
                <div className="img_taisao col-md-12 col-lg-7 d-flex justify-content-center align-items-center">
                  <img className="img_taisao--img1" src={taisaochon} alt="" />
                  <img className="img_taisao--img2" src={taisaochonPeople} alt="" />
                </div>
                <div className="col-md-12 col-lg-5">
                  <form className="contactPage--form text-center" action onSubmit={sendEmail}>
                    <div className="contactPage--input d-flex justify-content-center m-auto">
                      <h5 className="mb-3">ĐĂNG KÝ TƯ VẤN MIỄN PHÍ VỀ THỦ TỤC</h5>
                      <input required name="name" type="text" placeholder="Họ Và Tên " id="name" />
                      <input required name="andress" type="text" placeholder="Nơi Ở Hiện Tại" id="andress" />
                      <input required name="sdt" type="tel" placeholder="Số Điện Thoại " id="sdt" />
                      <input required name="money" type="text" placeholder="Số Tiền Muốn Vay" id="money" />
                      <input required name="working" type="text" placeholder="Công Việc Đang Làm" id="working" />
                      <select required name="hinhthucvay" id="hinhthucvay">
                        <option value>Hình Thức Vay Vốn</option>
                        <option value="Vay Theo Lương Chuyển Khoản">Vay Theo Lương Chuyển Khoản</option>
                        <option value="Vay Theo Lương Tiền Mặt">Vay Theo Lương Tiền Mặt</option>
                        <option value="Lao Động Tự Do (Tạm Dừng Hỗ Trợ)">Lao Động Tự Do ( Tạm Dừng Hỗ Trợ )</option>
                        <option value="Vay Theo Hợp Đồng BHNT">Vay Theo Hợp Đồng BHNT</option>
                      </select>
                      <button type="submit" className="contactPage--form__submit">
                        ĐĂNG KÝ THÔNG TIN TƯ VẤN
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/*------------------- PAGE 6 -------------------*/}
          <section className="page6" id="page6">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                    <div className="page6__title">
                      <h3>Bảng tính lãi suất minh họa</h3>
                    </div>
                    <div className="page6">
                      <p> - Số tiền khách hàng có nghĩa vụ phải trả hàng tháng là cố định ( Ví dụ: Vay 50 triệu trong 36 tháng. Mỗi tháng phải trả 1,8 triệu trong đó đã bao gồm cả gốc & lãi. Ngoài ra không phát sinh chi phí ngoài. Không phí hồ sơ vay vốn )</p>
                      <p>- Ví dụ cụ thể: Khoản vay 100 triệu trong 48 tháng với lãi suất 0,6%/tháng</p>
                      <p>Gốc trả hàng tháng: 100.000.000 : 48 = 2.084.000 đ</p>
                      <p>Lãi trả hàng tháng: 100.000.000 x 0,6% = 600.000 đ</p>
                      <p>Tổng số tiền Khách hàng trả hàng tháng: 2.084.000 + 600.000 = 2.684.000 đ</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="page6__title">
                      <h4>Lãi suất vay tính chấp ngân hàng được tính:</h4>
                    </div>
                    <div className="page6">
                      <p>+ Dư nợ giảm dần từ 18% đến 38%/năm tương đương lãi suất phẳng: 0,8% đến 1.8%/tháng ( Lãi suất khách hàng khi vay tùy thuộc vào đối tượng khách hàng tại Vietcombank, ưu đãi gói vay, ... Nhưng cao nhất là 1.8%/tháng)</p>
                      <p>+ Lãi suất vay tín chấp là cố định trong suốt quá trình khách hàng trả nợ cho Ngân hàng.</p>
                    </div>
                </div>
              </div>
            </div>
          </section>
          {/*------------------- PAGE 7 -------------------*/}
          <section className="page7" id="page7">
            <div className="container">
              <div className="page7__title text-center">
                <h3 style={{ width: '400px', margin: 'auto', fontWeight: 600 }}>CẢM NHẬN KHÁCH HÀNG VỀ DỊCH VỤ / SẢN PHẨM
                </h3>
                <h5><i>120 NĂM TRONG NGÀNH, CHÚNG TÔI LUÔN MANG HẠNH PHÚC ĐẾN CHO KHÁCH HÀNG</i></h5>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <img className="imgPeople" src={khachhang1} alt="" />
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <img className="imgPeople" src={khachhang2} alt="" />
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <img className="imgPeople" src={khachhang3} alt="" />
                </div>
              </div>
            </div>
          </section>
          {/*------------------- PAGE 8 -------------------*/}
          <section className="page8" id="page8">
            <div className="container ">
              <div className="row">
                <div className="col-md-12 col-lg-7 mt-5">
                  <img className="img_thoiGian" src={thoigian} alt="" />
                  <div className="thoiGian d-flex justify-content-center flex-column">
                    <p className="text-center">Thời gian ưu đãi</p>
                    <div className="d-flex justify-content-center align-items-center ">
                      <div className="oVuong">
                        <span id="days" />
                        <p className="thoiGian__p" >days</p>
                      </div>
                      <div className="oVuong">
                        <span id="hours" />
                        <p className="thoiGian__p" >hours</p>
                      </div>
                      <div className="oVuong">
                        <span id="minutes" />
                        <p className="thoiGian__p" >min</p>
                      </div>
                      <div className="oVuong">
                        <span id="seconds" />
                        <p className="thoiGian__p" >sec</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-5 mt-5">
                  <div className="form__title text-center m-auto">
                    <h6>Thời gian ưu đãi</h6>
                    <p>Sau khi đăg ký vay.</p>
                    <p>Bộ phận CSKH của HSBC sẽ liên hệ với Anh/Chị để xác nhận thông tin</p>
                    <p>và hướng dẫn anh chị làm thủ tục vay vốn ngay lập tức</p>
                  </div>
                  <form className="contactPage--form text-center" action onSubmit={sendEmail}>
                    <div className="contactPage--input d-flex justify-content-center m-auto">
                      <div className="namePhone d-flex justify-content-between align-items-center">
                        <input required name="name" type="text" placeholder="Họ Và Tên " id="name" />
                        <input required name="sdt" type="tel" placeholder="Số Điện Thoại " id="sdt" />
                      </div>
                      <input required name="andress" type="text" placeholder="Nơi Ở Hiện Tại" id="andress" />
                      <input required name="money" type="text" placeholder="Số Tiền Muốn Vay" id="money" />
                      <input required name="working" type="text" placeholder="Công Việc Đang Làm" id="working" />
                      <select required name="hinhthucvay" id="hinhthucvay">
                        <option value>Hình Thức Vay Vốn</option>
                        <option value="Vay Theo Lương Chuyển Khoản">Vay Theo Lương Chuyển Khoản</option>
                        <option value="Vay Theo Lương Tiền Mặt">Vay Theo Lương Tiền Mặt</option>
                        <option value="Lao Động Tự Do (Tạm Dừng Hỗ Trợ)">Lao Động Tự Do ( Tạm Dừng Hỗ Trợ )</option>
                        <option value="Vay Theo Hợp Đồng BHNT">Vay Theo Hợp Đồng BHNT</option>
                      </select>
                      <button type="submit" className="contactPage--form__submit">
                        ĐĂNG KÝ THÔNG TIN TƯ VẤN
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/*------------------- PAGE 9 -------------------*/}
          <section className="page9 text-center" id="page9">
            <div className="container d-flex justify-content-between align-items-center flex-column">
              <div className="dotted" />
              <div className="chinhSach">
                <h6>CHÍNH SÁCH CHO VAY – QUÝ KHÁCH LƯU Ý</h6>
                <p className="ladi-headline">Tùy Nhu Cầu mà các khoản vay thời gian vay tối thiểu là 12 tháng ( 365 ngày
                  ) và tối đa 60 tháng ( 1800 ngày)
                  <br />Tùy vào nhu cầu lãi suất tối thiểu 5.7%/1năm – lãi suất tối đa 10.3%/1 năm
                  <br />Các khoản vay dài hạn sẽ được hỗ trợ ưu đãi:
                  <br />Ví dụ: Nguyên Văn A vay 30 triệu trong 12 tháng và trả góp mỗi tháng gốc + lãi là 2.750.000
                  vậy sau 12 tháng tổng lãi + gốc là 33 triệu suy ra số tiền lãi là 3 triệu vậy lãi suất: 10%/năm
                  - đây là tạm tính còn thực tế là lãi suất tính trên dư nợ giảm dần nên khách hàng sẽ chỉ phải
                  trả ít hơn khi còn nợ ít.
                  <br />Nhưng nếu Nguyễn Văn A vạy 30 triệu trả trong vòng 60 tháng thì mỗi tháng sẽ phải trả góp
                  762.000đ vậy tổng sau 60 tháng cả gốc và lãi là : 45.720.000 trừ đi gốc tiền lãi là 15.720.000
                  trong 5 năm thì mỗi năm lãi là 3.144.000 sấp sỉ 10%/năm. đây là tạm tính còn thực tế là lãi suất
                  tính trên dư nợ giảm dần nên khách hàng sẽ chỉ phải trả ít hơn khi còn nợ ít.
                  <br />Khách vay số tiền càng lớn lãi suất càng thấp.
                  <br />Thời hạn khoản vay mặc định, có thể trả trước hạn linh hoạt( không phí phạt), tối thiểu 61
                  ngày (3 tháng) và tối đa đến 12 tháng (1 năm) lãi suất vay trong hạn tối thiểu 1%/năm, tối đa
                  12%/năm
                  <br />Ví dụ: khách thực hiện khoản vay 10.000.000đ trong 1 năm, lãi suất trên 1 năm sẽ là
                  1.200.000đ. Tổng số tiền phải trả sau 1 năm sẽ là 11.200.000 đ.
                  <br />Miễn phí bảo hiểm tài sản và dịch vụ<br />
                </p>
              </div>
              <div className="luuY">
                <h6>MỘT VÀI LƯU Ý KHI VAY TÍN CHẤP</h6>
                <p>Vay tín chấp mang đến nhiều lợi ích nhưng bạn cũng nên lưu ý thêm những mục sau đây nếu quyết
                  định vay tín chấp</p>
                <ul className="list__luuY">
                  <li className="indam">Tính toán khả năng trả nợ</li>
                  <li>Trước khi nhận khoản vay bạn cần phải biết chính xác về khả năng thanh toán hàng tháng của
                    mình, bạn cần biết số tiền phải trả sẽ chiếm bao nhiêu trong thu nhập hàng tháng và bạn có
                    thể trả nó mà vẫn sống bình thường được. Số tiền chi trả hàng tháng không nên vượt quá 40%
                    tổng thu nhập hàng tháng của bạn</li>
                  <li className="indam">Cần lưu ý tất toán trước hạn</li>
                  <li>Các ngân hàng sẽ bị thiệt nếu bạn trả nợ sớm, do đó các ngân hàng thường đưa ra một con số %
                    bạn phải trả thêm nếu bạn tiến hành tất toán trước hạn</li>
                  <li className="indam">Hiểu đúng về cách tính lãi suất vay</li>
                  <li>Lãi suất phẳng là gì ?</li>
                  <li>Khác với lãi suất thả nổi, lãi suất phẳng (Lãi suất trên dư nợ gốc) là lãi sẽ được tính trên
                    số tiền bạn vay ban đầu trong suốt thời hạn vay.</li>
                  <li>VD: Khi bạn vay 100.000.000đ, thời hạn 1 năm (12 tháng). Trong suốt 12 tháng, lãi luôn được
                    tính trên số tiền nợ gốc 100.000.000đ.</li>
                  <li>Lãi suất trên dư nợ giảm dần</li>
                  <li>Đây là lãi sẽ chỉ tính trên số tiền thực tế bạn còn nợ, sau khi đã trừ ra phần tiền gốc bạn
                    đã trả trong các tháng trước đó.</li>
                  <li>Công thức chuyển đổi như sau:</li>
                  <li>(Lãi suất phẳng) = i x (n+1) / (2 x n)</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
        {/*------------------- FOOTER -------------------*/}
        <footer className="footer">
          <div className="container">
            <div className="row justify-content-between">
              <div className="doiTac col-md-12 col-lg-12">
                <div className="doiTac__title text-center">
                  <h3>ĐỐI TÁC CỦA CHÚNG TÔI</h3>
                </div>
                <div className="doiTac__lists">
                  <div className="doiTac__list">
                    <img src={doitac1} alt="" />
                  </div>
                  <div className="doiTac__list">
                    <img className="imgAri" src={doitac2} alt="" />
                  </div>
                  <div className="doiTac__list">
                    <img src={doitac3} alt="" />
                  </div>
                  <div className="doiTac__list">
                    <img src={doitac4} alt="" />
                  </div>
                  <div className="doiTac__list">
                    <img className="imgTech" src={doitac5} alt="" />
                  </div>
                  <div className="doiTac__list">
                    <img src={doitac6} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="footer__title">HỆ THỐNG NGÂN HÀNG</div>
                <ul>
                  <li>
                    <i className="fa fa-home" />
                    Address: Hà Nội , Hồ Chí Minh và hơn 20 tỉnh thành khác
                  </li>
                  <li>
                    <i className="fa fa-phone" />
                    Hotline: +84383002528
                  </li>
                </ul>
              </div>
              <div className="col-md-12 col-lg-5">
                <div className="footer__title">CUSTOMER SERVICE</div>
                <ul className="footer__ul d-flex justify-content-between align-items-center">
                  <li>
                    <i className="fas fa-award" />
                    Nhiệt Tình
                  </li>
                  <li>
                    <i className="fas fa-lock" />
                    Bảo Mật
                  </li>
                </ul>
                <ul className="footer__ul d-flex justify-content-between align-items-center">
                  <li>
                    <i className="fas fa-list-alt" />
                    Uy Tín
                  </li>
                  <li>
                    <i className="far fa-comment-dots" />
                    0383002528
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <div className="overflowPage" onClick={handleCloseForm} />
        <div className="formPage">
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <div className="row d-flex flex-column justify-content-center align-items-center">
              <div className="formPage--forms col-md-8 col-lg-8 ">
                <div className="formPage--off" onClick={handleCloseForm}><i className="fas fa-times" /></div>
                <div className="formPage--content">ĐĂNG KÝ TƯ VẤN</div>
                <form className="contactPage--form" action onSubmit={sendEmail}>
                      <input required name="name" type="text" placeholder="Họ Và Tên " id="name" />
                      <input required name="andress" type="text" placeholder="Nơi Ở Hiện Tại" id="andress" />
                      <input required name="sdt" type="tel" placeholder="Số Điện Thoại " id="sdt" />
                      <input required name="money" type="text" placeholder="Số Tiền Muốn Vay" id="money" />
                      <input required name="working" type="text" placeholder="Công Việc Đang Làm" id="working" />
                  <select required name="hinhthucvay" id="hinhthucvay">
                    <option value>Hình Thức Vay Vốn</option>
                    <option value="Vay Theo Lương Chuyển Khoản">Vay Theo Lương Chuyển Khoản</option>
                    <option value="Vay Theo Lương Tiền Mặt">Vay Theo Lương Tiền Mặt</option>
                    <option value="Lao Động Tự Do (Tạm Dừng Hỗ Trợ)">Lao Động Tự Do ( Tạm Dừng Hỗ Trợ )</option>
                    <option value="Vay Theo Hợp Đồng BHNT">Vay Theo Hợp Đồng BHNT</option>
                  </select>
                  <p>* Thông tin của quý khách luôn được bảo mật tuyệt đối.</p>
                  <button type="submit" className="contactPage--form__submit">
                    ĐĂNG KÝ THÔNG TIN TƯ VẤN
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="dangkytuvan">
          <button className="clickDialog" onClick={handleForm}>ĐĂNG KÝ TƯ VẤN</button>
        </div>
        <div className="telFix">
          <a href="tel:0383002528">
            <i className="fa fa-phone" />
          </a>
        </div>
        <div className="zaloFix">
          <a href="https://zalo.me/0383002528">
            <img src={zalo} alt="" />
          </a>
        </div>
        <Dialog></Dialog>
      </div>
    </div>
  );
}

export default FullPage;
