function shadeColor(color, percent) {   
    const f = parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return `#${(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1)}`;
}

function createVariables(color, variableName){
  const variableString = `:root { --${variableName}-100: ${shadeColor(color, 0.75)}; --${variableName}-200: ${shadeColor(color, 0.5)}; --${variableName}-300: ${shadeColor(color, 0.25)}; --${variableName}-400: ${shadeColor(color, 0)}; --${variableName}-500: ${shadeColor(color, -0.25)}; --${variableName}-600: ${shadeColor(color, -0.5)}; --${variableName}-700: ${shadeColor(color, -0.75)}; }`;

  const styleTarget = document.getElementById('root-style')
  styleTarget.innerText = variableString
}

module.exports = createVariables;
