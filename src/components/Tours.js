import React from 'react'
import Title from './Title'
import { ToursData } from './Data'



const Tours = () => {
  let cont = 0;
  return (
    <div>
    <div><section className="section" id="tours">

    <Title title={'featured'} subTitle={'tours'}/>

    {/*<div className="section-title">
      <h2>featured <span>tours</span></h2>
    </div>*/}

    <div className="section-center featured-center">
      {
        ToursData.map((tour) => {
        const {id, title, text, country, days, cost, date, img} = tour;
        console.log(img)
        cont ++;
        return (
          <article className="tour-card" key={id}>
            <div className="tour-img-container">
              <img src={img} className="tour-img" alt="" />
              <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{title}</h4>
              </div>
              <p>
                {text}
              </p>
              <div className="tour-footer">
                <p>
                  <span><i className="fas fa-map"></i></span> {country}
                </p>
                <p>{days} days</p>
                <p>from ${cost}</p>
              </div>
            </div>
          </article>
        )
        }
        )
      }

      {/*<article className="tour-card">
        <div className="tour-img-container">
          <img src={Tour1} className="tour-img" alt="" />
          <p className="tour-date">august 26th, 2020</p>
        </div>
        <div className="tour-info">
          <div className="tour-title">
            <h4>Tibet Adventure</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            vitae tempore voluptatum maxime reprehenderit eum quod
            exercitationem fugit, qui corporis.
          </p>
          <div className="tour-footer">
            <p>
              <span><i className="fas fa-map"></i></span> china
            </p>
            <p>6 days</p>
            <p>from $2100</p>
          </div>
        </div>
      </article>

      <article className="tour-card">
        <div className="tour-img-container">
          <img src={Tour2} className="tour-img" alt="" />
          <p className="tour-date">october 1th, 2020</p>
        </div>
        <div className="tour-info">
          <h4>best of java</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            vitae tempore voluptatum maxime reprehenderit eum quod
            exercitationem fugit, qui corporis.
          </p>
          <div className="tour-footer">
            <p>
              <span><i className="fas fa-map"></i></span> indonesia
            </p>
            <p>11 days</p>
            <p>from $1400</p>
          </div>
        </div>
      </article>

      <article className="tour-card">
        <div className="tour-img-container">
          <img src={Tour3} className="tour-img" alt="" />
          <p className="tour-date">september 15th, 2020</p>
        </div>
        <div className="tour-info">
          <h4>explore hong kong</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            vitae tempore voluptatum maxime reprehenderit eum quod
            exercitationem fugit, qui corporis.
          </p>
          <div className="tour-footer">
            <p>
              <span><i className="fas fa-map"></i></span> hong kong
            </p>
            <p>8 days</p>
            <p>from $5000</p>
          </div>
        </div>
      </article>

      <article className="tour-card">
        <div className="tour-img-container">
          <img src={Tour4} className="tour-img" alt="" />
          <p className="tour-date">december 5th, 2019</p>
        </div>
        <div className="tour-info">
          <h4>kenya highlights</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            vitae tempore voluptatum maxime reprehenderit eum quod
            exercitationem fugit, qui corporis.
          </p>
          <div className="tour-footer">
            <p>
              <span><i className="fas fa-map"></i></span> kenya
            </p>
            <p>20 days</p>
            <p>from $3300</p>
          </div>
        </div>
      </article>*/}
    </div>
  </section></div>
  </div>)
}

export default Tours