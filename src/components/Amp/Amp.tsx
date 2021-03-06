import React, { FC, useState, useRef } from 'react';
import Cabinent from '../Cabinet/Cabinet';
import Eq from '../Eq/Eq';
import AmpWrap from './Amp.styles';

const Amp: FC = () => {
  const [cabinetType] = useState(1);
  const visualizer = useRef<null | HTMLCanvasElement>(null);
  return (
    <AmpWrap>
      <Eq visualizer={visualizer} />
      <Cabinent visualizer={visualizer} cabinetType={cabinetType} />
    </AmpWrap>
  );
};

export default Amp;
