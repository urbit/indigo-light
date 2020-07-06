const chroma = require('chroma-js')

const base = {
  white: 'rgba(255,255,255,1)',
  black: 'rgba(0,0,0,1)',
  red: 'rgba(255,65,54,1)',
  yellow: 'rgba(255,199,0,1)',
  green: 'rgba(0,159,101,1)',
  blue: 'rgba(0,142,255,1)',
};

const shades = [
  [0.1, '10'], 
  [0.2, '20'], 
  [0.3, '30'], 
  [0.4, '40'], 
  [0.5, '50'], 
  [0.6, '60'], 
  [0.7, '70'], 
  [0.8, '80'], 
  [0.9, '90'], 
  [1.0, '100'],
]

const generateShade = (key, color, shade) => {
  return {
    [key + shade[1]]: chroma(color).alpha(shade[0]).css('rgba')
  }
}

const scales = Object.entries(base).reduce((acc, [key, value], index) => {
  const colorShades = shades.reduce((bcc, shade) => {
    const entry = generateShade(key, value, shade)
    return {...bcc, ...entry}
  }, {})
  return {...acc, ...colorShades}
}, {})

console.log(scales)