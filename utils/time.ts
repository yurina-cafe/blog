export const formatedDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}

export const formatedTime = (time: string) => {
  if (!time) return '';
  const [year, month, day] = time.split('-');
  return `${year}/${parseInt(month)}/${parseInt(day)}`;
}
