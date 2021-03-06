import React from 'react';

interface Props {
  text: string;
  icon?: JSX.Element;
  className?: string;
}

const SmallTitle = (props: Props) => (
  <div className="mt-2 mb-1" data-testid="smallTitle">
    <small className="card-title text-muted text-uppercase">
      <span className={props.className}>{props.text}</span>
      {props.icon}
    </small>
  </div>
);

export default SmallTitle;
