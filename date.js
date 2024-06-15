const dateNow = (Date.now());

function formatDate(date) {
    const handlerDate = new Date(date);
    const locale = 'pt-BR';
    return handlerDate.toLocaleString(locale, {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
    });
}

console.log(formatDate(dateNow))


new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'full',
}).format(date)

export function formateDate(date?: string, separator?: boolean): string {
  const type: boolean =
    separator == true || separator == undefined ? true : false
  const dateObj = date ? new Date(date) : new Date()
  const dia = date
    ? String(dateObj.getDate() + 1).padStart(2, "0")
    : String(dateObj.getDate()).padStart(2, "0")
  const mes = String(dateObj.getMonth() + 1).padStart(2, "0")
  const ano = String(dateObj.getFullYear()).padStart(4, "0")

  if (type) {
    return `${dia}/${mes}/${ano}`
  }
  return dia + mes + ano
}

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl

