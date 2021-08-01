import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import svg from "../../src/assest/images/notify.svg"
import $ from "jquery"
Dialog.propTypes = {

};
const Names = [
    {
        name: "Vũ Quang Huy"
    },
    {
        name: "Nguyễn Văn Đông"
    },
    {
        name: "Phạm Ngọc Minh Thu"
    },
    {
        name: "Cao Kỳ Duyên"
    },
    {
        name: "Vũ Hoàng Đức Minh"
    },
    {
        name: "Phạm Thị Bích Hằng"
    },
    {
        name: "Nguyễn Việt Hoàng"
    },
    {
        name: "Bùi Ngọc Huy"
    },
    {
        name: "Quách Thành Đạt"
    },
    {
        name: "Hoàng Gia Bảo"
    },
    {
        name: "Nguyễn Thị Kim Ngân"
    },
    {
        name: "Phạm Bích Ngọc"
    },
    {
        name: "Tống Anh Quân"
    },
    {
        name: "Nguyễn Sỹ Hải Long"
    },
    {
        name: "Đoàn Văn Khiêm"
    }
]

function Dialog(props) {
    const [toggle, setToggle] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            $(".notify").addClass("notifyDiChuyen");
            var item = Names[Math.floor(Math.random() * Names.length)];
            $(".notify__h6").text(item.name)
            setTimeout(() => {
                if ($(".notifyDiChuyen")) {
                    $(".notify").removeClass("notifyDiChuyen")
                    setToggle(!toggle)
                }
            }, 2500);
        }, 7000);

    }, [toggle])
    return (
        <div className="notify d-flex justify-content-start align-items-center">
            <img src={svg} alt="" />
            <div className="notify__name">
                <h6 class="notify__h6">Vũ Quang Huy</h6>
                <p>Đã Đăng Ký Vay Thành Công</p>
                <p>1p trước</p>
            </div>
        </div>
    );
}

export default Dialog;