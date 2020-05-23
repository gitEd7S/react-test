import React from 'react';

const Main = () => {
    return (
        <main className="main">
            <div className="main__banner banner">
                <picture className="banner__picture">
                    <img src="https://www.starpool.com/wp-content/uploads/2019/06/Sauna-Outdoor-4.jpg" alt="" className="banner__image"/>
                </picture>
            </div>
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
                            Web Site: <a href="https://smart-lemon-school.com.ua/" target="_blank" className="user__link">smart-lemon-school.com.ua</a>
                        </li>
                    </ul>
                </div>
            </article>
            <div className="main__creacte-post create-post">
                <span className="create-post__title">My post</span>
                <form action="#" className="create-post__form">
                    <textarea name="post" className="create-post__textarea" placeholder="Create new post"></textarea>
                    <button type="submit" className="create-post__submit">Send</button>
                </form>
            </div>
            <div className="main__posts">
                <div className="main__new-post new-post">
                    <picture className="new-post__picture">
                        <img src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/1-corvette-stingray-c8-2019-fd-hr-hero-front_0.jpg?itok=SEYe_vLy" alt="" className="new-post__image"/>
                    </picture>
                    <div className="new-post__content">
                        <span className="new-post__text">Hey, why nobody love me ??</span>
                    </div>
                </div>
                <div className="main__new-post new-post">
                    <picture className="new-post__picture">
                        <img src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/1-corvette-stingray-c8-2019-fd-hr-hero-front_0.jpg?itok=SEYe_vLy" alt="" className="new-post__image"/>
                    </picture>
                    <div className="new-post__content">
                        <span className="new-post__text">Hey, why nobody love me ??</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;
