import React from 'react';
import './User.css'

const User = () => {
    return(
        <article className="main__user user">
            <picture className="user__picture">
                <img src="https://ichef.bbci.co.uk/wwfeatures/live/976_549/images/live/p0/7z/n7/p07zn7p7.jpg" alt="" className="user__image"/>
            </picture>
            <div className="user__content">
                <h2 className="user__name">Eduard S.</h2>
                <ul className="user__data">
                    <li className="user__item">Date of Birth: 7 june</li>
                    <li className="user__item">City: Ukrain</li>
                    <li className="user__item">Education: BSU'11</li>
                    <li className="user__item">
                        Web Site: <a href="https://smart-lemon-school.com.ua/" target="_blank" rel="noopener noreferrer" className="user__link">smart-lemon-school.com.ua</a>
                    </li>
                </ul>
            </div>
        </article>
    );
}

export default User;
