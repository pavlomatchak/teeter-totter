import { shapes, sides } from '../config';
import { v4 } from 'uuid';

export const generateBlock = (swingPosition, side) => {
  const random = Math.ceil(Math.random() * 10);
  return {
    id: v4(),
    height: random * 10,
    offset: 0,
    position: {
      top: 0,
      left: side === sides.RIGHT_SIDE_BLOCKS ?
        startPositionOfRandom(swingPosition) : startPositionOfControlled(swingPosition),
    },
    shape: shapes[Math.floor(Math.random() * shapes.length)],
    weight: random,
    width: random * 10,
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

export const addLoad= array => {
  if (array.length) {
    return array.reduce((total, item) => total += item.weight * item.offset);
  }

  return 0;
};

export const calculateOffset = ({ item, side, swingPosition }) => {
  const center = swingPosition.left + (swingPosition.width / 2);
  if (side === sides.LEFT_SIDE_BLOCKS) {
    return center - item.position.left - (item.width / 2);
  }

  return item.position.left - center + (item.width / 2);
};
