import { rgb } from 'color-convert';

export type updateHexColorAction = {
  type: 'update-hex-color';
  payload: {
    hexColor: string;
  };
};

export type updateRGBColorAction = {
  type: 'update-rgb-color';
  payload: { rgb: [number, number, number] };
};

export type AdjustColorActions = updateHexColorAction | updateRGBColorAction;

type ColorState = {
  hexColor: string;
};

export const initialState: ColorState = {
  hexColor: '#BADA55',
};

export const colorReducer = (
  state: ColorState = initialState,
  action: AdjustColorActions,
) => {
  if (action.type === 'update-hex-color') {
    const { hexColor } = action.payload;
    return { ...state, hexColor };
  }

  if (action.type === 'update-rgb-color') {
    const hexColor = '#' + rgb.hex(action.payload.rgb);
    return { ...state, hexColor };
  }

  return state;
};
