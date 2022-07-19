export default function colorLabel(dt) {
  let color = 'yellow-500';

  switch (dt) {
    case 'pemuda-remaja':
      color = 'blue-500';
      break;
    case 'dewasa':
      color = 'teal-600';
      break;
    case 'umum':
      color = 'violet-500';
      break;
  }

  return color;
}
