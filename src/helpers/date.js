export default function formatDate(dt) {
  if (dt) {
    const [day, month, year] = dt.split('/');

    const date = new Date(+year, +month - 1, +day);
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }
}
