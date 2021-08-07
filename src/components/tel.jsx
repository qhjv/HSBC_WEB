import React from 'react';
import PropTypes from 'prop-types';
import tel from "../assest/images/tel.png"

Tel.propTypes = {
    
};

function Tel(props) {
    return (
        <div className="telFixed">
            <a href="tel:0358839559">
              <img src={tel} alt="" />
            </a>
        </div>
    );
}

export default Tel;