import React from 'react';

const Item = ({ sourceImg, name, caption }) =>
  <div className="Item">
    <img src={sourceImg} className="image-radius" />
    <h4 className="itemTxt"> {name} </h4>
    <h4 className="itemTxt"> {caption} </h4>
  </div>

const Partner = ({ sourceImg }) =>
  <div className="EachLogo">
    <img src={sourceImg} className="partner-logo" />
  </div>

const Content = ({ image, title, desc, style }) =>
  <div className="ContentBox">
    <img src={image} className="image-icon" />
    <p className="title">{title}</p>
    <p className="description">{desc}</p>
  </div>

const Feature = ({ image1, title1, desc1, image2, title2, desc2 }) =>
  <div className="oneRow">
    <div className="boxMargin">
      <img src={image1} className="image-icon" />
      <p className="title">{title1}</p>
      <p className="description">{desc1}</p>
    </div>
    {
      image2 ?
        <div className="boxMargin">
          <img src={image2} className="image-icon" />
          <p className="title">{title2}</p>
          <p className="description">{desc2}</p>
        </div> :
        <div></div>
    }
  </div>

const FeaturePhone = ({ image, title, desc }) =>
  <div className="boxFeature">
    <img src={image} className="image-icon" />
    <p className="title">{title}</p>
    <p className="description">{desc}</p>
  </div>

export { Item, Partner, Content, Feature, FeaturePhone };