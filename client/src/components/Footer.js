import React from 'react';

export default () => (
  <div className="row w-100" id="Footer">
    <div className="col d-flex justify-content-center align-items-center">
      <span className="py-2" style={{ textAlign: 'center' }}>
        Made by Sim Jun You, 2021
        <br />
        <div className="pt-3">
          <img
            style={{ height: '40px', width: '40px' }}
            src="/react-logo.svg"
            alt="React"
          />
          <img
            className="p-2"
            style={{ height: '60px', width: '60px' }}
            src="/bootstrap-logo.svg"
            alt="Bootstrap"
          />
          <img
            style={{
              height: '45px',
              width: '45px',
              position: 'relative',
              top: '-1px',
            }}
            src="/koa-logo.svg"
            alt="Koa"
          />
        </div>
      </span>
    </div>
  </div>
);
