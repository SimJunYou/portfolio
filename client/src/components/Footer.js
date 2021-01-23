import React from 'react';

export default () => (
  <div className="row w-100" id="Footer">
    <div className="col d-flex justify-content-center align-items-center">
      <span className="py-2" style={{ textAlign: 'center' }}>
        Made by Sim Jun You, 2021
        <br />
        <div className="pt-3">
          <img className="logo" src="/react-logo.svg" alt="React" />
          <span className="p-2">🞠</span>
          <img
            className="logo"
            style={{ height: '55px', width: '55px' }}
            src="/bootstrap-logo.svg"
            alt="Bootstrap"
          />
          <span className="p-2">🞠</span>
          <img
            className="logo"
            style={{ position: 'relative', top: '-1px' }}
            src="/koa-logo.svg"
            alt="Koa"
          />
        </div>
      </span>
    </div>
  </div>
);
