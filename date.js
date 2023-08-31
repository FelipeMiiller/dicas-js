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


//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl

