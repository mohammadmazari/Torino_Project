function toPersianDigits(input) {
  const str = String(input); // تبدیل به رشته
  return str.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}

export default toPersianDigits;
