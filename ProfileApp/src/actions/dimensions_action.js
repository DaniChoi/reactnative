//define type of action
export const STYLE_DIMENSIONS = 'STYLE_DIMENSIONS';

//function which makes action Object

export function updateStyleDimensions(mWidth, mHeight) {
    console.log("WIDTH", mWidth)
    console.log("HEIGHT", mHeight)
  return {
    type: STYLE_DIMENSIONS,
    payload: {mWidth, mHeight}
  }
}
