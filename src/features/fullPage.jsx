/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import $ from "jquery"
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
import axios from "axios"
import Swal from 'sweetalert2'

FullPage.propTypes = {

};

function FullPage(props) {
  const [name, setName] = useState("")
  const [andress, setAndress] = useState("")
  const [tel, setTel] = useState("")
  const [money, setMoney] = useState("")
  const [type, setType] = useState("")
  const [working, setWorking] = useState("")
  const [sent, setSent] = useState(false)

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
  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleAndress = (e) => {
    setAndress(e.target.value)
  }
  const handleTel = (e) => {
    setTel(e.target.value)
  }
  const handleMoney = (e) => {
    setMoney(e.target.value)
  }
  const handleWorking = (e) => {
    setWorking(e.target.value)
  }
  const handleType = (e) => {
    setType(e.target.value)
  }
  const sendEmail = (e) => {
    e.preventDefault();
    let data = {
      name: name,
      andress: andress,
      tel: tel,
      money: money,
      working: working,
      type: type,
    }
    axios.post('https://dry-bastion-59034.herokuapp.com/api/mail', data)
      .then(res => {
        Swal.fire(
          '????ng k?? th??nh c??ng !',
          'Ch??ng t??i s??? li??n h??? v???i b???n s???m nh???t!',
          'success'
        )
        setSent(true, resetForm())
      })
      .catch(() => {
        console.log("L???i")
      })

  }
  const resetForm = () => {

    setName("")
    setAndress("")
    setMoney("")
    setTel("")
    setWorking("")
    setType("")
    setTimeout(() => {
      setSent(false)
    }, 3000);
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
                <a className="header__list--a" onClick={handleForm} href>QUY TR??NH VAY</a>
              </li>
              <li className="header__list clickDialog">
                <a className="header__list--a" onClick={handleForm} href>????NG K?? T?? V???N</a>
              </li>
              <li className="header__list clickDialog">
                <a className="header__list--a" onClick={handleForm} href>??U ????I</a>
              </li>
              <li className="header__list">
                <a className="header__list--a" href="tel:0383002528">LI??N H???</a>
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
                <h5>VAY T??N CH???P HSBC L??I SU???T TH???P GI???I NG??N NHANH</h5>
                <h5 className="mt-1">Hotline: 038.300.2528</h5>
              </div>
              <div className="row">
                <div className="page1__left col-md-12 col-lg-7">
                  <img src={banner} alt="" />
                </div>
                <div className="page1__right col-md-12 col-lg-5 d-flex justify-content-center ">
                  <form className="contactPage--form text-center" onSubmit={sendEmail}>
                    <div className="contactPage--input d-flex justify-content-center m-auto">
                      <h5 className="mb-3">????NG K?? TH??NG TIN T?? V???N</h5>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="H??? V?? T??n "
                        id="name"
                        value={name}
                        onChange={handleName}
                      />
                      <input
                        required
                        name="andress"
                        type="text"
                        placeholder="N??i ??? Hi???n T???i"
                        id="andress"
                        value={andress}
                        onChange={handleAndress}
                      />
                      <input
                        required
                        name="sdt"
                        type="tel"
                        placeholder="S??? ??i???n Tho???i "
                        id="sdt"
                        value={tel}
                        onChange={handleTel}
                      />
                      <input
                        required
                        name="money"
                        type="text"
                        placeholder="S??? Ti???n Mu???n Vay"
                        id="money"
                        value={money}
                        onChange={handleMoney}
                      />
                      <input
                        required
                        name="working"
                        type="text"
                        placeholder="C??ng Vi???c ??ang L??m"
                        id="working"
                        onChange={handleWorking}
                        value={working}
                      />
                      <select required name="hinhthucvay" id="hinhthucvay" value={type} onChange={handleType}>
                        <option value>H??nh Th???c Vay V???n</option>
                        <option value="Vay Theo L????ng Chuy???n Kho???n">Vay Theo L????ng Chuy???n Kho???n</option>
                        <option value="Vay Theo L????ng Ti???n M???t">Vay Theo L????ng Ti???n M???t</option>
                        <option value="Lao ?????ng T??? Do (T???m D???ng H??? Tr???)">Lao ?????ng T??? Do ( T???m D???ng H??? Tr??? )</option>
                        <option value="Vay Theo H???p ?????ng BHNT">Vay Theo H???p ?????ng BHNT</option>
                      </select>
                      <p>* Th??ng tin c???a qu?? kh??ch lu??n ???????c b???o m???t tuy???t ?????i.</p>
                      <button type="submit" className="contactPage--form__submit">
                        ????NG K?? TH??NG TIN T?? V???N
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
                      VAY T??N CH???P L?? G???
                    </h5>
                  </div>
                  <p className="page2__content--p"> Vay t??n ch???p kh??ng c???n th??? ch???p t??i s???n d???m b???o (t??? ch???c cho vay
                    kh??ng y??u c???u b???t k??? t??i s???n n??o),
                    d??? ???????c m???t kho???n vay kh??c b???n c???n ph???i c?? t??i s???n ????? th??? ch???p cho t??? ch???c cho vay , v?? d???:
                    quy???n s??? d???ng ?????t,
                    xe h??i. Th??? t???c h??? s?? ????n gi???n: kh??ch h??ng cung c???p gi???y t??? c?? nh??n ??t nh???t, ho??n th??nh ????n
                    gi???n h??n nhi???u so v???i
                    m???t kho???n vay th??? ch???p.
                  </p>
                </div>
                <div className="page2__img col-md-6 col-lg-6">
                  <img src={vaytinchaplagi1} alt="" />
                </div>
                <div className="page2__list col-md-6 col-lg-6 d-flex justify-content-center flex-column">
                  <img className="mt-2" src={vaytinchaplagi2} alt="" />
                  <button className="page2__list--button m-auto clickDialog " onClick={handleForm}>
                    ????NG K?? T?? V???N
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
                  L???I ??CH T???I ??U KHI VAY THEO L????NG
                </h5>
              </div>
              <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <div className="loiIch d-flex justify-content-center align-items-center flex-column text-center">
                    <div className="loiIch__img">
                      <img src={icon1} alt="" />
                    </div>
                    <div className="loiIch__title">
                      <h6>Th???i gian vay ti??u d??ng linh ho???t</h6>
                    </div>
                    <p className="loiIch__content">T??? 12 th??ng ?????n 60 th??ng</p>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <div className="loiIch d-flex justify-content-center align-items-center flex-column text-center float-right">
                    <div className="loiIch__img">
                      <img src={icon2} alt="" />
                    </div>
                    <div className="loiIch__title">
                      <h6>L??i su???t vay ti??u d??ng H???P D???N</h6>
                    </div>
                    <p className="loiIch__content">T??? 0,6% , ?????n 1,6%/th??ng Kh??ng m???t ph?? b???o hi???m kho???n</p>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <div className="loiIch d-flex justify-content-center align-items-center flex-column text-center ">
                    <div className="loiIch__img">
                      <img src={icon3} alt="" />
                    </div>
                    <div className="loiIch__title">
                      <h6>Kho???n vay l??n ?????n 500 tri???u</h6>
                    </div>
                    <p className="loiIch__content">Kh??ng b???o l??nh, kh??ng th??? ch???p, kh??ng th???c ?????a th???m ?????nh, ch??? g???i
                      ??i???n</p>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <div className="loiIch d-flex justify-content-center align-items-center flex-column text-center float-right">
                    <div className="loiIch__img ">
                      <img src={icon4} alt="" />
                    </div>
                    <div className="loiIch__title">
                      <h6>Gi???i ng??n sau 24h</h6>
                    </div>
                    <p className="loiIch__content" />
                  </div>
                </div>
              </div>
              <button className="page2__list--button m-auto clickDialog " onClick={handleForm}>
                ????NG K?? T?? V???N
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
                ????NG K?? T?? V???N
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
                  <form className="contactPage--form text-center" onSubmit={sendEmail}>
                    <div className="contactPage--input d-flex justify-content-center m-auto">
                      <h5 className="mb-3">????NG K?? T?? V???N MI???N PH?? V??? TH??? T???C</h5>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="H??? V?? T??n "
                        id="name"
                        value={name}
                        onChange={handleName}
                      />
                      <input
                        required
                        name="andress"
                        type="text"
                        placeholder="N??i ??? Hi???n T???i"
                        id="andress"
                        value={andress}
                        onChange={handleAndress}
                      />
                      <input
                        required
                        name="sdt"
                        type="tel"
                        placeholder="S??? ??i???n Tho???i "
                        id="sdt"
                        value={tel}
                        onChange={handleTel}
                      />
                      <input
                        required
                        name="money"
                        type="text"
                        placeholder="S??? Ti???n Mu???n Vay"
                        id="money"
                        value={money}
                        onChange={handleMoney}
                      />
                      <input
                        required
                        name="working"
                        type="text"
                        placeholder="C??ng Vi???c ??ang L??m"
                        id="working"
                        onChange={handleWorking}
                        value={working}
                      />
                      <select required name="hinhthucvay" id="hinhthucvay" value={type} onChange={handleType}>
                        <option value>H??nh Th???c Vay V???n</option>
                        <option value="Vay Theo L????ng Chuy???n Kho???n">Vay Theo L????ng Chuy???n Kho???n</option>
                        <option value="Vay Theo L????ng Ti???n M???t">Vay Theo L????ng Ti???n M???t</option>
                        <option value="Lao ?????ng T??? Do (T???m D???ng H??? Tr???)">Lao ?????ng T??? Do ( T???m D???ng H??? Tr??? )</option>
                        <option value="Vay Theo H???p ?????ng BHNT">Vay Theo H???p ?????ng BHNT</option>
                      </select>
                      <button type="submit" className="contactPage--form__submit">
                        ????NG K?? TH??NG TIN T?? V???N
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
                    <h3>B???ng t??nh l??i su???t minh h???a</h3>
                  </div>
                  <div className="page6">
                    <p> - S??? ti???n kh??ch h??ng c?? ngh??a v??? ph???i tr??? h??ng th??ng l?? c??? ?????nh ( V?? d???: Vay 50 tri???u trong 36 th??ng. M???i th??ng ph???i tr??? 1,8 tri???u trong ???? ???? bao g???m c??? g???c & l??i. Ngo??i ra kh??ng ph??t sinh chi ph?? ngo??i. Kh??ng ph?? h??? s?? vay v???n )</p>
                    <p>- V?? d??? c??? th???: Kho???n vay 100 tri???u trong 48 th??ng v???i l??i su???t 0,6%/th??ng</p>
                    <p>G???c tr??? h??ng th??ng: 100.000.000 : 48 = 2.084.000 ??</p>
                    <p>L??i tr??? h??ng th??ng: 100.000.000 x 0,6% = 600.000 ??</p>
                    <p>T???ng s??? ti???n Kh??ch h??ng tr??? h??ng th??ng: 2.084.000 + 600.000 = 2.684.000 ??</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="page6__title">
                    <h4>L??i su???t vay t??n ch???p ng??n h??ng ???????c t??nh:</h4>
                  </div>
                  <div className="page6">
                    <p>+ D?? n??? gi???m d???n t??? 18% ?????n 38%/n??m t????ng ??????ng l??i su???t ph???ng: 0,8% ?????n 1.8%/th??ng ( L??i su???t khi vay ph??? thu???c v??o m???c l????ng v?? ??i???u ki???n c???a kh??ch h??ng, ??u ????i g??i vay,.. Nh??ng cao nh???t l?? 1,8%/th??ng )</p>
                    <p>+ L??i su???t vay t??n ch???p l?? c??? ?????nh trong su???t qu?? tr??nh kh??ch h??ng tr??? n??? cho Ng??n h??ng.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*------------------- PAGE 7 -------------------*/}
          <section className="page7" id="page7">
            <div className="container">
              <div className="page7__title text-center">
                <h3 style={{ width: '400px', margin: 'auto', fontWeight: 600 }}>C???M NH???N KH??CH H??NG V??? D???CH V??? / S???N PH???M
                </h3>
                <h5><i>120 N??M TRONG NG??NH, CH??NG T??I LU??N MANG H???NH PH??C ?????N CHO KH??CH H??NG</i></h5>
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
                    <p className="text-center">Th???i gian ??u ????i</p>
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
                    <h6>Th???i gian ??u ????i</h6>
                    <p>Sau khi ????g k?? vay.</p>
                    <p>B??? ph???n CSKH c???a HSBC s??? li??n h??? v???i Anh/Ch??? ????? x??c nh???n th??ng tin</p>
                    <p>v?? h?????ng d???n anh ch??? l??m th??? t???c vay v???n ngay l???p t???c</p>
                  </div>
                  <form className="contactPage--form text-center" onSubmit={sendEmail}>
                    <div className="contactPage--input d-flex justify-content-center m-auto">
                      <div className="namePhone d-flex justify-content-between align-items-center">
                        <input
                          required
                          name="name"
                          type="text"
                          placeholder="H??? V?? T??n "
                          id="name"
                          value={name}
                          onChange={handleName}
                        />
                        <input
                          required
                          name="sdt"
                          type="tel"
                          placeholder="S??? ??i???n Tho???i "
                          id="sdt"
                          value={tel}
                          onChange={handleTel}
                        />
                      </div>
                      <input
                        required
                        name="andress"
                        type="text"
                        placeholder="N??i ??? Hi???n T???i"
                        id="andress"
                        value={andress}
                        onChange={handleAndress}
                      />
                      <input
                        required
                        name="money"
                        type="text"
                        placeholder="S??? Ti???n Mu???n Vay"
                        id="money"
                        value={money}
                        onChange={handleMoney}
                      />
                      <input
                        required
                        name="working"
                        type="text"
                        placeholder="C??ng Vi???c ??ang L??m"
                        id="working"
                        onChange={handleWorking}
                        value={working}
                      />
                      <select required name="hinhthucvay" id="hinhthucvay" value={type} onChange={handleType}>
                        <option value>H??nh Th???c Vay V???n</option>
                        <option value="Vay Theo L????ng Chuy???n Kho???n">Vay Theo L????ng Chuy???n Kho???n</option>
                        <option value="Vay Theo L????ng Ti???n M???t">Vay Theo L????ng Ti???n M???t</option>
                        <option value="Lao ?????ng T??? Do (T???m D???ng H??? Tr???)">Lao ?????ng T??? Do ( T???m D???ng H??? Tr??? )</option>
                        <option value="Vay Theo H???p ?????ng BHNT">Vay Theo H???p ?????ng BHNT</option>
                      </select>
                      <button type="submit" className="contactPage--form__submit">
                        ????NG K?? TH??NG TIN T?? V???N
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
                <h6>CH??NH S??CH CHO VAY ??? QU?? KH??CH L??U ??</h6>
                <p className="ladi-headline">T??y Nhu C???u m?? c??c kho???n vay th???i gian vay t???i thi???u l?? 12 th??ng ( 365 ng??y
                  ) v?? t???i ??a 60 th??ng ( 1800 ng??y)
                  <br />T??y v??o nhu c???u l??i su???t t???i thi???u 5.7%/1n??m ??? l??i su???t t???i ??a 10.3%/1 n??m
                  <br />C??c kho???n vay d??i h???n s??? ???????c h??? tr??? ??u ????i:
                  <br />V?? d???: Nguy??n V??n A vay 30 tri???u trong 12 th??ng v?? tr??? g??p m???i th??ng g???c + l??i l?? 2.750.000
                  v???y sau 12 th??ng t???ng l??i + g???c l?? 33 tri???u suy ra s??? ti???n l??i l?? 3 tri???u v???y l??i su???t: 10%/n??m
                  - ????y l?? t???m t??nh c??n th???c t??? l?? l??i su???t t??nh tr??n d?? n??? gi???m d???n n??n kh??ch h??ng s??? ch??? ph???i
                  tr??? ??t h??n khi c??n n??? ??t.
                  <br />Nh??ng n???u Nguy???n V??n A v???y 30 tri???u tr??? trong v??ng 60 th??ng th?? m???i th??ng s??? ph???i tr??? g??p
                  762.000?? v???y t???ng sau 60 th??ng c??? g???c v?? l??i l?? : 45.720.000 tr??? ??i g???c ti???n l??i l?? 15.720.000
                  trong 5 n??m th?? m???i n??m l??i l?? 3.144.000 s???p s??? 10%/n??m. ????y l?? t???m t??nh c??n th???c t??? l?? l??i su???t
                  t??nh tr??n d?? n??? gi???m d???n n??n kh??ch h??ng s??? ch??? ph???i tr??? ??t h??n khi c??n n??? ??t.
                  <br />Kh??ch vay s??? ti???n c??ng l???n l??i su???t c??ng th???p.
                  <br />Th???i h???n kho???n vay m???c ?????nh, c?? th??? tr??? tr?????c h???n linh ho???t( kh??ng ph?? ph???t), t???i thi???u 61
                  ng??y (3 th??ng) v?? t???i ??a ?????n 12 th??ng (1 n??m) l??i su???t vay trong h???n t???i thi???u 1%/n??m, t???i ??a
                  12%/n??m
                  <br />V?? d???: kh??ch th???c hi???n kho???n vay 10.000.000?? trong 1 n??m, l??i su???t tr??n 1 n??m s??? l??
                  1.200.000??. T???ng s??? ti???n ph???i tr??? sau 1 n??m s??? l?? 11.200.000 ??.
                  <br />Mi???n ph?? b???o hi???m t??i s???n v?? d???ch v???<br />
                </p>
              </div>
              <div className="luuY">
                <h6>M???T V??I L??U ?? KHI VAY T??N CH???P</h6>
                <p>Vay t??n ch???p mang ?????n nhi???u l???i ??ch nh??ng b???n c??ng n??n l??u ?? th??m nh???ng m???c sau ????y n???u quy???t
                  ?????nh vay t??n ch???p</p>
                <ul className="list__luuY">
                  <li className="indam">T??nh to??n kh??? n??ng tr??? n???</li>
                  <li>Tr?????c khi nh???n kho???n vay b???n c???n ph???i bi???t ch??nh x??c v??? kh??? n??ng thanh to??n h??ng th??ng c???a
                    m??nh, b???n c???n bi???t s??? ti???n ph???i tr??? s??? chi???m bao nhi??u trong thu nh???p h??ng th??ng v?? b???n c??
                    th??? tr??? n?? m?? v???n s???ng b??nh th?????ng ???????c. S??? ti???n chi tr??? h??ng th??ng kh??ng n??n v?????t qu?? 40%
                    t???ng thu nh???p h??ng th??ng c???a b???n</li>
                  <li className="indam">C???n l??u ?? t???t to??n tr?????c h???n</li>
                  <li>C??c ng??n h??ng s??? b??? thi???t n???u b???n tr??? n??? s???m, do ???? c??c ng??n h??ng th?????ng ????a ra m???t con s??? %
                    b???n ph???i tr??? th??m n???u b???n ti???n h??nh t???t to??n tr?????c h???n</li>
                  <li className="indam">Hi???u ????ng v??? c??ch t??nh l??i su???t vay</li>
                  <li>L??i su???t ph???ng l?? g?? ?</li>
                  <li>Kh??c v???i l??i su???t th??? n???i, l??i su???t ph???ng (L??i su???t tr??n d?? n??? g???c) l?? l??i s??? ???????c t??nh tr??n
                    s??? ti???n b???n vay ban ?????u trong su???t th???i h???n vay.</li>
                  <li>VD: Khi b???n vay 100.000.000??, th???i h???n 1 n??m (12 th??ng). Trong su???t 12 th??ng, l??i lu??n ???????c
                    t??nh tr??n s??? ti???n n??? g???c 100.000.000??.</li>
                  <li>L??i su???t tr??n d?? n??? gi???m d???n</li>
                  <li>????y l?? l??i s??? ch??? t??nh tr??n s??? ti???n th???c t??? b???n c??n n???, sau khi ???? tr??? ra ph???n ti???n g???c b???n
                    ???? tr??? trong c??c th??ng tr?????c ????.</li>
                  <li>C??ng th???c chuy???n ?????i nh?? sau:</li>
                  <li>(L??i su???t ph???ng) = i x (n+1) / (2 x n)</li>
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
                  <h3>?????I T??C C???A CH??NG T??I</h3>
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
                <div className="footer__title">H??? TH???NG NG??N H??NG</div>
                <ul>
                  <li>
                    <i className="fa fa-home" />
                    Address: H?? N???i , H??? Ch?? Minh v?? h??n 20 t???nh th??nh kh??c
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
                    Nhi???t T??nh
                  </li>
                  <li>
                    <i className="fas fa-lock" />
                    B???o M???t
                  </li>
                </ul>
                <ul className="footer__ul d-flex justify-content-between align-items-center">
                  <li>
                    <i className="fas fa-list-alt" />
                    Uy T??n
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
                <div className="formPage--content">????NG K?? T?? V???N</div>
                <form className="contactPage--form" onSubmit={sendEmail}>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="H??? V?? T??n "
                    id="name"
                    value={name}
                    onChange={handleName}
                  />
                  <input
                    required
                    name="andress"
                    type="text"
                    placeholder="N??i ??? Hi???n T???i"
                    id="andress"
                    value={andress}
                    onChange={handleAndress}
                  />
                  <input
                    required
                    name="sdt"
                    type="tel"
                    placeholder="S??? ??i???n Tho???i "
                    id="sdt"
                    value={tel}
                    onChange={handleTel}
                  />
                  <input
                    required
                    name="money"
                    type="text"
                    placeholder="S??? Ti???n Mu???n Vay"
                    id="money"
                    value={money}
                    onChange={handleMoney}
                  />
                  <input
                    required
                    name="working"
                    type="text"
                    placeholder="C??ng Vi???c ??ang L??m"
                    id="working"
                    onChange={handleWorking}
                    value={working}
                  />
                  <select required name="hinhthucvay" id="hinhthucvay" value={type} onChange={handleType}>
                    <option value>H??nh Th???c Vay V???n</option>
                    <option value="Vay Theo L????ng Chuy???n Kho???n">Vay Theo L????ng Chuy???n Kho???n</option>
                    <option value="Vay Theo L????ng Ti???n M???t">Vay Theo L????ng Ti???n M???t</option>
                    <option value="Lao ?????ng T??? Do (T???m D???ng H??? Tr???)">Lao ?????ng T??? Do ( T???m D???ng H??? Tr??? )</option>
                    <option value="Vay Theo H???p ?????ng BHNT">Vay Theo H???p ?????ng BHNT</option>
                  </select>
                  <p>* Th??ng tin c???a qu?? kh??ch lu??n ???????c b???o m???t tuy???t ?????i.</p>
                  <button type="submit" className="contactPage--form__submit">
                    ????NG K?? TH??NG TIN T?? V???N
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="dangkytuvan">
          <button className="clickDialog" onClick={handleForm}>????NG K?? T?? V???N</button>
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
