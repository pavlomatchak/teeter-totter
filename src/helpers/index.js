import { shapes, sides } from '../config';
import { v4 } from 'uuid';

export const generateBlock = (swingPosition, side) => {
  return {
    id: v4(),
    position: {
      top: 0,
      left: side === sides.RIGHT_SIDE_BLOCKS ?
        startPositionOfRandom(swingPosition) : startPositionOfControlled(swingPosition),
    },
    shape: shapes[Math.floor(Math.random() * shapes.length)],
    weight: Math.ceil(Math.random() * 10),
  };
};

export const startPositionOfControlled = ({ left, width }) => {
  return left + (width / 4);
};

export const startPositionOfRandom = ({ left, width }) => {
  const middle = left + (width / 2);
  const end = left + width;
  return Math.floor(Math.random() * (end - middle + 1)) + middle;
};
