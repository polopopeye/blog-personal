const twFormater = (twCssObj) => {
  const CSSkeys = Object.keys(twCssObj);

  let response = '';
  for (let i = 0; i < CSSkeys.length; i++) {
    const keyName = CSSkeys[i];
    if (keyName.trim() === 'base') {
      response += ' ' + twCssObj[keyName];
    } else {
      const twClassNames = twCssObj[keyName].match(/\S+/gm);
      twClassNames.forEach((twClassName) => {
        response += ' ' + keyName + ':' + twClassName;
      });
    }
  }

  return response;
};

export default twFormater;
